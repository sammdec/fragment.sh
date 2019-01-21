import React from "react"
import { createPage, createSwitch } from "navi"
import Home from "./Home"
import Reveal from "./Reveal"
import FAQ from "./FAQ"
import Api from "./Api"

export default createSwitch({
  paths: {
    "/": createPage({
      title: "fragment.sh",
      getContent: () => <Home />
    }),
    "/reveal": createPage({
      title: "fragment.sh - reveal your secret",
      getContent: () => <Reveal />
    }),
    "/faq": createPage({
      title: "fragment.sh - faq",
      getContent: () => <FAQ />
    }),
    "/api": createPage({
      title: "fragment.sh - api",
      getContent: () => <Api />
    })
  }
})
