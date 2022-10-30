import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({id,imageThumb,name,glass,infoAlcohol}) => {
  return (
    <article className='cocktail'>
      <small>cocktail component</small>
      <div className='img-container'>
        <img src={imageThumb} alt={name}/>
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{infoAlcohol}</p>
        <Link to={`/cocktail/${id}`} 
        className="btn btn-primary btn-detail">Details</Link>
      </div>
    </article>
  )
}

export default Cocktail
