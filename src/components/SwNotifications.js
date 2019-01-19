import React, { useEffect, useState } from "react"
import "styled-components/macro"
import { Card } from "rebass"
import { Transition, animated } from "react-spring"
import theme from "../theme"

const AnimatedDiv = animated(Card)

const SwNotifications = () => {
  const [message, setMessage] = useState()
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    window.addEventListener("sw-update", () => {
      setMessage(
        "New content is available and will be used when all tabs for this page are closed."
      )
      setVisible(true)

      setTimeout(() => setVisible(false), 3000)
    })

    window.addEventListener("sw-install", () => {
      setMessage("Content cached, this app is now ready to use offline")
      setVisible(true)
      setTimeout(() => setVisible(false), 3000)
    })
  })

  return (
    <Transition
      native
      items={visible}
      from={{ opacity: 0, transform: "translateX(100%)" }}
      enter={{ opacity: 1, transform: "translateX(0)" }}
      leave={{ opacity: 0, transform: "translateX(100%)" }}
    >
      {visible =>
        visible &&
        (props => (
          <AnimatedDiv
            bg="white"
            border="2px solid"
            borderColor="black"
            borderRadius="5px"
            px={3}
            py={2}
            css={{
              position: "fixed",
              right: theme.space[2],
              top: theme.space[2]
            }}
            style={props}
          >
            {message}
          </AnimatedDiv>
        ))
      }
    </Transition>
  )
}

export default SwNotifications
