import React from 'react'
import { Card, Button } from "react-daisyui";
import { useNavigate } from "react-router-dom";

function Help() {
  const navigate = useNavigate();
  return (
    <Card className="text-black bg-slate-50 dark:bg-slate-700 dark:text-white w-[90%] shadow-xl dark:shadow-blue-800">
      <Card.Body>
        <Card.Title className="mb-3">
          <h2 className="float-left">
            <b>Help</b>
          </h2>
        </Card.Title>
        Hello World
      </Card.Body>
      <Card.Actions className="p-8">
        <Button onClick={() => navigate("/")} className="bg-red-600 text-white">
          Kembali
        </Button>
      </Card.Actions>
    </Card>
  )
}

export default Help