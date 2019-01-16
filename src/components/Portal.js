import { createPortal } from "react-dom"

const Portal = ({ children }) => {
  return createPortal(children, document.getElementById("portal"))
}

export default Portal
