import './App.css';
import { Button, Toggle } from "react-daisyui";
import { FaPlay, FaKeyboard, FaQuestion } from "react-icons/fa";
import { useEffect } from "react";
import ToggleDark from "./components/ToggleDark";
import { useNavigate } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.hiscore) {
      localStorage.hiscore = 0;
    }
  }, []);

  return (
    <div className="m-auto">
      <div className="text-[8rem] mb-8">
        <FaKeyboard className='myicon m-auto mb-5' />
        <div className="text-3xl mb-3 text-center">
          <strong className="mb-3">KeyNerdy</strong>
          <h2 className="text-xl">Ketiklah sebelum mengetik itu dilarang</h2>
        </div>
      </div>
      <div className="w-[100%] mb-12">
        <Button onClick={() => navigate("/play")} fullWidth={true} className="bg-slate-600 text-white mb-3" startIcon={<FaPlay />}>
          Play
        </Button>
        <Button onClick={() => navigate("/help")} fullWidth={true} className="bg-slate-600 text-white mb-3" startIcon={<FaQuestion />}>
          Help
        </Button>
        <div className="my-12">
          <div className="float-left">
            High Score = <b>{localStorage.hiscore}</b> WPM <br />
            *WPM = Words per Minute
          </div>
          <div className="float-right flex space-x-3">
            <ToggleDark />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;