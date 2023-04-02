import React from "react"
import "./Reset.css"

export const ResetButton = ({onClickAction})=>{
    return(
        <button className="reset" onClick={onClickAction}>RESET</button>
    )
}