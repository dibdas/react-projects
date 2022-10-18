import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const[index,setIndex] = useState(0)
  const {name,image,job,text} = people[index]
  const checkPerson=(number)=>{
    if(number > people.length-1){
      number =  0
    }
    if(number < 0){
      number = people.length-1
    }
    return number

  }

  const randomPerson=()=>{
    let randomNumber =  Math.floor(Math.random()*people.length)
    if(randomNumber===index){
      randomNumber = index+1
    }
    console.log(randomNumber)
    //checkPerson(randomNumber)
    //in order to check the random number doesnt go more than people array
    setIndex(checkPerson(randomNumber)) 
    
  }

  const nextPerson=()=>{
    setIndex((index)=>{
      // putting the code into afunction
       let newIndex= index+1
      // if(newIndex > people.length-1){
      //   newIndex = 0
      // }
      return checkPerson(newIndex)
    })
  }
  const prevPerson=()=>{
    setIndex((index)=>{
      // putting the code into a function
      let newIndex= index-1
      // if(newIndex<0){
      //   newIndex = people.length-1
      // }
      return checkPerson(newIndex)
    })
  }
  return (
    <article className='review'>
      <h2>review component</h2>
      <div className='img-container'>
        <img src={image} className='person-img'alt={name} />
        <span className='quote-icon'><FaQuoteRight/></span>
      </div>

      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div class="btn-container">
      {/*<button className='prev-btn' onClick={()=>setIndex(index-1)}><FaChevronLeft /></button>
        <button className='next-btn' onClick={()=>setIndex(index+1)}><FaChevronRight /></button>*/}
      
      <button className='prev-btn' onClick={nextPerson}><FaChevronLeft /></button>
       <button className='next-btn' onClick={prevPerson}><FaChevronRight /></button>
        

      </div>
      <button className='random-btn' onClick={randomPerson}>surprise me </button>
  

   </article>
  )
};

export default Review;
