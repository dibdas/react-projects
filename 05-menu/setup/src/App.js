import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


  // const allCategories = items.map((item)=>item.category)
  // set dats structire provide us the unique values
  //const allCategories = new Set(items.map((item)=>item.category)) // set is introduced to get the unique values

  // using spread operator to spread out the set data structure and also turning into an array 

  const allCategories = ['all',...new Set(items.map((item)=>item.category))]
  

function App() {
  const[menu,setMenu]= useState(items)
   //const[categories,setCategories] = useState([]) // without using the category state

  const[categories,setCategories] = useState(allCategories) // while using the category state


  console.log(allCategories)

  const filterItems=(category)=>{
    if(category==='all'){
      setMenu(items)

      // return statement should be there in both cases with state and without state
      // if return statment not present , after clicking on all no list of menu items will be rendered
      // hence return statement must be to there all the items should be rendred after clicking on all 
      return 
    }
    const newItem = items.filter((item)=>
    item.category===category)
    setMenu(newItem)
    console.log(category)
  }

  return (
  
  <main>
    <h2>menu project setup</h2>
    <section className='menu-section'>
      <div className='title'>
        <h2>Our menu</h2>
        <div className='underline'></div>
      </div>
       {/* without using the category state 
       <Categories filterItems={filterItems} allCategories={allCategories} /> 
       without using the category state */}
         
       
       {/*using the category state*/}
       <Categories filterItems={filterItems} categories={categories} />


      <Menu itemsmenu={menu}/>

    </section>

  </main>
  )
}

export default App;
