import React from 'react'
import { Footer as Foot } from "react-daisyui";
import { FaInstagram, CgWebsite } from "react-icons/all";

function Footer() {
  return (
    <>
      <Foot className="p-20 text-xl">
        <a href="https://muhreezky.my.id" className="flex" target="_blank">
          <div className="m-auto">
            <FaInstagram />
          </div>
          @muh.reezky
        </a><br />
        <a href="https://muhreezky.my.id" className="flex" target="_blank">
          <div className="m-auto">
            <CgWebsite />
          </div>
          https://muhreezky.my.id
        </a>
      </Foot>
      &copy; MuhReezky Studio {(new Date()).getFullYear()}<br />
    </>
  )
}

export default Footer