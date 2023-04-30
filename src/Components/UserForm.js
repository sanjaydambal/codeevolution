import React, { useState } from 'react'


function UserForm() {
    const [fName,setFname] = useState("")
    const [lName,setLname] = useState("")
    const submitHandler = (e) => {
       e.preventDefault()
       alert(`Love You ${fName} & ${lName}`)
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First-Name: </label>
                <input type='text' value={fName} onChange={(e)=> setFname(e.target.value)}></input>
                </div>
                <div>
                <label>Last-Name: </label>
                <input type='text' value={lName} onChange={(e)=> setLname(e.target.value)}></input>
                </div>
                <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default UserForm