import React from 'react'
import { Footer as Foot } from "react-daisyui";

function Footer() {
  return (
    <Foot className="p-20">
      &copy; MuhReezky Studio {(new Date()).getFullYear()}
    </Foot>
  )
}

export default Footer