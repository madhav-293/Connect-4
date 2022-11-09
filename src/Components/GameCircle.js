import React from "react";

const onlick = () => {
    alert('on click');
}

const GameCircle = ({id,children}) =>{
    console.log(id);
    return (
        <div onClick={onlick}>

            {children}
        </div>
    )
}
export default GameCircle;