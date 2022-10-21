import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [colors,setColors] = useState('')
  const [error,setError] = useState(false)
  // const [list,setList] = useState([])
  // passing the default value before the use provide any input 
  
  // watch the last leg of the video to get this it can be all(10) or all(20)
   const [list,setList] = useState(new Values('#f15025').all(10))

  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log("ht")
  
    
    try{
      let colours = new Values(colors).all(10)
      console.log(colours)
      setList(colours)

    }
    catch(error){
      setError(true)
      console.log(error)

    }
  }

  return (
    <>
    <section className='container'>
      <h3>color generator project</h3>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={colors} 
        onChange={(event)=>setColors(event.target.value)}
        // if the error state value is true, then the error class or no class i.e null 
        placeholder="#f15025" className={`${error?'error' :null}`}/>
        <button type='submit' className='btn'>submit</button>
      </form>
    </section>
    <section className='colors'>
      <h4>list goes here</h4>
      {list.map((coloritems,index)=>{
        return(
          // {...coloritems} it is object spread operator 
    
          <SingleColor key={index} {...coloritems} 
          index={index} hexColor={coloritems.hex}/>
        )

      })}
    </section>
    </>
    )
}

export default App
