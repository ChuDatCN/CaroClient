import React from 'react';
import Config from '../../constants/configs';

function Status(props) {
    const { winCells } = props;
    const { rivalname } = props;
    const { isPlayerX } = props;
    const { messages } = props;
    
    let message;

    if (rivalname === 'DISCONNECTED') {
        message = 'Opponent has left!';
    }
    else if (messages) {
        message = messages;
    }
    else if (winCells) {
        const winner = props.nextMove === Config.xPlayer ? Config.oPlayer : Config.xPlayer;
        message = `Congratulations! You won!`;

        if ((isPlayerX && winner === Config.oPlayer) || (!isPlayerX && winner === Config.xPlayer)) {
            message = `You losed!`;
        }
    }
    else {
        message = `Player's turn: ${  props.nextMove}`;
    }
    return (
        <div className='status'><b>{message}</b></div>
    )
}

export default Status;