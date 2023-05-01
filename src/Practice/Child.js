import React from 'react'

function Child({callback}) {
    // const {name,position,college} = props
    // const prop = 2598
    
  return (
    <div>
        {/* <h1> Hello My Name is {name} and i work as {position} in {college} college.</h1> */}
        {/* <button onClick={() => callback(prop)}>Submit</button> */}
        <button onClick={() => callback(Math.floor(Math.random()*6)+1)}>Roll The Dice</button>
    </div>
  )
}

export default Child