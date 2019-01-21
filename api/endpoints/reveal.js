const { send, json, createError, sendError } = require("micro")
const { combine } = require("../utils")

module.exports = async (req, res) => {
  const js = await json(req)
  const { fragments } = js
  try {
    const secret = combine(fragments)
    return send(res, 200, { secret })
  } catch (error) {
    console.log(error.message)
    return send(res, 400, { error: error.message })
  }
}
