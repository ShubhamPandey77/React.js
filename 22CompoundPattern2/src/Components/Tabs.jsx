import React, { useState, useContext } from 'react';
import { SwitcherContext } from './TabSwitcher';

function Tabs() {
  const { anyvalue } = useContext(SwitcherContext);
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(prev => !prev);
  }

  return (
    <div>
      <button onClick={handleClick}>{click? "Show value": "Hide Value"}</button>
      <h1>{click ? "then everything" : null}</h1>

      <button onClick={handleClick}>{click? "Show value": "Hide Value"}</button>
      <h1>{click ? null : "then everything"}</h1>
    </div>
  );
}

export default Tabs;