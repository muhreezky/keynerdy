import './App.css';
import { Button } from "react-daisyui";
import { FaPlay, FaKeyboard, FaQuestion } from "react-icons/fa";
import { useEffect } from "react";
import ToggleDark from "./components/ToggleDark";
import { useNavigate } from "react-router-dom";
import Statistics from './components/Statistics';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "KeyNerdy - Literal Typing Game";
  }, []);

  return (
    <div className="m-auto">
      <div className="text-[8rem] mb-8">
        <FaKeyboard className='myicon m-auto mb-5' />
        <div className="text-3xl mb-3 text-center">
          <strong className="mb-3">KeyNerdy</strong>
          <h2 className="text-xl">Literal Typing Game</h2>
        </div>
      </div>
      <div className="w-[100%] mb-12">
        <Button onClick={() => navigate("/play")} fullWidth={true} className="bg-slate-600 text-white mb-3" startIcon={<FaPlay />}>
          Play
        </Button>
        <Button onClick={() => navigate("/help")} fullWidth={true} className="bg-slate-600 text-white mb-3" startIcon={<FaQuestion />}>
          Help
        </Button>
        <div className="my-8">
          <div className="float-right flex space-x-3">
            <ToggleDark />
          </div><br />
          <div className="w-full py-5 m-auto">
            <Statistics />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;