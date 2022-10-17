import React, { useState } from 'react';

const Tour = ({id,name,info,image, price,removeTour}) => {
  const [readmore,setReadmore] = useState(false)
  return (
    
    <article className='single-tour'>

    <h2>tour component</h2>
    
      <img src={image} alt={name}/>
      <footer>
        <div className='tour-info'>
          <h5>{name}</h5>
          <h5 className='tour-price'>{price}</h5>
        </div>
        <p>{readmore? info:`${info.substring(0,300)}....`}
        {/* inorder to toogle the value */}
        <button onClick={()=>setReadmore(!readmore)}>{readmore?`less`:`more`}</button></p>
        <button className='delete-btn' onClick={()=>removeTour(id)}>not interested</button>
      </footer>

  
    </article>
  )
};

export default Tour;
