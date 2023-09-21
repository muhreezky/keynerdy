import { useEffect } from 'react'
import { Stats } from "react-daisyui";

function Statistics() {
  const Stat = Stats.Stat;
  let plays = Number(localStorage.plays) || 0;
  let totalScore = Number(localStorage.totalscore) || 0;
  let avg = totalScore ? Math.round(totalScore / plays) : 0;

  useEffect(() => {
    if(!localStorage.hiscore) {
      localStorage.hiscore = 0;
    }
    if(!localStorage.plays) {
      localStorage.plays = 0;
    }
    if(!localStorage.totalscore) {
      localStorage.totalscore = 0;
    }
  }, []);

  return (
    <Stats className="stats-horizontal portrait:stats-vertical w-full shadow-lg shadow-blue-800">
      <Stats.Stat>
        <Stat.Item variant="title">Highest Speed</Stat.Item>
        <Stat.Item variant="value">
          {localStorage.hiscore || 0}{" "}
          <span className="text-sm">
          WPM
          </span>
        </Stat.Item>
      </Stats.Stat>
      <Stats.Stat>
        <Stat.Item variant="title">Average Speed</Stat.Item>
        <Stat.Item variant="value">
          {avg}{" "}
          <span className="text-sm">
          WPM
          </span>
        </Stat.Item>
      </Stats.Stat>
      <Stats.Stat>
        <Stat.Item variant="title">Total Plays</Stat.Item>
        <Stat.Item variant="value">
          {localStorage.plays || 0}{" "}
          <span className="text-md">
            &times;
          </span>
        </Stat.Item>
      </Stats.Stat>
    </Stats>
  )
}

export default Statistics