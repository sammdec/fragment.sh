import React, { useState } from "react"
import "styled-components/macro"
import { Box, Text, Heading, Card } from "rebass"
import RevealForm from "../components/RevealForm"
import { ReactComponent as StarImg } from "../components/star-cross.svg"

const Star = ({ size, top, left, bottom, right, delay }) => (
  <Box
    width={size}
    css={`
      position: absolute;
      top: ${top};
      left: ${left};
      bottom: ${bottom};
      right: ${right};
      opacity: 1;
      svg: {
        max-width: 100%;
      }

      animation: flash 0.8s ${delay} ease both infinite alternate;

      @keyframes flash {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `}
  >
    <StarImg />
  </Box>
)

const Reveal = () => {
  const [secret, setSecret] = useState("")
  const handleSubmit = secret => {
    setSecret(secret)
  }

  const isSecret = secret.length > 0

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

      <Box mt={4} mb={5}>
        <Text fontSize={4} fontWeight={700}>
          Your secret
        </Text>
        <Text fontSize={2} mb={3}>
          If it looks like like garbled text this means you haven't provided
          enough fragments
        </Text>
        <Card
          border="2px dashed"
          borderColor="black"
          borderRadius="5px"
          bg={isSecret ? "transparent" : "gray.1"}
          px={3}
          py={3}
          css={{ position: "relative" }}
        >
          {secret}
          {isSecret && (
            <>
              <Star size={30} top="-10px" left="-16px" delay="0s" />
              <Star size={20} top="-4px" right="-16px" delay="0.4s" />
              <Star size={30} bottom="-16px" left="60%" delay="0.8s" />
              <Star size={20} bottom="-24px" left="20%" delay="1.2s" />
            </>
          )}
        </Card>
      </Box>

      <RevealForm onSubmit={handleSubmit} />
    </Box>
  )
}

export default Reveal
