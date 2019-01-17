import React from "react"
import "styled-components/macro"
import { Box, Flex, Heading } from "rebass"
import Logo from "./Logo"
import NavLink from "./NavLink"

export default () => (
  <Flex py={3} mb={3} alignItems="center" flexDirection={["column", "row"]}>
    <NavLink href="/" css={{ textDecoration: "none" }}>
      <Flex mb={[3, 0]} alignItems="center">
        <Box width={80}>
          <Logo />
        </Box>
        <Heading fontWeight={500} letterSpacing={2} color="blue">
          fragment.sh
        </Heading>
      </Flex>
    </NavLink>
    <Flex
      width={[1, "auto"]}
      ml={[0, "auto"]}
      flexDirection={["column", "row"]}
      alignItems="center"
    >
      <NavLink
        href="/faq"
        activeClassName="active"
        css={`
          flex-shrink: 0;
          text-align: center;
          margin-bottom: ${p => p.theme.space[3]}px;
          @media screen and (min-width: ${p => p.theme.breakpoints[0]}) {
            margin-bottom: 0;
            margin-right: ${p => p.theme.space[4]}px;
          }
        `}
      >
        FAQ
      </NavLink>
      <NavLink
        activeClassName="active"
        href="/reveal"
        css={`
          box-sizing: border-box;
          flex-shrink: 0;
          text-align: center;
          background-color: ${p => p.theme.colors.blue};
          color: ${p => p.theme.colors.white};
          border-radius: 4px;
          padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
          width: 100%;

          &.active {
            color: ${p => p.theme.colors.white};
          }

          @media screen and (min-width: ${p => p.theme.breakpoints[0]}) {
            width: auto;
          }
        `}
      >
        Reveal secret
      </NavLink>
    </Flex>
  </Flex>
)
