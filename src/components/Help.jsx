import { useEffect } from 'react';
import { Card, Button } from "react-daisyui";
import BackButton from './BackButton';
import Footer from './Footer';

function Help() {
  useEffect(() => {
    document.title = "KeyNerdy Help Page";
  }, []);
  return (
    <div p="6">
      <Card className="text-black bg-slate-50 dark:bg-slate-700 dark:text-white w-full shadow-xl dark:shadow-blue-800">
        <Card.Body>
          <Card.Title className="mb-3">
            <h1 className="float-left text-3xl">
              <b>KeyNerdy Help Page</b>
            </h1>
          </Card.Title>
          <div className="p-3">
            <h2 className="text-xl">How to Play</h2>
            <ol className="list-decimal">
              <li>
                Click Play Button
              </li>
              <li>
                You have 1 minute to play a round
              </li>
              <li>
                Type as fast as you can to get score
              </li>
              <li>
                If the time ran out, your typing speed will automatically calculated
              </li>
            </ol>
          </div>
        </Card.Body>
        <Card.Actions className="p-8">
          <BackButton />
        </Card.Actions>
      </Card><br />
      <Footer />
    </div>
  )
}

export default Help