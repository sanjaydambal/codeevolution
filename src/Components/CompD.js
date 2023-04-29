import React, { useContext } from 'react'
import { CountContext } from '../App'

function CompD() {
    const countContext = useContext(CountContext)
  return (
    <div>
        <button onClick={() => countContext.countDispatch("Increment")}> Increment</button>
        <button onClick={() =>  countContext.countDispatch("Decrement")}> Decrement</button>
        <button onClick={() => countContext.countDispatch("Reset")}> Reset</button>
    </div>
  )
}

export default CompD