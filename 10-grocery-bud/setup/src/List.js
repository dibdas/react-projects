import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items,removeItem,editItem}) => {
  return (
    <div>
      <h2>list component</h2>
      {items.map((item)=>{
        const {id,title} = item
        return(
          <article className='grocery-item'
           key={id}>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <button type="btn" 
              className='edit-btn'
               onClick={()=>editItem(id)}><FaEdit /></button>
              <button type="btn" className='delete-btn' 
              onClick={()=>removeItem(id)}><FaTrash /></button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List
