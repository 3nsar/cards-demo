import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./App.css"

const App = () => {
  
  //address.city
  const [count, setCount] = useState(1)
  const url = `https://jsonplaceholder.typicode.com/users/${count}`
  const [users,setUsers] = useState([])

 useEffect(()=>{
  const fetchData = async ()=>{
    const res = await axios.get(url)
    console.log(res.data)
    setUsers(res.data)
  }
  fetchData()
 },[count])
 
  const add =()=>{
    setCount(prev => prev +1)
  }

  const sub = ()=>{
    setCount(prev => prev -1)
  }

  return (
    <div className='container'>
      
       
          <div className="card">
              <h1>{users.name}</h1>
              <h1>{users.address.city}</h1>
              <button onClick={add}>NEXT</button>
              <button onClick={sub}>PREV</button>
          </div>
       
    </div>
  )
}

export default App