import React,{useEffect, useRef} from 'react'
import { useGlobalContext } from '../context'



const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  const searchValue = useRef()
   // using useRef providing the uncontrolled input
  useEffect(()=>{
    searchValue.current.focus()

  },[]) // calling the useEffect only when the component renders , not everytime

  const searchCocktails=()=>{
   setSearchTerm(searchValue.current.value)
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
  }
  

  return (
    <section className='section search'>
      <h5>search form component</h5>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label className='' htmlFor='name'>search for you favoiurite cocktails </label>
          <input type="text" id="name" name="name"
          ref={searchValue} onChange={searchCocktails}/>
        </div>

      </form>
    </section>
  )
}

export default SearchForm
