import React, { useReducer } from 'react'
const intialState = {
    firstCount:0,
    secondCount:10
}
const reducer = (state,action) => {
    switch(action.type){
case "Increment": return {...state,firstCount:state.firstCount+action.value}
case "Decrement":return {...state,firstCount:state.firstCount-action.value}
case "Increment2": return {...state,secondCount:state.secondCount+action.value}
case "Decrement2":return {...state,secondCount:state.secondCount-action.value}
case "Reset": return intialState
default:return state
    }
}
function CounterTwo() {
    const [count,dispatch] = useReducer(reducer,intialState)
  return (
    <div>
        <div>Count : {count.firstCount}</div>
        <div>Count 2 : {count.secondCount}</div>
        <button onClick={() => dispatch({type:"Increment",value:5}) }> Increment-5</button>
        <button onClick={() => dispatch({type:"Decrement",value:5})}> Decrement-5</button>
        
        <div>
        <button onClick={() => dispatch({type:"Increment2",value:5}) }> Increment counter 2</button>
        <button onClick={() => dispatch({type:"Decrement2",value:5})}> Decrement counter 2</button>
        </div>
        <div><button onClick={() => dispatch({type:"Reset"})}> Reset</button></div>
    </div>
  )
}

export default CounterTwo