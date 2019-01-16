import React from "react"
import "styled-components/macro"
import NavLink from "./NavLink"
import { Box } from "rebass"

export default () => (
  <Box
    py={3}
    css={p => ({ borderTop: "1px solid", borderColor: p.theme.colors.gray[1] })}
  >
    <NavLink
      css={p => ({ marginRight: p.theme.space[3] })}
      href="https://github.com/samjbmason/fragments"
    >
      github
    </NavLink>

    <NavLink href="/api">api</NavLink>
  </Box>
)
