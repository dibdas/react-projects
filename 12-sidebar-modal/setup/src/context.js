import React, { useState, useContext } from 'react'

const AppContext = React.createContext()
console.log(AppContext)

const AppProvider = ({children}) =>{ // if no children written nothing wil be displayed
    const[isSidebarOpen,setIsSidebarOpen] = useState(false)
    const[isModalOpen,setIsModalOpen] = useState(false)

    const openSidebar=()=>{
        setIsSidebarOpen(true)
    }

    const closeSidebar=()=>{
        setIsSidebarOpen(false)
    }

    const openModal=()=>{
        setIsModalOpen(true)
    }

    const closeModal=()=>{
        setIsModalOpen(false)
    }

    // return <AppContext.Provider value="hello">{children}</AppContext.Provider>
    return <AppContext.Provider value={{isModalOpen,isSidebarOpen,openModal,openSidebar,
        closeModal,closeSidebar}}>{children}</AppContext.Provider> // if children is not there nothing will be rendered on the screen
}// wrapping whole app in app provider

// custom hooks
//  custom hooks should have useGlobalContext 
//  GlobalContext will not work 
//  if you are calling use context hook , it either needs to be in custom hook or in custom hook 
 // while calling the react hook it either should be in component like the example of AppProvider
  // or in the custom hook like useGlobalContext

  const useGlobalContext = () =>{
    return useContext(AppContext) // calling the use context hook
}


 export{AppContext,AppProvider,useGlobalContext}