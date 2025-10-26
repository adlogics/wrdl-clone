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
    <div className='h-[70px] rounded-sm grid place-items-center bg-[#818384]'style={{ width: w ? `${w * 10}px` : '50px' }} onClick={selectLetter}>{keyVal}</div>
  )
}

export default Keys