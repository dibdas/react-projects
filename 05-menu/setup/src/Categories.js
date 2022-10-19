import React from 'react';

const Categories = ({filterItems,categories}) => {
  return (
    <div className='btn-container'>
      {/*<button className='filter-btn' onClick={()=>filterItems('all')}>all</button>
      <button className='filter-btn' onClick={()=>filterItems('breakfast')}>breakfast</button> */}{/* this is an inline function*/}
      {categories.map((category,index)=>
      
      <button className='filter-btn' 
      onClick={()=>filterItems(category)} 
      key={index}>
        {category}
      </button>

      )}
      
        
      <h2>categories component</h2>
    </div>
  )
};

export default Categories;
