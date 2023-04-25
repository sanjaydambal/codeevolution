import React, { useEffect, useState } from 'react'

function HookUseEffect() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState("")
    useEffect(() => {
        console.log("document to be updated");
        document.title = `You clicked ${count} times`

    },[count])

    
    return (
        <div>
    <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
    <button onClick={() => setCount(prevCount =>prevCount+1)}>Count {count}</button>
        </div>
      )
    }

export default HookUseEffect