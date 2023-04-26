import React, { useState } from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
    const [Display,setDisplay] = useState(true)
  return (
    <div>
        <button onClick={() => setDisplay(!Display)}>Toggle</button>
        {Display && <HookMouse/>}
    </div>
  )
}

export default MouseContainer