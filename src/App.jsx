import Board from "./components/Board";
import { wordleGrid } from "./constants/wordleGrid";
import { createContext, useState } from "react";
import Keyboard from "./components/Keyboard";

export const AppContext = createContext();



const App = () => {
  const [board, setBoard] = useState(wordleGrid);
  const [currAttempt, setCurrAttempt] = useState ({attempt : 0, letterPos: 0})
  const correctWord = "Right";

  const whenSelectLetter = (keyVal)=>{
    if(currAttempt.letterPos > 4) return
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1})
  }

  const whenEnter = ()=>{
    if(currAttempt.letterPos !== 5) return
    setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos : 0})
  }

  const whenDelete = ()=>{
    const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letterPos-1] = "";
      setBoard(newBoard);
      setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1})
  }



  return (
    <div className="flex flex-col min-h-screen bg-[#121212] text-white">
      <nav className="w-full h-12 bg-[#121213] flex items-center border-b-[1px] border-[#2A2A2B]">
        <div className="w-full flex justify-center">
          <h2 className="tracking-wide text-2xl">Wordle</h2>
        </div>
      </nav>
      <AppContext.Provider value={{ board, setBoard, currAttempt, setCurrAttempt, whenDelete, whenEnter, whenSelectLetter, correctWord }}>
        <div className="flex-1 flex flex-col items-center justify-center">
          <Board />
        </div>
        <div className="mt-10">
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
};

export default App;
