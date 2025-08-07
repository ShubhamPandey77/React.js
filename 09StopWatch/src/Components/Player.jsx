import { useRef, useState } from "react";
import "../App.css";
export default function Player() {
  let firstref = useRef();

  const [change, setchange] = useState(null);
  function handleclick() {
    setchange(firstref.current.value);
  }
  function handleclear() {
    firstref.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {change ?? "You"}</h2>
      <p>
        <input ref={firstref} type="text" />
        <button onClick={handleclick}>Save Name</button>
        <button onClick={handleclear}>Clear</button>
      </p>
    </section>
  );
}
