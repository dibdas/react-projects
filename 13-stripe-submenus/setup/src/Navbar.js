import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const{openSubmenu,openSidebar,closeSubmenu} = useGlobalContext()
  const displaySubMenu =(event)=>{
    console.log(event.target) 
    const page = event.target.textContent
    console.log(page)
    const templeteBtn = event.target.getBoundingClientRect()
    console.log(templeteBtn)

    const center = ((templeteBtn.left+templeteBtn.right)/2)
    const bottom = templeteBtn.buttom - 3 // moving the submenu 3px up
  
    openSubmenu(page,{center,bottom})
  }

  const handleSubMenu=(event)=>{
    // when mouse is hovered around the navbar the submenu will be closed
    if(!event.target.classList.contains("link-btn")){
      closeSubmenu()
    }
  }
  
  return (
    <nav className='nav' onMouseOver={handleSubMenu}>
      <h5>navbar component</h5>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt="stripe" className='nav-logo'/>
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars/>
          </button>

        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubMenu}>products</button>
          </li>

          <li>
            <button className='link-btn' onMouseOver={displaySubMenu}>developers</button>
          </li>

          <li>
            <button className='link-btn' onMouseOver={displaySubMenu}>company</button>
          </li>

        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
