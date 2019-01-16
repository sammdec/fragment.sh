import React from "react"

const FAQ = () => (
  <section>
    <h1>What is fragment.sh</h1>
    <p>
      fragment.sh is a tool that allows you to backup your secrets using your
      trusted social circle.
    </p>

    <p>
      You can use this tool to transform a secret (master password/ location of
      lost treasure/ anything text based) into "fragments".
    </p>
    <p>
      These can be distributed to trusted friends & family, so that if something
      happens to your secret (you forget it, lose it etc) or yourself, your
      trusted fragment holders can come together and combine there pieces to
      reveal the secret.
    </p>
    <h2>How does it work</h2>
    <p>
      We use a cryptographically secure algorithm called Shamir's Secret Sharing
      to encrypt your secret and break it into any number of frgaments.
    </p>
    <p>
      Not one fragment holds the entire secret and a minimum number of fragments
      of your choosing is required to reveal the secret.
    </p>
    <p>
      A secret can only be revealed after a minimum number of pieces are
      combined together.
    </p>
    <h2>Is fragment.sh secure</h2>
    <p>
      Yes! We dont send any data back to our servers in fact the whole thing
      runs as a progressive web app and by default we even recommend disabling
      internet access to use the tool just in case anything bad on your computer
      tries to transmit data back to a server.
    </p>
  </section>
)

export default FAQ
