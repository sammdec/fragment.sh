import React from "react"
import styled from "styled-components"

const StyledLogo = styled.svg`
  .firstLine {
    animation: moveDash 20s linear infinite reverse;
  }

  .secondLine {
    animation: moveDash 30s linear infinite reverse;
  }

  .thirdLine {
    animation: moveDash 40s linear infinite reverse;
  }

  @keyframes moveDash {
    to {
      stroke-dashoffset: 1000;
    }
  }
`

export default () => (
  <StyledLogo viewBox="0 0 294 208">
    <g
      stroke="#00f"
      strokeWidth="8"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
    >
      <path
        className="secondLine"
        d="M95 204c54 0 58-199.5 105-199.5"
        strokeDasharray="34,33"
      />
      <path
        className="firstLine"
        d="M65 204c54 0 58-199.5 105-199.5"
        strokeDasharray="21,24"
      />
      <path
        className="thirdLine"
        d="M125 204c54 0 58-199.5 105-199.5"
        strokeDasharray="55,36"
      />
      <path d="M125 204H4M170 4.5h120" />
    </g>
  </StyledLogo>
)
