import React, { useState } from 'react'


export default function HigherOrderComponent() {
    const [count , setCount] = useState(0)
    const handleClick = ( ) => {
        setCount(count + 1)
    }
 
 return (
    <div> 

        <button onClick={handleClick}> Click me {count}</button>
        <button onMouse> </button>
    </div>
  )
}
