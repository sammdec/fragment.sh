const secrets = require("secrets.js-grempe")
const sha256 = require("hash.js/lib/hash/sha/256")

const MAC_LENGTH = 32

const generateMAC = secret =>
  sha256()
    .update(secret)
    .digest("hex")
    .slice(-1 * MAC_LENGTH)

const compress = shard => {
  const shardData = shard.slice(3)
  const shardDataBase64 = Buffer.from(shardData, "hex").toString("base64")
  return shard.slice(0, 3) + shardDataBase64
}

const decompress = shard => {
  const shardData = shard.slice(3)
  const shardDataHex = Buffer.from(shardData, "base64").toString("hex")
  return shard.slice(0, 3) + shardDataHex
}

const share = (secret, fragments, threshold) => {
  const mac = generateMAC(secret)
  const hex = secrets.str2hex(mac + secret)
  const fragmentsArray = secrets.share(hex, fragments, threshold)
  return fragmentsArray.map(compress)
}

const combine = fragments => {
  const hex = secrets.combine(fragments.map(decompress))
  const string = secrets.hex2str(hex)

  const mac = string.slice(0, MAC_LENGTH)
  const secret = string.slice(MAC_LENGTH)

  if (generateMAC(secret) === mac) {
    return secret
  }

  throw new Error(
    "You have either not provided enough fragments or at least one fragment has been mistyped"
  )
}

module.exports.share = share
module.exports.combine = combine
