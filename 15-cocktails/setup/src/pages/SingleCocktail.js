import React,{useEffect, useState} from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const [loading,setLoading] = useState(false)
  const [cocktail,setCocktail] = useState(null)
  const{id} = useParams();
  
  const getCocktail= async()=>{
  
    try{
    const response = await fetch(`${url}${id}`)
    // console.log(response)
    const cocktailsDrink = await response.json()
    // console.log(cocktailsDrink)
    if(cocktailsDrink.drinks){
      // setCocktail(cocktailsDrink)
      const{
        // object destructuring and assign to the desired name

        strDrink:name,
        strDrinkThumb:image,
        strAlcoholic:info,
        strCategory:category,
        strGlass:glass,
        strInstructions:instructions,

        // Line 42:24:  Unexpected use of 'name'   no-restricted-globals
        // Line 42:29:  'info' is not defined      no-undef
        // Line 42:34:  'image' is not defined     no-undef
        // Line 42:40:  'category' is not defined  no-undef
        // Line 42:49:  'glass' is not defined     no-undef
        // name:strDrink,
        // image:strDrinkThumb,
        // info:strAlcoholic,
        // category:strCategory,
        // glass:strGlass,

        // detsructuring with the same later assigning to the desired name
        //   strDrink,
        // strDrinkThumb,
        // strAlcoholic,
        // strCategory,
        // strGlass,


        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5
      } = cocktailsDrink.drinks[0]

      const ingrediants = 
      [
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5
    ]

      

    // const newCocktailMyway={name:strDrink,info:strAlcoholic,
    // image:strDrinkThumb,category:strCategory,glass:strGlass,ingrediants}
    //   console.log(newCocktailMyway)
    const newCocktail={name,info,glass,ingrediants,category,image,instructions}
    // console.log(newCocktail)
    setCocktail(newCocktail)
      }
    else{
      setCocktail(null)
    }
    }
    catch(error){
    console.log(error)
  }
  // setLoading(false) // or call after invoking the function 
}
// console.log(id)

  useEffect(()=>{
   setLoading(true) // before calling Loading

    getCocktail()
    setLoading(false)
    setCocktail(null)

  },[id])

  if(loading){
    return <Loading />
  }

  if(!cocktail){ // if any unknown error is there 
    return<h2 className='section-title'>no cocktail to display</h2>
  }
 
  const {name,info,glass,ingrediants,category,image,instructions} = cocktail

 
 
  return (
    <section className='section cocktail-section'>
      <Link to="/" className='btn btn-primary'>Back Home</Link>
      <h5 className='section-title'> single cocktail page {name}</h5>
    
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name:</span>{name}
          </p>
          <p>
            <span className='drink-data'>castegory:</span>{category}
          </p>
          <p>
            <span className='drink-data'>info:</span>{info}
          </p>
          <p>
            <span className='drink-data'>glass:</span>{glass}
          </p>
          <p>
            <span className='drink-data'>instructions:</span>{instructions}
          </p>
          <p>
            <span className='drink-data'>ingrediants:</span>
            {ingrediants.map((ingrediant,index)=>{
              return ingrediant ? <span key={index}>{ingrediant}</span> : null
            })}
          </p>
        </div>
      </div>
   
    </section>
  )
}

export default SingleCocktail
