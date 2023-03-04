import { useState, useEffect } from 'react';
import { Card, Button } from "react-daisyui";
import { useNavigate } from "react-router-dom";
import randomWord from "random-words";

function Play() {
  const navigate = useNavigate();
  const [wordCount, setWordCount] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [time, setTime] = useState(60);
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords(() => randomWord(20));
  }, []);

  useEffect(() => {
    let interval = window.setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    if(time === 0) {
      window.clearInterval(interval)
    }
    return () => window.clearInterval(interval);
  }, [time]);

  return (
    <>
      <Card className="text-black bg-slate-50 dark:bg-slate-700 dark:text-white w-[90%] shadow-xl dark:shadow-blue-800" >
        <Card.Body className="block">
          <Card.Title className="grid text-center grid-cols-3">
            <span>
              Words = {wordCount}
            </span>
            <span>
              Accuracy = {accuracy}%
            </span>
            <span>
              Time = {time} detik
            </span>
          </Card.Title>
          <div className="m-auto px-4 py-4 w-[100%] text-center">
            <div className="flex justify-start">
              {words.map((value, index) => {
                return <div className="block">{index+1}. {value}</div>
              })}
            </div>
          </div>
        </Card.Body>
        <Card.Actions className="p-8">
          <Button onClick={() => navigate("/")} className="bg-red-700 text-white font-bolder">
            Keluar
          </Button>
        </Card.Actions>
      </Card>
    </>
  )
}

export default Play