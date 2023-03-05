import { useState, useEffect, useRef } from 'react';
import { Card, Button, Input } from "react-daisyui";
import { useNavigate } from "react-router-dom";
import randomWord from "random-words";
import BackButton from './BackButton';

function Play() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);
  const [wordsList, setWordsList] = useState([]);
  const [pause, setPause] = useState(false);
  const [answer, setAnswer] = useState("");

  const textInput = useRef();

  const addWord = () => {
    setWordsList(() => wordsList.shift().push(randomWord(1)));
  }

  const correctCheck = (e) => {
    if(e.keyCode != 32) {
      return;
    }
    e.preventDefault();
    setAnswer(textInput.current.value);
  }

  useEffect(() => {
    setWordsList(() => randomWord(10));
  }, []);

  useEffect(() => {
    textInput.current.focus();
  }, [wordsList]);

  useEffect(() => {
    if (answer === wordsList[0]) {
      setScore((score) => score + 1);
    }
  }, [answer]);

  useEffect(() => {
    let interval = window.setInterval(() => {
      if(!pause) {
        setTime((time) => time - 1);
      }
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
          <Card.Title className="grid text-center grid-cols-2">
            <span>
              Score = {score}
            </span>
            <span>
              Time = {time} detik
            </span>
          </Card.Title>
          <div className="m-auto px-4 py-4 w-[100%] text-center">
            <div className="my-4 w-full">
              {wordsList.join(" ")}
            </div>
            {/* <input type="text" className="input input-bordered w-full" /> */}
            <Input color="primary" className="w-full" ref={textInput} onKeyDown={(e) => correctCheck(e)} />
          </div>
        </Card.Body>
        <Card.Actions className="p-8">
          <BackButton />
        </Card.Actions>
      </Card>
    </>
  )
}

export default Play