import React from "react"
import "styled-components/macro"
import { NavProvider, NavContent } from "react-navi"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { Box } from "rebass"
import Header from "./components/Header"
import Footer from "./components/Footer"

import theme from "./theme"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    margin: 0;
    font-family: ${theme.fonts.sans};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
`

const App = ({ navigation }) => (
  <NavProvider navigation={navigation}>
    <ThemeProvider theme={theme}>
      <Box mx="auto" px={[3, 4]} css={{ maxWidth: "1024px" }}>
        <GlobalStyle />
        <Header />
        <Box pb={4}>
          <NavContent />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  </NavProvider>
)

export default App
