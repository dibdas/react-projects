import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const{isSubMenuOpen,location,isPage:{page,links}} = useGlobalContext()
  const container = useRef(null)

  const[columns,setColumns] = useState('col-2')
  useEffect(()=>{
    
    const submenu = container.current //  getting the node
    console.log(submenu)
    const {center,bottom} = location
    submenu.style.left =`${center}px`
    submenu.style.top = `${bottom}px`
    setColumns('col-2')
    if(links.length===3){
      setColumns('col-3')
    }
    else if(links.length===4){
      setColumns('col-4')
    }
    
  },[location])
  return (
    <aside className={`${isSubMenuOpen?
      'submenu show':'submenu'}`} ref={container}>
      <h5>submenu component</h5>
      <h4>{page}</h4>
      {/* <ul>
        {links.map((link)=>{
          const{label,icon,}
        })}
      </ul> */}
      <div className={`submenu-center ${columns}`}>
      {links.map((link,index)=>{
          const{label,icon,url} = link
          return(
            <a href={url} >{icon} {label}</a>
          )
        })}

      </div>


    </aside>
  )
}

export default Submenu
