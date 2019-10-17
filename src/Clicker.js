import React from 'react';

function Clicker(props) {
    return (
        <div>
            <button onClick={(e) => {props.handleClick('A')}}>A</button>
            <button onClick={(e) => {props.handleClick('B')}}>B</button>
            <button onClick={(e) => {props.handleClick('C')}}>C</button>
            <button onClick={(e) => {props.handleClick('D')}}>D</button>
        </div>
    )
}

export default Clicker;