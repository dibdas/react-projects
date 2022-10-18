import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {
  const[showinfo,setShowInfo] = useState(false)
  return (
  <article className='question'>
    <h2>question component</h2>
    <header>
      <h4>{title}</h4>
      {/* my code d.d
      <button onClick={()=>setShowInfo(!showinfo)} className='btn'>{showinfo?<AiOutlineMinus/>:<AiOutlinePlus />}</button>
    
  <p>{showinfo? info.substring(0,300):info.substring(0,30)}</p> */}
    <button className='btn' onClick={()=>setShowInfo(!showinfo)}>
      {showinfo ? <AiOutlineMinus/>: <AiOutlinePlus/>}</button> 
    
  </header>
  {showinfo && <p>{info}</p>}
  </article>
  )
};

export default Question;
