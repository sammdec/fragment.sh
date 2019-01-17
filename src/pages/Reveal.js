import React, { useState } from "react"
import "styled-components/macro"
import { Box, Text, Heading } from "rebass"
import RevealForm from "../components/RevealForm"
import { combine } from "../utils/secrets"

const Reveal = () => {
  const [secret, setSecret] = useState("")
  const handleSubmit = values => {
    const secret = combine(values)
    setSecret(secret)
  }

  return (
    <Box>
      <Heading fontSize={[5, 6]} mb={2} css={{ maxWidth: "30em" }}>
        Add your fragments to reveal your secret
      </Heading>
      <Text lineHeight={1.4} fontSize={4} css={{ maxWidth: "30em" }}>
        You don't have to enter the fragments in any particular order, you just
        need to have the minimum amount you specified when creating the
        fragments.
      </Text>

      <Box mt={4} mb={4}>
        <Text fontSize={3} fontWeight={700}>
          Your secret
        </Text>
        <Text fontSize={2}>
          If it looks like like garbled text this means you haven't provided
          enough fragments
        </Text>
        {/* <Text>{secret ? secret : "Your secret will appear here"}</Text> */}
      </Box>

      <RevealForm onSubmit={handleSubmit} />
    </Box>
  )
}

export default Reveal
