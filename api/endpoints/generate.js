const { send, json } = require("micro")
const { share } = require("../utils")

module.exports = async (req, res) => {
  const js = await json(req)
  const { secret, noOfFragments, threshold } = js

  const fragments = share(secret, noOfFragments, threshold)

  return send(res, 200, { fragments })
}
