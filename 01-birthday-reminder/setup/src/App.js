import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setPeople] = useState(data)
  return (
  <>
       <h2>reminder project setup</h2>
    <section className='container'>
      <h3>{people.length} birthday today</h3>
 
      <List people={people}/>
      <button onClick={()=>setPeople([])}>clear All</button>
    </section>
  </>
    
  )
}

export default App;
