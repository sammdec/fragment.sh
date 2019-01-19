import React from "react"
import { Box, Text, Heading, Link } from "rebass"

const FAQ = () => (
  <Box>
    <Heading mb={3}>What is fragment.sh?</Heading>
    <Text mb={2}>
      fragment.sh is a tool that allows you to backup your secrets using your
      trusted social circle.
    </Text>

    <Text mb={2}>
      You can use this tool to transform a secret (master password/ location of
      lost treasure/ anything text based) into "fragments".
    </Text>
    <Text>
      These can be distributed to trusted friends & family, so that if something
      happens to your secret (you forget it, lose it etc) or yourself, your
      trusted fragment holders can come together and combine there pieces to
      reveal the secret.
    </Text>

    <Heading mt={4} mb={3}>
      How does it work?
    </Heading>
    <Text mb={2}>
      We use a cryptographically secure algorithm called{" "}
      <Link href="https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing">
        Shamir's Secret Sharing
      </Link>{" "}
      to encrypt your secret and break it into any number of frgaments.
    </Text>
    <Text mb={2}>
      Not one fragment holds the entire secret and a minimum number of fragments
      of your choosing is required to reveal the secret.
    </Text>
    <Text mb={2}>
      A secret can only be revealed after a minimum number of pieces are
      combined together.
    </Text>

    <Heading mt={4} mb={3}>
      Is fragment.sh secure
    </Heading>
    <Text>
      Yes! We dont send any data back to our servers. In fact the whole thing
      runs as a progressive web app and by default we even recommend disabling
      internet access to use the tool just in case anything bad on your computer
      tries to transmit data back to a server somewhere.
    </Text>
  </Box>
)

export default FAQ
