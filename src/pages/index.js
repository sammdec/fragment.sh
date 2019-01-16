import React from "react"
import { createPage, createSwitch } from "navi"
import Home from "./Home"
import Reveal from "./Reveal"
import FAQ from "./FAQ"
import API from "./API"

export default createSwitch({
  paths: {
    "/": createPage({
      title: "fragment.sh - Backup your secrets using your social circle",
      getContent: () => <Home />
    }),

    "/reveal": createPage({
      title: "fragment.sh - Combine your fragments to reveal your secret",
      getContent: () => <Reveal />
    }),
    "/faq": createPage({
      title: "fragment.sh - FAQ",
      getContent: () => <FAQ />
    }),
    "/api": createPage({
      title: "fragment.sh - API",
      getContent: () => <API />
    })
  }
})
