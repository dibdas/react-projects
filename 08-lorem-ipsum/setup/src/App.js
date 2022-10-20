import React, { useState } from 'react';
import data from './data';
function App() {

  const[count,setCount] = useState(0)
  const[text,setText] =useState([])

  const handleSubmit =(event)=>{
    event.preventDefault();
    console.log("hello world")
    console.log(typeof count)
    let amount = parseInt(count) // converting ocunt to integer as count is a string 

    if(amount<=0) amount=1
    if(amount>=data.length) amount=data.length
    setText(data.slice(0,amount))
    // setCount(data.length)


  }
  
  
  return (
    <section className='section-center'>
      <h2>lorem ipsum project setup</h2>
      <h3>tired of lorem ipsum?</h3>
      <form className='lorem-forem' onSubmit={handleSubmit}>
        <label htmlFor='amount' >paragraphs:</label>
        <input type="number" name="amount" id="amount" 
        value={count} 
        onChange={(event)=> setCount(event.target.value)}/>
        <button className='btn' type="submit">generate lorem</button>

      </form>

      <article className='lorem-text'>
        {text.map((items,index)=>{
          return(
            <p key={index}>{items}</p>
          )
        })}
     
      </article>

    </section>
  
    )
}

export default App;
