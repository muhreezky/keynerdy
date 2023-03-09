import React from 'react'
import { Button } from "react-daisyui";
import { useNavigate } from "react-router-dom";
import { GiExitDoor } from "react-icons/all";

function BackButton() {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate("/")} className="bg-red-700 text-white font-bolder">
      <GiExitDoor />&nbsp;Exit
    </Button>
  )
}

export default BackButton;