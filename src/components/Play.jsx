import { useState, useEffect, useRef } from 'react';
import { Card, Button, Input, Modal, Countdown } from "react-daisyui";
import { useNavigate } from "react-router-dom";
import { IoReload } from "react-icons/all";
import randomWord from "random-words";
import BackButton from './BackButton';

function Play() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);
  const [wordsList, setWordsList] = useState([]);
  const [pause, setPause] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const textInput = useRef();

  const retryGame = () => {
    toggleStatus();
    setScore(0);
    setTime(60);
    setWordsList(randomWord(10));
  }

  const addWord = () => {
    setWordsList((words) => words.slice(1));
    setWordsList((words) => [...words, randomWord(1)]);
  }

  const addScore = () => {
    setScore((scr) => scr + 1);
  }

  const correctCheck = (e) => {
    if(e.key != " ") {
      return;
    }
    e.preventDefault();
    if (textInput.current.value == wordsList[0]) {
      addScore();
    }
  }

  // Toggle modal show/hidden
  const toggleStatus = () => {
    setGameOver((show) => !show);
  }

  useEffect(() => {
    setWordsList(() => randomWord(10));
  }, []);

  useEffect(() => {
    const { current } = textInput;
    current.focus();
    current.value = "";
  }, [wordsList]);

  useEffect(() => {
    addWord();
  }, [score]);

  useEffect(() => {
    let interval = window.setInterval(() => {
      if(!pause) {
        setTime((time) => time - 1);
      }
    }, 1000);
    if(time === 0) {
      window.clearInterval(interval);
      textInput.current.blur();
      toggleStatus();
    }
    return () => window.clearInterval(interval);
  }, [time]);

  return (
    <>
      <Modal open={gameOver}>
        <Modal.Header className="font-bolder text-center">
          Game Over
        </Modal.Header>
        <Modal.Body className="text-center">
          <h2 className="text-2xl mb-2">
            Your Speed is
          </h2>
          <h1 className="text-4xl">
            <Countdown value={score} />
          </h1>
          <h2 className="text-3xl">
            WPM
          </h2>
        </Modal.Body>
        <Modal.Actions>
          <Button className="bg-blue-700 text-white" onClick={retryGame}>
            <IoReload />&nbsp;Retry
          </Button>
          <BackButton />
        </Modal.Actions>
      </Modal>
      <Card className="text-black bg-slate-50 dark:bg-slate-700 dark:text-white w-[90%] shadow-xl dark:shadow-blue-800" >
        <Card.Body className="block">
          <Card.Title className="grid text-center grid-cols-2">
            <span>
              Score = <Countdown value={score} />
            </span>
            <span>
              Time = <Countdown value={time} />
            </span>
          </Card.Title>
          <div className="m-auto px-4 py-4 w-[100%] text-center">
            <div className="my-4 w-full">
              {wordsList.join(" ")}
            </div>
            {/* <input type="text" className="input input-bordered w-full" /> */}
            <Input color="primary" className="w-full bg-gray-100 dark:bg-slate-800" ref={textInput} onKeyDown={(e) => correctCheck(e)} />
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