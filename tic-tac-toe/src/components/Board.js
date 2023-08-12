import Square from "./Square";
import './css/Board.css'
import { useState } from "react";

function Board(){
    const [xIsNext, setXIsNext] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null))
    const winner = calculateWinner(squares)
    let status;

    if(winner){
        status = "player winner" + winner
    }else{
        status = "proximo jogador = " + (xIsNext ? "x" : "o")
    }

    function handleClick(i){
        if(squares[i] || calculateWinner(squares)){
            return
        }

        const nextSquares = squares.slice()
        if(xIsNext){
            nextSquares[i] = 'x'
        }else{
            nextSquares[i] = 'o'
        }
        setXIsNext(!xIsNext)
        setSquares(nextSquares)
    }
    return(
        <div className="board">
            <div>{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </div>
    );
};

function calculateWinner(squares){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [6, 4, 2],
    ]

    for(var i=0; i < lines.length; i++){
        const [a, b, c] = lines[i]
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a]
        }
    }

    return null
}

export default Board