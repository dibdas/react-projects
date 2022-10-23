import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {

  const[showLinks,setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(()=>{

    // checking the height for  the links to adjust the height of the height container
    //const linksHeight =  linksRef.current.getBoundingClientRect() // accesing all the properties

    const linksHeight =  linksRef.current.getBoundingClientRect().height // accessing height out of everything
    console.log(linksHeight)
    // as the parent i.e the links-container having the height functionilty which is zero
    // thats why links container can have the height which is zero .. watch the video a bit 
    console.log(linksContainerRef.current.getBoundingClientRect().height) 

    if(showLinks){ // that means want to display the links
      linksContainerRef.current.style.height = `${linksHeight}px`
    }
    else{
      linksContainerRef.current.style.height = 0
    }

  },[showLinks]) // everytime the showlinks changes runs the function

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
           'link-container show container' :'links-container'}`} ref={linksContainerRef}>
                      <ul className='links' ref={linksRef}>
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