import React from 'react'
import { Footer as Foot } from "react-daisyui";
import { FaInstagram, CgWebsite } from "react-icons/all";

function Footer() {
  return (
    <Foot className="p-20 text-xl">
      &copy; MuhReezky Studio {(new Date()).getFullYear()}<br />
      <a href="https://muhreezky.my.id" className="flex" target="_blank">
        <FaInstagram />
        @muh.reezky
      </a><br />
      <a href="https://muhreezky.my.id" className="flex" target="_blank">
        <CgWebsite />
        https://muhreezky.my.id
      </a>
    </Foot>
  )
}

export default Footer