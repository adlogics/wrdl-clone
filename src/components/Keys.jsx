import React, { useContext } from 'react';
import {AppContext} from "../App"

function Keys({keyVal, w}) {
  const { whenDelete, whenEnter, whenSelectLetter  } = useContext(AppContext);

  const selectLetter = () =>{
    if(keyVal === "ENTER"){
      whenEnter();
    } else if(keyVal === "DELETE"){
      whenDelete();
    } 
    else{
      whenSelectLetter(keyVal)
    }
  }
  return (
    <div className='bg-[#818384] 
        text-white font-semibold uppercase rounded-md
        flex items-center justify-center
        transition-transform active:scale-95
        h-[55px] sm:h-[60px]
        text-sm sm:text-bas tracking-wider'style={{ width: w ? `${w * 10}px` : '50px' }} onClick={selectLetter}>{keyVal}</div>
  )
}

export default Keys