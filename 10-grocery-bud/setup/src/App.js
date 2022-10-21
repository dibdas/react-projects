import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

// as reloading all the data getting erased , in order to prevent it 
// we are localstorage to fetch the list 
const getLocalStorage=()=>{
  let list = localStorage.getItem('list')
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }
  else{
    return []
  }



}




function App() {
  const [name,setName] = useState('')
  // const[list,setList] = useState([])
  // calling localstorge instead of emoty array
  const[list,setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editID,setEditID] = useState(null)
  const[alert,setAlert] =useState({show:false,msg:'hello world',type:'success'})

  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log("hello world ")
    if(!name){
      //alert
      // setAlert({show:true,msg:"please enter the value",type:'danger'})

      showAlert(true,'please enter the value','danger')
    }
    else if(name && isEditing){
      // edit
      setList(list.map((item)=>{
        if(item.id===editID) {// id it matches with the edit id i.e the item being clicked i.e the state value editid
          return {...list,title:name} // if the clicked item id i.e the editId , the state edit value
          //matches then return the
          // list along with the chenged name 
        }
        return item

      }))

      setIsEditing(false)
      setName('')
      setEditID(null)
      showAlert(true,'edit items to ythe list','success')

    }
    else{
      //
      showAlert(true,'items added to list','success')

    const newItems = {
      id: new Date().getTime().toString(),
      title: name
    }
    //..list ..... getting the previous value from the state list value
    setList([...list,newItems]) //  getting the previous value from the state list value and adding the new ones 
    setName(" ")
  }
  }

  const showAlert=(show='false',msg="",type='')=>{ // passing default parameters es6 features
    setAlert({show,msg,type}) // es6 feature passing the object where the property name matches with the variable name that hold the value 

  }

  const clearList=()=>{
    showAlert(true,'empty list','danger')
    setList([])
  }

  const removeItem=(id)=>{
    showAlert(true,'removing the item','danger')
    setList(list.filter((item)=>item.id !== id))
  }

  const editItem=(id)=>{
    showAlert(true,'editing the item','success')
    const selectedItem=list.find((item)=>id===item.id)
    setIsEditing(true)
    setEditID(id)
    setName(selectedItem.title)
  }

  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list)) // overwrite the list if anything changes in the list

  },[list]) // calling everytime the list changes, call the localstorage set item

  return (
    <section className='section-center'>
        <h2>grocery bud setup</h2>
      <form className='grocery-form' onSubmit={handleSubmit}>
       
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
        <h3>grocery bud</h3>
        <div className='form-control'>
        <input type="text" placeholder='eggs, apples' 
        value={name} onChange={(event)=>setName(event.target.value)} />

        </div>
        <button type="submit" 
        className='submit-btn'>{isEditing ? 'edit':'submit' }</button>

      </form>
      <div className='grocery-container'>
        <List items={list} removeItem={removeItem} editItem={editItem}/>
        <button className='clear-btn' onClick={clearList}>clear items</button>
      </div>
      {list.length}

    
    </section>
   )
}

export default App
