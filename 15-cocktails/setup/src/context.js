import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [searchTerm,setSearchTerm] = useState('b') // default value can be anything just to get cocktails
  const [cocktails,setCocktails] =useState([])
  const [loading,setLoading] = useState(false)
  // return <AppContext.Provider value='hello'>{children}</AppContext.Provider>

  // const fetchDrinks = async()=>{
  const fetchDrinks = useCallback(async()=>{ // it means if anything changes in the function
    // i.e serchTerm is changing here , then create it from the scratch otherwise dont create it 

    setLoading(true) // when start fetching loading is true
    try{
      const response = await fetch(`${url}${searchTerm}`)
      const cocktailResponse = await response.json()
      console.log(cocktailResponse)
      const {drinks} = cocktailResponse // estructuring so name similar
      console.log(drinks)
      if(drinks){
        const newCocktails = drinks.map((drinks)=>{
          const{idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass} = drinks
          return{id:idDrink,imageThumb:strDrinkThumb,name:strDrink,
          infoAlcohol:strAlcoholic,glass:strGlass} // returning as new object using short name  
        })

        setCocktails(newCocktails)

      }
      else{
        setCocktails([])
        // setLoading(false)
      }
      setLoading(false)

    }
    catch(error){
      console.log(error)
      setLoading(false)
    }

  },[searchTerm]) // dependecy array , it says any time the searchTerm changes , I want to create from the scratch

  useEffect(()=>{
    fetchDrinks()

  // },[searchTerm]) // before using the useCallback
  },[searchTerm,fetchDrinks]) // after using the useCallback

  return <AppContext.Provider value={{loading,cocktails,searchTerm,setSearchTerm}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
