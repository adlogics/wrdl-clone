import React, { useContext } from 'react'
import { AppContext } from '../App'

function PlayAgain() {
    const {gameover, correctWord} = useContext(AppContext)
  return (
     <div className="flex flex-col items-center mt-2 text-2xl tracking-wider">
        <h1>{gameover.guessWord? "You guessed it! 🎉" : `Game Over! 😢 The word was ${correctWord}` }</h1>
    </div>
  )
}
export default PlayAgain