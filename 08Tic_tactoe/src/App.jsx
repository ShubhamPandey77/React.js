import Player from './Components/Player'
import Gameboard from './Components/Gameboard'
import './App.css'

function App() {
  

  return (
   <main>
       <div id='game-container'>
              <ol id='players'>
                  <Player 
                          initialName = "Player1"
                          symbol ="X"
                   />
                  <Player 
                          initialName = "Player2"
                          symbol ="O"
                   />
              </ol>
              <Gameboard/>
       </div>
   </main>
  )
}

export default App
