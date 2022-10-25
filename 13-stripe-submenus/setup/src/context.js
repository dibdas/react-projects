import React, { useState, useContext } from 'react'
import sublinks from './data'



const AppContext = React.createContext()
console.log(AppContext)

const AppProvider = ({children}) =>{
    const[isSideBarOpen,setIsSideBarOpen] = useState(true)
    const[isSubMenuOpen,setSubmenuOpen] = useState(false)

    const openSidebar=()=>{
        setIsSideBarOpen(true)
    }

    const closeSidebar=()=>{
        setIsSideBarOpen(false)
    }


    const openSubmenu=()=>{
        setSubmenuOpen(true)
    }


    const closeSubmenu=()=>{
        setSubmenuOpen(true)
    }
   
    return <AppContext.Provider value={{openSubmenu,openSidebar,
     closeSubmenu,closeSidebar,isSubMenuOpen,isSideBarOpen}}>{children}</AppContext.Provider>
}

  const useGlobalContext = () =>{
    return useContext(AppContext) // calling the use context hook
}


 export{AppContext,AppProvider,useGlobalContext}
