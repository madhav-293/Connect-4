import React from "react";
import GameCircle from "./GameCircle";

const GameBoard = () =>{
    return( 
    <div>
        <GameCircle id={1}>
            Red
        </GameCircle>
        <GameCircle id={2}>
            blue
        </GameCircle>
        <GameCircle id={3}>
        Red
        </GameCircle>
        <GameCircle id={4}>
        blue
        </GameCircle>
        <GameCircle id={5}>
        Red
        </GameCircle>
        <GameCircle id={6}>
        blue
        </GameCircle>
        <GameCircle id={7}>
        Red
        </GameCircle>
        <GameCircle id={8}>
        blue
        </GameCircle>
    </div>)
}
export default GameBoard;