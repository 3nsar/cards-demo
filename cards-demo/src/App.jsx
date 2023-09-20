import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./App.css"

const App = () => {

 
  const [product, setProduct]= useState([])
  const [count,setCount] = useState(1)

  const url = `https://jsonplaceholder.typicode.com/users/${count}`

  const add = ()=>{
    setCount(prev => prev +1)
  }

  const sub = ()=>{
    setCount(prev => prev -1)
  }


  useEffect(()=>{
    const fetchData = async ()=>{
      const res = await axios.get(url)
      console.log(res.data)
      setProduct(res.data)
    }
    fetchData()
  },[count])

  return (
    <div className='container'>
      
       
          <div className="card">
              <h1>{product.name}</h1>
              
              <button onClick={add}>NEXT</button>
              <button onClick={sub}>PREV</button>
          </div>
       
    </div>
  )
}

export default App