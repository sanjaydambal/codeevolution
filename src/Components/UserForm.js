import React, { useState } from 'react'
import useInput from '../Hooks/useInput'


function UserForm() {
    const [fName,bindFname,resetFname]= useInput("")
    const [lName,bindLname,resetLname]= useInput("")
    
    const submitHandler = (e) => {
       e.preventDefault()
       alert(`Love You ${fName} & ${lName}`)
       resetFname()
       resetLname()
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First-Name: </label>
                <input type='text' {...bindFname}></input>
                </div>
                <div>
                <label>Last-Name: </label>
                <input type='text' {...bindLname}></input>
                </div>
                <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default UserForm