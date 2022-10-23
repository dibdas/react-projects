import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {

  const[showLinks,setShowLinks] = useState(false)
    return (
      <nav>
        <div className="nav-center">
          <div className='nav-header'>
            <img src={logo} />
            <button className='nav-toggle' onClick={()=>setShowLinks(!showLinks)}>
              <FaBars />
            </button>
          </div>
{/* 
          {showLinks && (

          <div className='links-container show-container'>
            <ul className='links'>
            {links.map((link)=>{
              const{id,url,text} = link
              return(
                <li key={id}><a href={url}>{text}</a></li>
              )
            })
            }
            </ul>
          </div>
          )}


 */}

          <div className={`${showLinks ? 
           'link-container show container' :'links-container'}`}>
                      <ul className='links'>
                      {links.map((link)=>{
                        const{id,url,text} = link
                        return(
                          <li key={id}><a href={url}>{text}</a></li>
                        )
                      })
                      }
                      </ul>
                    </div>
                  



          
          <ul className='social-links'>
            {social.map((soci)=>{
              const{id,url,icon} = soci
              return(
                <li key={id} href={url}>{icon}</li>
              )
            })}
          </ul>
        </div>

          
      </nav>
    );

}

export default Navbar