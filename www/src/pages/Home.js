import React, { useState } from "react"
import "styled-components/macro"
import { Box, Heading, Text } from "rebass"
import { useOnlineStatus } from "@21kb/react-online-status-hook"
import { share } from "../utils/secrets"
import CreateForm from "../components/CreateForm"
import Fragments from "../components/Fragments"
import NavLink from "../components/NavLink"

const Home = () => {
  const isOnline = useOnlineStatus()
  const [fragments, setFragments] = useState([])

  const handleSubmit = values => {
    const fragments = share(values.secret, values.fragments, values.threshold)
    setFragments(fragments)
  }

  const hasFragments = fragments.length > 0
  const handleReset = () => setFragments([])

  return (
    <div>
      {!hasFragments && (
        <>
          <Box mb={5}>
            <Heading fontSize={[5, 6]} mb={3} css={{ maxWidth: "30em" }}>
              Backup your secrets using your social circle
            </Heading>
            <Text
              lineHeight={1.4}
              fontSize={4}
              mb={3}
              css={{ maxWidth: "30em" }}
            >
              fragment.sh is a tool that allows you to split up a secret into
              multiple fragments that can shared with friends and family. When
              you need the secret you can ask for the fragments and combine them
              together to reveal the original secret.
            </Text>

            <Text lineHeight={1.4} fontSize={2}>
              Learn more on the{" "}
              <NavLink css={p => ({ fontSize: "inherit" })} href="/faq">
                FAQ
              </NavLink>
            </Text>
          </Box>
          <CreateForm onSubmit={handleSubmit} isOnline={isOnline} />
        </>
      )}

      {hasFragments && (
        <>
          <Box mb={5}>
            <Heading fontSize={[5, 6]} mb={3} css={{ maxWidth: "30em" }}>
              Your fragments have been generated
            </Heading>
            <Text
              lineHeight={1.4}
              fontSize={4}
              mb={3}
              css={{ maxWidth: "30em" }}
            >
              You can find your fragments below, share each one of them with
              someone you can trust. Remember who you gave them too so that if
              you ever need the secret back you can drop them a line!
            </Text>
          </Box>
          <Fragments onReset={handleReset} fragments={fragments} />
        </>
      )}
    </div>
  )
}

export default Home
