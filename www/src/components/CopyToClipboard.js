import React, { useState } from "react"
import "styled-components/macro"
import { Text, Button, Box } from "rebass"
import { CopyToClipboard } from "react-copy-to-clipboard"

export default ({ text }) => {
  const [isCopied, setCopied] = useState(false)

  return (
    <Box css={{ position: "relative" }}>
      <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
        <Button mr={2} css={{ cursor: "pointer" }}>
          Copy to clipboard
        </Button>
      </CopyToClipboard>

      {isCopied && (
        <Text
          mt={1}
          fontSize={1}
          color="blue"
          css={`
            position: absolute;
            animation: hide 0.6s 2s both;

            @keyframes hide {
              to {
                opacity: 0;
                display: none;
              }
            }
          `}
        >
          Copied!
        </Text>
      )}
    </Box>
  )
}
