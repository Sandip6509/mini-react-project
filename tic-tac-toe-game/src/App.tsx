import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import ChoosePlayer from "./components/ChoosePlayer";
import WinnerModal from "./components/WinnerModal";

function App() {
  const [isX, setIsX] = useState<boolean>(true);
  const [newGame, setNewGame] = useState<boolean>(false);
  const [squares, setSqaures] = useState<Array<any>>(Array(9).fill(null));

  function calculateWinner(squares: Array<any>) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  let winner = calculateWinner(squares);

  function handlePlayerX() {
    setIsX(true);
  }

  function handlePlayerO() {
    setIsX(false);
  }

  function handleRestartGame() {
    setIsX(true);
    setSqaures(Array(9).fill(null));
  }

  function handleNewGame() {
    setIsX(true);
    setSqaures(Array(9).fill(null));
    setNewGame(true);
  }

  function handleQuitGame() {
    setIsX(true);
    setSqaures(Array(9).fill(null));
    setNewGame(false);
  }

  function handlePlayer(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = isX ? "X" : "O";
    setSqaures(squares);
    setIsX(!isX);
  }
  return (
    <div className="flex min-h-screen bg-[#192a32] flex-col items-center  py-2">
      <h1 className="text-4xl md:text-6xl font-extrabold mt-4 text-[#30c4bd] ">
        Tic <span className="text-[#f3b236]">Tac </span> Toe
      </h1>
      {!newGame ? (
        <ChoosePlayer
          handleNewGame={handleNewGame}
          handlePlayerX={handlePlayerX}
          handlePlayerO={handlePlayerO}
        />
      ) : (
        <Board
          winner={winner}
          playerX={isX}
          squares={squares}
          handlePlayer={handlePlayer}
          handleRestartGame={handleRestartGame}
        />
      )}
      {winner && (
        <WinnerModal
          winner={winner}
          handleQuitGame={handleQuitGame}
          handleNewGame={handleNewGame}
        />
      )}
    </div>
  );
}

export default App;
