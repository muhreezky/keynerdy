import { useState, useEffect, useRef } from 'react';
import { Card, Button, Input, Modal, Countdown, Stack } from "react-daisyui";
import { useNavigate } from "react-router-dom";
import { IoReload, BiError } from "react-icons/all";
import randomWord from "random-words";
import BackButton from './BackButton';

function Play() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);
  const [wordsList, setWordsList] = useState([]);
  const [pause, setPause] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [correct, setCorrect] = useState(true);
  const [answer, setAnswer] = useState("");

  const textInput = useRef();

  let totalScore = Number(localStorage.totalscore);
  let plays = Number(localStorage.plays);

  // Game Retry
  const retryGame = () => {
    toggleStatus();
    setScore(0);
    setTime(60);
    setCorrect(true);
    setWordsList(randomWord(10));
  }

  const addWord = () => {
    setWordsList((words) => words.slice(1));
    setWordsList((words) => [...words, randomWord(1)]);
  }

  const addScore = () => {
    setScore((scr) => scr + 1);
  }

  const correctCheck = () => {
    if (wordsList[0] == answer.toLowerCase()) {
      setCorrect(true);
      addScore();
    } else {
      setCorrect(false);
    }
    // e.preventDefault();
  }

  // Toggle modal show/hidden
  const toggleStatus = () => {
    setGameOver((show) => !show);
  }

  useEffect(() => {
    setWordsList(() => randomWord(5));
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
    correctCheck();
  }, [answer]);


  useEffect(() => {
    let interval;
    if(!pause) {
      interval = window.setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    if(time === 0) {
      window.clearInterval(interval);
      textInput.current.blur();
      toggleStatus();
    }
    return () => window.clearInterval(interval);
  }, [time]);

  useEffect(() => {
    if (!gameOver) {
      return;
    }

    if(score > Number(localStorage.hiscore)) {
      localStorage.hiscore = score;
    }

    localStorage.plays = plays + 1;
    localStorage.totalscore = totalScore + score;

  }, [gameOver]);

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
          <Card.Title className="grid text-center grid-cols-3">
            <span>
              Score = <Countdown value={score} />
            </span>
            <span>
              Time = <Countdown value={time} />
            </span>
            <BackButton />
          </Card.Title>
          <div className="m-auto px-4 py-4 w-[100%] text-center">
            <div className="my-4 w-full text-xl">
              {wordsList.map((value, key) => {
                return (
                  <div key={key} className={`p-3 border rounded-lg ${key ? "bg-blue-700" : "bg-green-700"} text-white mb-4`}>
                    {value}
                  </div>
                )
              }).reverse()}
            </div>
            {/* <input type="text" className="input input-bordered w-full" /> */}
            <Input color="primary" className="w-full mt-3 bg-gray-100 dark:bg-slate-800" ref={textInput} onChange={(e) => setAnswer(e.target.value)} />
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default Play