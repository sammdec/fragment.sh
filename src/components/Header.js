import React from "react"
import "styled-components/macro"
import { Box, Flex, Heading } from "rebass"
import Logo from "./Logo"
import NavLink from "./NavLink"

export default () => (
  <Flex py={3} mb={3} alignItems="center">
    <NavLink href="/" css={{ textDecoration: "none" }}>
      <Flex alignItems="center">
        <Box width={80}>
          <Logo />
        </Box>
        <Heading fontWeight={500} letterSpacing={2} color="blue">
          fragment.sh
        </Heading>
      </Flex>
    </NavLink>
    <Box ml="auto">
      <NavLink
        href="/faq"
        activeClassName="active"
        css={`
          margin-right: ${p => p.theme.space[4]}px;
        `}
      >
        FAQ
      </NavLink>
      <NavLink activeClassName="active" href="/reveal">
        Reveal secret
      </NavLink>
    </Box>
  </Flex>
)
