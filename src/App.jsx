import React from 'react'
import Count from './store/Count/Count'
import { useDispatch } from 'react-redux'

export default function App() {

  const dispatch = useDispatch()
  return (
    <div>

<button onClick={(e) => dispatch({type : "INCREMENT"})}> Increment</button>
    <Count/> 

<button onClick={(e) => dispatch({type : "DECREMENT"})}> Descrement</button>
    </div>
  )
}
