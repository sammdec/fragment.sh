import React, { Component } from "react"
import "styled-components/macro"
import { Box, Text, Flex, Heading } from "rebass"
import Logo from "./Logo"

export default class PrintFragment extends Component {
  render() {
    const { index, fragment, qrURI } = this.props
    return (
      <Box p={4}>
        <Flex alignItems="center" mb={3}>
          <Box width={50}>
            <Logo />
          </Box>
          <Heading fontWeight={400} letterSpacing={2} color="blue">
            fragment.sh
          </Heading>
        </Flex>
        <Text mb={2} fontWeight={700}>
          Fragment Holder #{index + 1}
        </Text>
        <Text mb={2} fontWeight={700}>
          Notes/Name of secret:
        </Text>

        <Box
          mb={4}
          width={1}
          bg="gray.2"
          css={{ height: "80px", borderRadius: "5px" }}
        />
        <Flex alignItems="flex-start">
          <Box width={3 / 5} pr={5}>
            <Text mb={2} fontWeight={700}>
              Fragment string
            </Text>
            <Box
              css={p => ({
                border: "2px solid",
                borderColor: p.theme.colors.gray[3],
                borderRadius: "5px",
                padding: p.theme.space[2],
                marginBottom: p.theme.space[3],
                fontSize: p.theme.fontSizes[3],
                fontFamily: p.theme.fonts.mono,
                overflowWrap: "break-word",
                lineHeight: 1.4
              })}
            >
              {fragment}
            </Box>
            <Text mb={4} fontSize={2} lineHeight={1.4}>
              To reveal the secret, the person who gave you this will need to go
              to{" "}
              <Text
                as="span"
                fontFamily="mono"
                bg="blue"
                color="white"
                px={1}
                css={{ borderRadius: "5px" }}
              >
                https://fragment.sh/reveal
              </Text>{" "}
              and enter in this fragment key as well as others.
            </Text>
          </Box>
          <Box width={2 / 5}>
            <Text mb={2} fontWeight={700}>
              Fragment QR
            </Text>
            <img src={qrURI} alt="QR code containing fragment text" />
          </Box>
        </Flex>
      </Box>
    )
  }
}
