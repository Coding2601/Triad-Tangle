import React from "react"
import "./Box.css"

export const Box = ({value, onClickAction})=>{
    const styleValue = value === "X" ? "style-X" : "style-O"
    return(
        <button className={styleValue} onClick={onClickAction}>{value}</button>
    )
}