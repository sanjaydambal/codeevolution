import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)
    const logMouse = (e) => {
        console.log("mouse event");
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("useeffect called");
        window.addEventListener("mousemove", logMouse)
        return()=>{
            window.removeEventListener("mousemove", logMouse)
        }
    }, [])
    return (
        <div>
            X:{X}
            Y:{Y}
        </div>
    )
}

export default HookMouse