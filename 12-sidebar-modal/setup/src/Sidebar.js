import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const {  isSidebarOpen,  closeSidebar} =useGlobalContext()
  return (
    <aside className={`${isSidebarOpen ?'sidebar show-sidebar ': 'sidebar'}`}>
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt="coding addict" />
        <button className='close-btn' onClick={closeSidebar}><FaTimes /></button>
      </div>
      <ol className='links'>
        {links.map((link)=>{
        const {id,url,text,icon} = link
        return(
          <li key={id} href={url}>{text}{icon}</li>
        )
        }

        )}
      </ol>
      <ul className='social-icons'>
        {social.map((soci)=>{
        const {id,url,icon} = soci
        return(
          <li key={id} href={url}>{icon}</li>
        )
        }

        )}
      </ul>
      <h2>sidebar</h2>
    </aside>
  )
}

export default Sidebar
