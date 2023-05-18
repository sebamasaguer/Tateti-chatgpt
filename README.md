# Tateti-chatgpt

Aquí tienes un ejemplo de cómo puedes crear un juego de Tic Tac Toe en React:

1. Crea un nuevo proyecto de React ejecutando el siguiente comando en la terminal:
```bash
npx create-react-app tic-tac-toe
```

2. Cambia al directorio del proyecto de React:
```bash
cd tic-tac-toe
```

3. Reemplaza el contenido del archivo `src/App.js` con el siguiente código:

```javascript
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
        alert(`Player ${currentPlayer} wins!`);
      } else if (checkDraw(newBoard)) {
        setGameStatus('draw');
        alert('It\'s a draw!');
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
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${cell}`}
                onClick={() => makeMove(rowIndex, colIndex)}
              >
                {cell

}
              </div>
            ))}
          </div>
        ))}
      </div>
      {gameStatus !== 'ongoing' && (
        <button onClick={resetGame}>Restart</button>
      )}
    </div>
  );
}

export default App;
```

4. Reemplaza el contenido del archivo `src/App.css` con el siguiente código:

```css
.App {
  text-align: center;
}

.board {
  display: inline-block;
  margin-top: 50px;
}

.row {
  display: flex;
}

.cell {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
}

.X {
  color: blue;
}

.O {
  color: red;
}
```

5. Ejecuta el siguiente comando en la terminal para iniciar el frontend:
```bash
npm start
```

El frontend se iniciará y estará disponible en `http://localhost:3000`. Verás el tablero de juego y podrás hacer clic en las celdas para realizar movimientos.
