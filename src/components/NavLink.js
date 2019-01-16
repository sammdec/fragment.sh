import styled from "styled-components"
import { NavLink } from "react-navi"

export default styled(NavLink)`
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes[3]}px;
  color: ${p => p.theme.colors.black};
  font-weight: 700;
  &:hover {
    color: ${p => p.theme.colors.blue};
  }
  &.active {
    color: ${p => p.theme.colors.blue};
  }
`
