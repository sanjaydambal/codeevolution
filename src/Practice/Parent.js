import React, { useState } from 'react'
import Child from './Child'
import ChildTwo from './ChildTwo'

function Parent() {
    // const eventHandler = (e) => {
    //     console.log(` Hi data passed from child is ${e} `);
    // }
    const [number,setNumber] = useState(1)
  return (
    <div>
        {/* <Child callback= {eventHandler}></Child> */}
        <Child callback={setNumber}/>
        <ChildTwo number={number}/>
    </div>
    // <div>
    //     <Child name={"Sanjay"} position={"Asst.Professor"} college={"KLS VDIT"}/>
    // </div>
  )
}

export default Parent