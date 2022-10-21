import React, { useEffect } from 'react'

const Alert = ({msg,type,removeAlert,list}) => {
  console.log("alert render"+ "kkk")
  useEffect(()=>{
    const timeOut=setTimeout(()=>{
      removeAlert()
    },4000)
    return()=>clearTimeout(timeOut) // clean up function

  // },[]) // when the component renders and it will run only once as it is []
  //}) // this also works but running evertime component render , which keeps rendering and running infinite times

  // run everytime the list gets updated , this is best case insted of the previous one
},[list]) // run everytime the list gets updated , this is best case insted of the previous one
  return (
    <>
    <p className={`alert alert-${type }`}>{msg}</p>
      <h2>alert component</h2>
    </>
  )
}

export default Alert
