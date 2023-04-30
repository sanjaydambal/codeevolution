import React from 'react'
import useCounter from '../Hooks/useCounter'

function CounterOne1() {
const [count,Increment,Decrement,Reset] = useCounter()
    
  return (
    <div>
        <div>Count - {count}</div>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default CounterOne1