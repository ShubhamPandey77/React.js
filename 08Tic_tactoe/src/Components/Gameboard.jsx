import { useState } from 'react';
import './Gameboard.css'

export default function Gameboard() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  function handleClick(index) {
    // Do nothing if there's already a winner or the square is filled
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'X' : 'O';

    setBoard(newBoard);
    setIsXTurn(prev => !prev);

    const win = checkWinner(newBoard);
    if (win) {
      setWinner(win);
    }
  }

  function checkWinner(board) {
    const winningCombos = [
      [0, 1, 2], // Rows
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // Columns
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // Diagonals
      [2, 4, 6],
    ];

    for (const [a, b, c] of winningCombos) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Return 'X' or 'O'
      }
    }

    // Check for draw
    if (board.every(cell => cell)) {
      return 'Draw';
    }

    return null;
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
  }

  return (
    <>
      <div className="status">
        {winner
          ? winner === 'Draw'
            ? "It's a draw!"
            : `${winner} wins!`
          : `Turn: ${isXTurn ? 'X' : 'O'}`}
      </div>

      <div className="board">
        {board.map((value, index) => (
          <button
            key={index}
            className="cell"
            onClick={() => handleClick(index)}
            disabled={value || winner}
          >
            {value}
          </button>
        ))}
      </div>

      <button className="reset-button" onClick={resetGame}>Restart Game</button>
    </>
  );
}
// const initialGameBoard =[
//   [null,null,null],
//   [null,null,null],
//   [null,null,null]
// ]
// export default function Gameboard()
// {
//   return(
//     <ol id='game-board'>
//     {initialGameBoard.map((row,rowIndex)=> 
//     <li key={rowIndex}>
//       <ol>
//         {initialGameBoard.map((playersymbol,colIndex) => 
//         <li key={colIndex}>
//           <button>{playersymbol}</button>
//         </li>
//         )}
//       </ol>
//     </li>
//     )}
// </ol>
//   )

  
// }