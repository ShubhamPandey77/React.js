import { useRef, useState } from "react";
import "../App.css";

export default function Stopwatch() {
  const [start, setStart] = useState(0);
  let stopref = useRef(0);

  function handlestart() {
    stopref.current = setInterval(() => {
      setStart((prev) => prev + 1);
    }, 500);
  }
  function handlestop() {
    clearInterval(stopref.current);
    stopref.current = null;
  }
  function handlereset() {
    setStart(0);
  }
  return (
    <div id="Challenges">
      <div className="challenge">
        Calculator :<p>{start}</p>
        <button onClick={handlestart}>Start</button>
        <button onClick={handlestop}>Stop Timer</button>
        <button onClick={handlereset}>Reset</button>
      </div>
    </div>
  );
}
