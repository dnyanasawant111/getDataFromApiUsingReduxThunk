import { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'

import { getData } from './slice'

import viteLogo from '/vite.svg'

import './App.css'


function App() {
  

const dispatch=useDispatch()

//const state=useSelector((state)=>state.todo);

const state=useSelector((state)=>{
  return (state.todo)
})


console.log("state",state)


  return (
    <>
      <div>
      <button onClick={(e)=> dispatch(getData())}> Get Data</button>
      {state.data && state.data.map((ele,i)=>{
        return(
          <div key={i}> <li> {ele.title}  </li></div>
        )
      })  }
      </div>
     
    </>
  )
}

export default App
