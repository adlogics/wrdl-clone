import React, { useCallback, useEffect, useContext } from 'react'
import Keys from './Keys'
import {AppContext} from "../App"

const Keyboard = () => {
  const key1 = ["Q", "W", "E","R","T", "Y", "U", "I", "O", "P"];
  const key2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
  const key3 = ["Z", "X", "C", "V", "B", "N", "M"]
  
  const { whenDelete, whenEnter, whenSelectLetter   } = useContext(AppContext);
  

  const willHandleKeyboard = useCallback((event)=>{
    if(event.key === "Enter"){
      event.preventDefault()
      whenEnter()
    }
    else if (event.key === "Backspace"){
      whenDelete();
    }
    else{
      key1.forEach(k=>{
        if(event.key.toLowerCase() === k.toLowerCase()){
          whenSelectLetter(k)
        }
      })
      
      key2.forEach(k=>{
        if(event.key.toLowerCase() === k.toLowerCase()){
          whenSelectLetter(k)
        }
      })
      
      key3.forEach(k=>{
        if(event.key.toLowerCase() === k.toLowerCase()){
          whenSelectLetter(k)
        }
      })
    }
  })

  useEffect (()=>{
    document.addEventListener("keydown", willHandleKeyboard)
    return () =>{
      document.removeEventListener("keydown", willHandleKeyboard)
    }

  },[willHandleKeyboard])


  return (
    <div className="flex flex-col items-center gap-1">

      {/* Row 1 */}
      <div className="flex justify-center gap-1 ">
        {key1.map((key) => (
          <Keys keyVal={key} />
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex justify-center gap-1 ">
        {key2.map((key) => (
          <Keys keyVal={key} />
        ))}
      </div>

      {/* Row 3 */}
      <div className="flex justify-center gap-1 ">
        <Keys keyVal={"ENTER"} w={9}/>
        {key3.map((key) => (
          <Keys keyVal={key} />
        ))}
        <Keys keyVal={"DELETE"} w={9} />
      </div>
    </div>
  );
}
export default Keyboard