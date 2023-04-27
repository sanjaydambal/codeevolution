import React, { useReducer } from 'react'
const intialState = {
    firstCount:0
}
const reducer = (state,action) => {
    switch(action.type){
case "Increment": return {firstCount:state.firstCount+1}
case "Decrement":return {firstCount:state.firstCount-1}
case "Reset": return intialState
default:return state
    }
}
function CounterTwo() {
    const [count,dispatch] = useReducer(reducer,intialState)
  return (
    <div>
        <div>Count : {count.firstCount}</div>
        <button onClick={() => dispatch({type:"Increment"})}> Increment</button>
        <button onClick={() => dispatch({type:"Decrement"})}> Decrement</button>
        <button onClick={() => dispatch({type:"Reset"})}> Reset</button>
    </div>
  )
}

export default CounterTwo