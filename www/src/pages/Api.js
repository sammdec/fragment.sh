import React from "react"
import "styled-components/macro"
import styled from "styled-components"

import { Box, Heading, Text, Card, Link } from "rebass"

const StyledCode = styled.code`
  font-family: ${p => p.theme.fonts.mono};
  white-space: pre;
  tab-size: 4;
`

const StyledTh = styled.th`
  background-color: ${p => p.theme.colors.gray[1]};
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  text-align: left;
  border-bottom: 1px solid ${p => p.theme.colors.gray[2]};
  border-top: 1px solid ${p => p.theme.colors.gray[2]};
  &:nth-child(1) {
    border-left: 1px solid ${p => p.theme.colors.gray[2]};
    border-radius: 5px 0px 0px 5px;
  }
  &:last-child {
    border-right: 1px solid ${p => p.theme.colors.gray[2]};
    border-radius: 0px 5px 5px 0px;
  }
`

const StyledTd = styled.td`
  padding: ${p => p.theme.space[3]}px;
  border-bottom: 1px solid ${p => p.theme.colors.gray[2]};

  &:nth-child(1) {
    font-weight: 700;
  }

  &:nth-child(2) {
  }
`

const StyledTable = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  margin-bottom: ${p => p.theme.space[4]}px;
  width: 100%;
`

const Api = () => {
  return (
    <Box>
      <Heading fontSize={[5, 6]} mb={3} css={{ maxWidth: "30em" }}>
        API docs
      </Heading>
      <Text mb={3}>
        The API allows you to use the functionality of generating fragments and
        revealing scerets in a programatic way, no data is stored or cached. You
        can find the source code{" "}
        <Link href="https://github.com/samjbmason/fragment.sh/tree/master/api">
          here.
        </Link>
      </Text>

      <Text mb={3}>There are no rate limits or authentication required.</Text>

      <Text mb={3}>
        All requests must be encoded as JSON with the{" "}
        <Text
          css={`
            display: inline;
          `}
          fontFamily="mono"
        >
          `Content-Type: application/json`
        </Text>{" "}
        header.
      </Text>

      <Text fontSize={4} fontWeight={700} mb={2}>
        Generate fragments
      </Text>
      <Text color="gray.3" fontWeight={700} mb={1}>
        Endpoint
      </Text>
      <Card
        border="1px solid"
        borderColor="gray.3"
        borderRadius="5px"
        px={2}
        py={3}
        mb={4}
      >
        <Text fontFamily="mono">POST https://fragment.sh/api/generate</Text>
      </Card>
      <Text color="gray.3" fontWeight={700} mb={1}>
        Request Parameters
      </Text>
      <StyledTable>
        <tbody>
          <tr>
            <StyledTh>Key</StyledTh>
            <StyledTh>Type</StyledTh>
            <StyledTh>Required</StyledTh>
            <StyledTh>Description</StyledTh>
          </tr>
          <tr>
            <StyledTd>secret</StyledTd>
            <StyledTd>String</StyledTd>
            <StyledTd>Yes</StyledTd>
            <StyledTd>The secret you wish to convert into fragments</StyledTd>
          </tr>
          <tr>
            <StyledTd>fragments</StyledTd>
            <StyledTd>Integer</StyledTd>
            <StyledTd>Yes</StyledTd>
            <StyledTd>The number of fragments you want to generate</StyledTd>
          </tr>
          <tr>
            <StyledTd>threshold</StyledTd>
            <StyledTd>Integer</StyledTd>
            <StyledTd>Yes</StyledTd>
            <StyledTd>
              The minimum number of fragments required to reveal your secret
            </StyledTd>
          </tr>
        </tbody>
      </StyledTable>

      <Text color="gray.3" fontWeight={700} mb={1}>
        Example response
      </Text>
      <Card
        mb={5}
        border="1px solid"
        borderColor="gray.2"
        px={2}
        borderRadius="5px"
        css={`
          overflow-x: scroll;
        `}
      >
        <StyledCode>{`
{
  "fragments": [
    "801eBFyrlGItknVMLvARb75LHGxdgFVHqboWQqZQlu7mpNUW2ZwsLr4Tpe76DI20uwaDaaV8bWdWOtYr6ftWFngReVHg/yaUaq5BYlhSiU0Bk/avVaQhQB25P/ys+dRdQ2k",
    "802IvZ8a+Z5dMKfyyuu5/GmdCSrEErgbOO2DI42dsbPNjDBg8MfO+L1FqxRpgrUm5W2tTOBJyYCDgay59r4SH3j58pwNPMLarkJZpn+O6y7157OuaQIWDg3vL0ilewRypUW",
    "803WucOxbfwwv9KnpAcoixfPVVpZmu1BkUtVeGvQJ1UrOKV66UOi2ANPjuLTlnie3mYuPQU5pOvVtrqK30tEEYDwS8Dt22RDBPSYyGfE4m70eMUNPKo3VlBOkLgJjlA2ZjQ",
    "804K4aiftww/BKDNEt5eo5ocXfH91ToUyl72noI1UzUEKQm06fwc7qXBgNf4KRvsGpy8eb9BBWd3j9xcrdkV+Ujcf0O1Kee84iTYU8R9Pox+DIAPXXJkYUl2AICqCrUMTE5",
    "805U5fQ0I25Si9WYfDLP1OROAYFgXW9OY/ggxWR4xdPinZyu8HhwzhvLpSFCPdZUIZc/CFoxaAwhuMpvhCxD97DVxh9VzkElSJIZPdw3N8x/k/asCNpFORTXv3AG/+FIjz/",
    "806CXDeFTpIiKQcmmClnRzOYFMf5z4IS8q+1pE+14o7JtXnY2SOSGBidq9vRs+7Gf/wRLR8EzOv0A7D9m2kH/rA9TdK4DaVrjH4B+fvrVa+L57OtNHxydwSBr8QPfTFnaRN"
  ]
}
        `}</StyledCode>
      </Card>

      <Text fontSize={4} fontWeight={700} mb={2}>
        Reveal secret
      </Text>
      <Text color="gray.3" fontWeight={700} mb={1}>
        Endpoint
      </Text>
      <Card
        border="1px solid"
        borderColor="gray.3"
        borderRadius="5px"
        px={2}
        py={3}
        mb={4}
      >
        <Text fontFamily="mono">POST https://fragment.sh/api/reveal</Text>
      </Card>
      <Text color="gray.3" fontWeight={700} mb={1}>
        Request Parameters
      </Text>
      <StyledTable>
        <tbody>
          <tr>
            <StyledTh>Key</StyledTh>
            <StyledTh>Type</StyledTh>
            <StyledTh>Required</StyledTh>
            <StyledTh>Description</StyledTh>
          </tr>
          <tr>
            <StyledTd>fragments</StyledTd>
            <StyledTd>Array</StyledTd>
            <StyledTd>Yes</StyledTd>
            <StyledTd>
              An array containing the fragments you want to combine to reveal
              the secret
            </StyledTd>
          </tr>
        </tbody>
      </StyledTable>

      <Card
        mb={5}
        border="1px solid"
        borderColor="gray.2"
        px={2}
        borderRadius="5px"
        css={`
          overflow-x: scroll;
        `}
      >
        <StyledCode>{`
{
  "secret": "A test secret"
}
        `}</StyledCode>
      </Card>
    </Box>
  )
}

export default Api
