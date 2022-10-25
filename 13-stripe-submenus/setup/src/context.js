import React, { useState, useContext } from 'react'
import sublinks from './data'



const AppContext = React.createContext()
console.log(AppContext)

const AppProvider = ({children}) =>{
    const[isSideBarOpen,setIsSideBarOpen] = useState(false)
    const[isSubMenuOpen,setSubmenuOpen] = useState(false)
    const [location,setLocation] = useState({})
    const [isPage,isSetPage] = useState({page:"",links:[]})

    const openSidebar=()=>{
        setIsSideBarOpen(true)
    }

    const closeSidebar=()=>{
        setIsSideBarOpen(false)
    }


    const openSubmenu=(text,coordinates)=>{
        const page = sublinks.find((link)=>link.page===text) 
        isSetPage(page)
        setLocation(coordinates)
        setSubmenuOpen(true)
    }


    const closeSubmenu=()=>{
        setSubmenuOpen(false)
    }
   
    return <AppContext.Provider 
    value={{openSubmenu,openSidebar,
     closeSubmenu,closeSidebar,
     isSubMenuOpen,isSideBarOpen,location,isPage}}>{children}</AppContext.Provider>
}

  const useGlobalContext = () =>{
    return useContext(AppContext) // calling the use context hook
}


 export{AppContext,AppProvider,useGlobalContext}
