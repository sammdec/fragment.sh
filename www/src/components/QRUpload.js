import React from "react"
import "styled-components/macro"
import { Button } from "rebass"
import { BrowserQRCodeReader } from "@zxing/library"

const QRUpload = ({ onChange }) => {
  const handleQRUpload = async e => {
    const dataURL = URL.createObjectURL(e.target.files[0])
    const QrReader = new BrowserQRCodeReader()
    const res = QrReader.decodeFromImage(undefined, dataURL)

    onChange(res)
  }

  return (
    <>
      <input
        id="qrUpload"
        type="file"
        accept=".png, .jpg, .jpeg, .svg"
        onChange={handleQRUpload}
        css={{ display: "none" }}
      />
      <Button
        css={{ cursor: "pointer" }}
        width={1}
        mb={2}
        as="label"
        htmlFor="qrUpload"
      >
        Upload QR
      </Button>
    </>
  )
}

export default QRUpload
