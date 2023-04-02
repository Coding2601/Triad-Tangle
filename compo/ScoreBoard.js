import React from "react"
import "./ScoreBoard.css"

export const ScoreBoard = ({bothScore, xPlaying})=>{
    const {scoreX, scoreO} = bothScore;
    return(
    <div className="score-board">
      <span className={`score xScore ${!xPlaying && "inactive"}`}>X - {scoreX}</span>
      <span className={`score oScore ${xPlaying && "inactive"}`}>O - {scoreO}</span>
    </div>
    )
}