import React, { useState, createContext } from 'react';
import Tabs from './Tabs';


const SwitcherContext = createContext();

function TabSwitcher() {
  const [tab, setTab] = useState(null);

  return (
    <div>
      <SwitcherContext.Provider value={{ tab, setTab, }}>
        <Tabs />
      </SwitcherContext.Provider>
    </div>
  );
}

export default TabSwitcher;
export { SwitcherContext };