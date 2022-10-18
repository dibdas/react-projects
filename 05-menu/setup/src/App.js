import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const[menu,setMenu]= useState(items)
  const[categories,setCategories] = useState([])

  return (
  
  <main>
    <h2>menu project setup</h2>
    <section className='menu-section'>
      <div className='title'>
        <h2>Our menu</h2>
        <div className='underline'></div>
      </div>
      <Categories />
      <Menu items={items}/>

    </section>

  </main>
  )
}

export default App;
