import React from 'react'
import { useState } from 'react'

function ObjectHook() {
    const [name,setName] = useState({fName:"",lName:""})
  return (
    <div>
        <form>
        <input type='text' value={name.fName} onChange={(e) => setName({...name,fName:e.target.value})}/>
        <input type='text' value={name.lName} onChange={(e) => setName({...name,lName:e.target.value})}/>
        <h2> My first name is {name.fName}</h2>
        <h2> My last name is {name.lName}</h2>
        <h1> {JSON.stringify(name)}</h1>
        </form>
    </div>
  )
}

export default ObjectHook
