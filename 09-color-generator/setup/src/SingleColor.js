import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,hexColor}) => {
  const[alert,setAlert] = useState(false)
  const bcg = rgb.join(',')
  console.log("rgb   "+ rgb)
  console.log(bcg)
  const hex= rgbToHex(...rgb)
  const hexvalue = `#${hexColor}`
  console.log("hexColor  "+  hexColor +"  "+ "index"+  index) // getting the hex color  from th library
  
  // to disappear the cpliboad after seconds 
  useEffect(()=>{
   const timeOut = setTimeout(() => {
    setAlert(false)
   },5000)
   // before setup another time out need to clear the first timeout , hence used clean up function
   return ()=>clearTimeout(timeOut) // using the clean up function 
  },[alert])

  return (
 
    <article 
    className={`color ${index>10 && 'color-light'}`}
    onClick={()=>{setAlert(true) 
      navigator.clipboard.writeText(hexvalue)}}

    style={{background:`rgb(${bcg})`}}>
     {' '}
     <p className='percent-value'>{weight}%</p>
     <p className='color-value'>{hex}%</p>
     {/* oR get the color from the library */}
     {/*<p className='color-value'>{hexColor}</p> */}
     <p className='color-value'>{hexvalue}%</p>

     {alert && <p className='alert'>copy to clipboard</p>}
     
     <h4>single color component</h4>
    </article>
  )
}

export default SingleColor
