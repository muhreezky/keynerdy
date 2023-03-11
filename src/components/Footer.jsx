import React from 'react'
import { Footer as Foot } from "react-daisyui";
import { FaInstagram, CgWebsite } from "react-icons/all";

function Footer() {
  return (
    <>
      <Foot className="p-15 text-xl flex flex-row justify-center content-center">
        <a href="https://instagram.com/muh.reezky" target="_blank">
          <div className="m-auto">
            <FaInstagram />
          </div>
          @muh.reezky
        </a><br />
        <a href="https://muhreezky.my.id" target="_blank">
          <div className="m-auto">
            <CgWebsite />
          </div>
          https://muhreezky.my.id
        </a>
      </Foot>
    </>
  )
}

export default Footer