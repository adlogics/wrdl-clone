import React, { useContext } from 'react';
import {AppContext} from "../App"
const Letter = ({ letterPos, attemptVal }) => {
  const { board, correctWord, currAttempt, gameover } = useContext(AppContext);
  const letter = board[attemptVal][letterPos]?.toLowerCase();
  const correct = correctWord[letterPos] === letter;
  const almostCorrect = !correct && letter !== "" && correctWord.includes(letter);
  let bgColor = "bg-transparent border-gray-300 text-white"; // default color

if (currAttempt.attempt > attemptVal || (gameover.over && attemptVal === currAttempt.attempt)) {
  if (correct) {
    bgColor = "bg-green-500 border-green-600 text-white";
  } else if (almostCorrect) {
    bgColor = "bg-yellow-400 border-yellow-500 text-white";
  } else {
    bgColor = "bg-gray-500 border-gray-600 text-white";
  }
}
  return (
    <div className={`flex-[33%] grid place-items-center border m-1 ${bgColor}`}>{letter}</div>
  );
};

export default Letter;
