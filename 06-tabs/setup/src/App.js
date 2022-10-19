import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
console.log('lod1')
function App() {
  console.log('lod2')
  const [loading,setLoading] = useState(true)
  console.log('lod3')
  const [jobs,setJobs] = useState([])
  console.log('lod4')
  const [value,setValue] = useState(2)
  console.log('lod5')
 
  const fetchJobs=async()=>{
    console.log('lod6')
    const response = await fetch(url)
    console.log('lod7')
    const jobs = await response.json()
    console.log('lod8')
    setJobs(jobs)
    console.log('lod9')
    setLoading(false)
    console.log('lod10')
  }
  console.log('lod11')

  useEffect(()=>{
    console.log('lod12')
    fetchJobs()

  },[])
  // cant be there before loading because initially the array is empty
  // const {company,title,dates,duties} = jobs[value]  

  if(loading){
    console.log('lod13')
    return(
      <section className='section loading'>
        <h2> loading ...</h2>
      </section>
    )
  }
  console.log('lod14')
  const {company,title,dates,duties} = jobs[value]

  console.log("log15")
  return (
    
    <section className='section'>
      <h3>jobs tabs project setup</h3>
      <div className='title'>
        <h3> experience </h3>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((items,index)=>{
            console.log(`${items.id}  ${index}`)
            return(
            <button key={items.id} 
              onClick={()=>setValue(index)} 


              //important code a new one 
              //className={`job-btn && ${index===value && 'active-btn'} `}

              // checking whether the index of the button matches with the current state value , 
              //if it is so then implement the active-btn
              className={`job-btn && ${index===value && 'active-btn'} `}>
              {items.company}
            </button>
            )
          })}

        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty,index)=>{
            return(
              <>
                <div className='job-desc' key={index}>
                  <FaAngleDoubleRight className='job-icon' />
                </div>
                <p>{duty}</p>
              </>
            )
          })}
        </article>

      </div>


    </section>
  )
}

export default App
