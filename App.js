import {Board} from "./compo/Board.js"
import React,{useState} from "react"
import {ScoreBoard} from "./compo/ScoreBoard.js"
import {ResetButton} from "./compo/ResetButton.js"
import './App.css';

function App() {

  const WININING_CONDITION = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[2,5,8],[1,4,7]]
  const [listVal, board_function] = useState(Array(9).fill(null))
  const [xPlayer, playAction] = useState(true)
  const [scores, changeScore] = useState({scoreX:0, scoreO:0})
  const [gameOver, setGameOver] = useState(false)

  const handlerFunction = (boxIndex)=>{
    const new_board = listVal.map((val, index)=>{
      if(index === boxIndex){
        return xPlayer === true ? "X" : "O"
      }
      else{
        return val 
      }
    })

    board_function(new_board)

    const winner = checkForWinner(new_board)
    if(winner === "X"){
      let {scoreX} = scores;
      scoreX += 1;
      changeScore({...scores, scoreX})
    }else if(winner === "O"){
      let {scoreO} = scores;
      scoreO += 1;
      changeScore({...scores, scoreO})
    }

    playAction(!xPlayer)
  }

  const checkForWinner = (board)=>{
    for(let i=0;i<WININING_CONDITION.length;i++){
      const [x,y,z] = WININING_CONDITION[i];
      if(board[x] != null && board[x] === board[y] && board[y] === board[z]){
        setGameOver(true)
        return board[x];
      }
    }
  }

  const resetGame = ()=>{
    setGameOver(false)
    if(!xPlayer) playAction(!xPlayer)
    board_function(Array(9).fill(null))
  }
  
  return(
    <div>
      <div className="container">
        <ScoreBoard bothScore={scores} xPlaying={xPlayer}/>
        <Board values={listVal} onClickAction={gameOver === true ? resetGame : handlerFunction}/>
        <ResetButton onClickAction={resetGame}/>
      </div>
    </div>
  );
}

export default App;
