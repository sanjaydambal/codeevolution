import React from 'react'
import Child from './Child'

function Parent() {
    const eventHandler = (e) => {
        console.log(` Hi data passed from child is ${e} `);
    }
  return (
    <div>
        <Child callback= {eventHandler}></Child>
    </div>
    // <div>
    //     <Child name={"Sanjay"} position={"Asst.Professor"} college={"KLS VDIT"}/>
    // </div>
  )
}

export default Parent