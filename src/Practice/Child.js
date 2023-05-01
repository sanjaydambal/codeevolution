import React from 'react'

function Child({callback}) {
    // const {name,position,college} = props
    const prop = 2598
    
  return (
    <div>
        {/* <h1> Hello My Name is {name} and i work as {position} in {college} college.</h1> */}
        <button onClick={() => callback(prop)}>Submit</button>
    </div>
  )
}

export default Child