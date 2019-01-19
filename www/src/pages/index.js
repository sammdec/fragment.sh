import React from "react"
import { createPage, createSwitch } from "navi"
import Home from "./Home"
import Reveal from "./Reveal"
import FAQ from "./FAQ"
import API from "./API"

export default createSwitch({
  paths: {
    "/": createPage({
      getContent: () => <Home />
    }),

    "/reveal": createPage({
      getContent: () => <Reveal />
    }),
    "/faq": createPage({
      getContent: () => <FAQ />
    }),
    "/api": createPage({
      getContent: () => <API />
    })
  }
})
