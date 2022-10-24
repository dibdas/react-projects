import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'

import { useGlobalContext } from './context'

const Home = () => {
  // const data = useContext(AppContext)
  // const data = useGlobalContext()
  const {
    openModal,
    openSidebar

  } = useGlobalContext()
  //console.log(data)
  return (
    <main>
      <h2>home component</h2>
      <button className='sidebar-toggle' onClick={openSidebar}><FaBars /></button>
      <button className='btn' onClick={openModal}>show modal</button>
    </main>
  )
}

export default Home
