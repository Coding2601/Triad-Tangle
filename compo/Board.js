import {Box} from "./Box"
import "./Board.css"

export const Board = ({values, onClickAction})=>{
    return(
        <div className="board">
            {values.map((val, index)=>{
                return <Box value={val} onClickAction={()=>val === null && onClickAction(index)}/>
            })}
        </div>
    )
}