import {getData} from './api/Api'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)
useEffect(()=>{
  getData().then((data) => {
    console.log(data.data.data);
    setData(data.data.data)
  })
},[])
  return (
    <>
     <h1>API Handling</h1>

     <h4>
    {data ? data.map((item) => {
      return(
        <ul>
          <li>{item.author}</li>
          <li>{item.content}</li>
        </ul>
      )
    }) : "Loading..."}
     </h4>
     
    </>
  )
}

export default App
