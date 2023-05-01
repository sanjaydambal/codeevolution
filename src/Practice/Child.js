import React from 'react'

function Child(props) {
    const {name,position,college} = props
  return (
    <div>
        <h1> Hello My Name is {name} and i work as {position} in {college} college.</h1>
    </div>
  )
}

export default Child