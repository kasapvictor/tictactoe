import React, { useState } from "react";
import Board from './components/Board';
import { calculateWinner } from "./helpers";
import './styles/root.scss';

const App = () => {
    const [ board, setBoard ] = useState ( Array ( 9 ).fill ( null ) );
    const [ isXNext, setIsXNext ] = useState ( false );
    const [ counter, setCounter ] = useState (0);
    const winner = calculateWinner(board);
    const message = winner ? `Winner is ${winner}` : `Next player is ${!isXNext ? 'x' : 'o'}`;

    const handleSquareClick = ( position ) => {
        if ( board[position] || winner ) {
            return
        }

        setBoard ( ( prev ) => {
            return prev.map ( ( square, index ) => {
                if ( index === position ) {
                    return isXNext ? 'x' : 'o';
                }
                return square;
            } );
        } );

        setIsXNext ( ( prev ) => !prev );

        // count moves
        setCounter ( (prev) => prev + 1);
    }

    return (
        <div className="app">
            <h1>TIC TAC TOE</h1>
            <div> Moves: {counter} / {message}</div>
            <Board board={board} handleSquareClick={handleSquareClick}/>
        </div>
    )
}

export default App;
