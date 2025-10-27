import React, { useContext } from 'react'
import { AppContext } from '../App'

function PlayAgain() {
    const {gameover, correctWord} = useContext(AppContext)
  return (
     <div className="flex flex-col items-center mt-2">
        <h3>{gameover.guessWord? "You guessed it! 🎉" : `Game Over! 😢 The word was ${correctWord}` }</h3>
    </div>
  )
}
export default PlayAgain