import React, { useEffect, useState } from "react"
import "styled-components/macro"
import styled from "styled-components"
import { BrowserQRCodeReader } from "@zxing/library"
import Portal from "./Portal"
import { Box, Heading, Text, Button } from "rebass"

const getCodeFromVideo = async handler => {
  try {
    const codeReader = new BrowserQRCodeReader()
    const videoDevices = await codeReader.getVideoInputDevices()

    if (videoDevices.length > 0) {
      const result = await codeReader.decodeFromInputVideoDevice(
        videoDevices[0].deviceId,
        "video"
      )

      return handler(Promise.resolve(result))
    }
    return handler(
      Promise.reject({ cameraFound: false, message: "No Camera found" })
    )
  } catch (error) {
    return handler(
      Promise.reject({ cameraFound: true, message: "Something went wrong" })
    )
  }
}

const Video = styled.video`
  width: 100%;
`

const QRCamera = ({ onResult, onClose }) => {
  const [error, setError] = useState(false)
  const [result, setResult] = useState(false)
  useEffect(() => {
    getCodeFromVideo(handleVideoResult)
  }, [])

  const handleVideoResult = async value => {
    try {
      const result = await value
      setResult(true)
      onResult(result)
    } catch (error) {
      setError(true)
    }
  }

  return (
    <Portal>
      <>
        <Box
          width={1}
          css={{
            height: "100vh",
            position: "fixed",
            backgroundColor: "rgba(0,0,0,0.6)",
            top: 0,
            left: 0
          }}
        />
        <Box
          bg="white"
          p={4}
          css={{
            position: "fixed",
            left: "50%",
            top: "24px",
            transform: "translateX(-50%)",
            borderRadius: "5px",
            minWidth: "400px"
          }}
        >
          <Button
            color="gray.3"
            fontWeight={400}
            bg="transparent"
            border="none"
            css={{
              position: "absolute",
              top: 0,
              right: 0,
              cursor: "pointer"
            }}
            onClick={onClose}
          >
            close
          </Button>
          <Heading mb={2}>Scan your QR Code below</Heading>
          {error && (
            <Text textAlign="center" fontWeight={700} fontSize={3}>
              Sorry we cant find a camera
            </Text>
          )}

          {!error && (
            <Box
              width={400}
              css={`
                position: relative;
              `}
            >
              <Text
                result={result}
                bg="rgba(0,0,255,0.7)"
                textAlign="center"
                fontWeight={400}
                fontSize={4}
                color="white"
                py={3}
                px={4}
                css={`
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);
                  border-radius: 5px;
                  white-space: nowrap;
                  opacity: ${p => (p.result ? 1 : 0)};
                  transition: opacity 0.3s ease;
                `}
              >
                Success!
              </Text>

              <Video id="video" />
            </Box>
          )}
        </Box>
      </>
    </Portal>
  )
}

export default QRCamera
