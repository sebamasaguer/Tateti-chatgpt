import React, { useState } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameStatus, setGameStatus] = useState('ongoing');

  const makeMove = (row, col) => {
    if (board[row][col] === '' && gameStatus === 'ongoing') {
      const newBoard = [...board];
      newBoard[row][col] = currentPlayer;
      setBoard(newBoard);

      if (checkWin(currentPlayer)) {
        setGameStatus('win');
        alert(`Gana ${currentPlayer} `);
      } else if (checkDraw(newBoard)) {
        setGameStatus('draw');
        alert('Empate!');
      } else {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      }
    }
  };

  const checkWin = (player) => {
    // Verificar filas
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === player &&
        board[i][1] === player &&
        board[i][2] === player
      ) {
        return true;
      }
    }

    // Verificar columnas
    for (let j = 0; j < 3; j++) {
      if (
        board[0][j] === player &&
        board[1][j] === player &&
        board[2][j] === player
      ) {
        return true;
      }
    }

    // Verificar diagonales
    if (
      board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player
    ) {
      return true;
    }

    if (
      board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player
    ) {
      return true;
    }

    return false;
  };

  const checkDraw = (currentBoard) => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (currentBoard[i][j] === '') {
          return false;
        }
      }
    }
    return true;
  };

  const resetGame = () => {
    setBoard([
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]);
    setCurrentPlayer('X');
    setGameStatus('ongoing');
  };

  return (
    <div className="App">
      <h1>Tateti</h1>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${cell}`}
                onClick={() => makeMove(rowIndex, colIndex)}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>
      {gameStatus !== 'ongoing' && (
        <button onClick={resetGame}>Volver a Empezar</button>
      )}
      </div>
    </div>
  );
}

export default App;
