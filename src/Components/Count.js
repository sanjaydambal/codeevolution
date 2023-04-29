import React from 'react'

function Count({text,Count}) {
    console.log(`rendering ${text}`)
  return (
    <div>{text} - {Count}</div>
  )
}

export default React.memo(Count)