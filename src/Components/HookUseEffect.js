import React, { useEffect, useState } from 'react'

function HookUseEffect() {
    const [count,setCount] = useState(0)
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    
    return (
        <div>
    
    <button onClick={() => setCount(prevCount =>prevCount+1)}>Count {count}</button>
        </div>
      )
    }

export default HookUseEffect