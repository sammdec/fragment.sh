import { share, combine } from "./secrets"

const SECRET_STRING = "This is a test secret"

test("secret can be recovered from the consensus number of pieces", () => {
  let resultSecret
  try {
    const pieces = share(SECRET_STRING, 10, 5)
    resultSecret = combine(pieces)
  } catch (error) {
    expect(error).toBeFalsy()
  }

  expect(resultSecret).toEqual(SECRET_STRING)
})

test("secret cannot be recovered from less than the consensus number of pieces", () => {
  let resultSecret
  try {
    const notEnoughPieces = share(SECRET_STRING, 10, 5).slice(0, 2)

    resultSecret = combine(notEnoughPieces)
  } catch (error) {
    expect(error).toBeTruthy()
  }

  expect(resultSecret).not.toEqual(SECRET_STRING)
})

test("secret cannot be recovered when an invalid piece is provided", () => {
  let resultSecret
  try {
    const pieces = share(SECRET_STRING, 10, 5)
    pieces.push("Some invalid piece")

    resultSecret = combine(pieces)
  } catch (error) {
    expect(error).toBeTruthy()
  }

  expect(resultSecret).not.toEqual(SECRET_STRING)
})
