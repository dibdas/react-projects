import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const[questions,setQuestions] = useState(data)
  return (
    <article className='container'>
      <h2>accordion project setup</h2>
      <section className='info'>
        {questions.map((question)=>{
          const{id} = question
          return (<SingleQuestion key={id} {...question} />)

        })}
      </section>
    </article>
  )
}

export default App;
