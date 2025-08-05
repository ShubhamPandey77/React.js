import { useState, useEffect, useCallback ,useRef} from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState('');


  // useref for copying data
 
  // Generate password
  const passwordGenerator = useCallback(() => {
    let password = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (num) {
      str += '0123456789';
    }
    if (char) {
      str += '~!@#$%^&*()_+-={}|\\/><.,;:\'"';
    }

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length);
      password += str.charAt(index);
    }

    setPass(password);
  }, [length, num, char]);

  useEffect(() => {
    passwordGenerator();
  }, [length, num, char, passwordGenerator]);

  return (
    <div className="box">
      <div className="b1">
        <h1>Password Generator</h1>

        <input type="text" readOnly value={pass} />
        <button onClick={() => navigator.clipboard.writeText(pass)}>COPY</button>

        <br />
        <input
          type="range"
          min="4"
          max="50"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <label> Length: {length} </label>

        <div>
          <label htmlFor="num">Include Numbers</label>
          <input
            type="checkbox"
            id="num"
            checked={num}
            onChange={() => setNum((prev) => !prev)}
          />

          <label htmlFor="char">Include Symbols</label>
          <input
            type="checkbox"
            id="char"
            checked={char}
            onChange={() => setChar((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
