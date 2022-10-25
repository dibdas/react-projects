import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const{closeSidebar,isSideBarOpen} = useGlobalContext()
  return (
    <aside className={`${isSideBarOpen ?'sidebar-wrapper show':'sidebar-wrapper '}`}>
      <h5>sidebar component</h5>

      <div className='sidebar'>
        <button className='btn' onClick={closeSidebar}><FaTimes /></button>
        <div className='sidebar-links'>
          {sublinks.map((items,index)=>{
            const {links,page} = items
            return(
              <article key={index}>
                {<h4>{page }</h4>}
                <div className='sidebar-sublinks'>
                  {links.map((link,index)=>{
                    const{url,icon,label} = link
                    return(
                      <a key={index} 
                      href={url}>{icon}{label}</a>
                    )
                  })}

                </div>


              </article>

            )
          })}
        </div>
      </div>
    </aside>




  )
}

export default Sidebar
