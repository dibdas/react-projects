import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // const [cart, setCart] = useState(cartItems)
  const defaultState={
    amount:0,
    total: 0,
    loading:false,
    cart:cartItems
  }

 
  const [state,dispatch] = useReducer(reducer,defaultState)
  const clearCart=()=>{
    dispatch({type:"CLEAR_ITEM"})
  }
  const removeItem=(id)=>{
    // id is coming from the cartItem
    console.log(id)
    dispatch({type:"REMOVE_ITEM",payload:id})
  }

  const increase=(id)=>{
    console.log(id)
    dispatch({type:"INCREASE",bugsbunny:id})

  }

  const decrease=(id)=>{
    console.log(id)
    dispatch({type:"DECREASE",bugsbunny:id})

  }

  const fetchData =async ()=>{
    dispatch({type:"LOADING"})
    const response =  await fetch(url)
    const cartData = await response.json()
    console.log(cartData)
    dispatch({type:"DISPLAY_ITEMS",payload:cartData})

  }

  useEffect(()=>{
    fetchData()

  },[])


  // everytime the value in the state i.e the value of the cart in the state 
  //gets changed the useEffetct is called 

  useEffect(()=>{
    console.log("cart in the state changed")
    dispatch({type:"GET_TOTALS"})

  },[state.cart])

  return (
    <AppContext.Provider
      value={{
        // cart,
        ...state,
        clearCart, // the whole app can access that functionality
        removeItem,
        increase,
        decrease
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
