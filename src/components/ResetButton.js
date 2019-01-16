import React from "react"
import "styled-components/macro"
import { Button, Box } from "rebass"
import { ReactComponent as Reset } from "./Reset.svg"

export default ({ onClick }) => (
  <Button
    ml="auto"
    border="3px solid"
    borderColor="blue"
    bg="white"
    color="blue"
    onClick={onClick}
    fontWeight={400}
    css={p => ({
      cursor: "pointer",
      display: "flex",
      alignItems: "baseline",
      lineHeight: 1
    })}
  >
    <Box width={14} mr={2}>
      <Reset />
    </Box>
    <Box>start over</Box>
  </Button>
)
