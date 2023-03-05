import React from 'react';
import { Card, Button } from "react-daisyui";
import { useNavigate } from "react-router-dom";
import BackButton from './BackButton';

function Help() {
  const navigate = useNavigate();
  return (
    <Card className="text-black bg-slate-50 dark:bg-slate-700 dark:text-white w-[90%] shadow-xl dark:shadow-blue-800">
      <Card.Body>
        <Card.Title className="mb-3">
          <h1 className="float-left text-3xl">
            <b>KeyNerdy Help Page</b>
          </h1>
        </Card.Title>
        <div className="p-3">
          <h2 className="text-xl">Cara Bermain</h2>
          <ol className="list-decimal">
            <li>
              Klik tombol Play
            </li>
            <li>
              Ketiklah kata yang terdapat pada layar untuk mendapat score
            </li>
            <li>
              Kumpulkan score sebanyak-banyaknya dalam waktu 1 menit
            </li>
            <li>
              Jika waktu habis, banyaknya skor anda akan menentukan seberapa cepat anda mengetik
            </li>
          </ol>
        </div>
      </Card.Body>
      <Card.Actions className="p-8">
        <BackButton />
      </Card.Actions>
    </Card>
  )
}

export default Help