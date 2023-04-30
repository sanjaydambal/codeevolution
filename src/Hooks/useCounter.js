import React,{useState} from 'react'

function useCounter() {
    const [count,setCount] = useState(0)
    const Increment = () => {
        setCount(prevCount=>prevCount+1)
    }
    const Decrement = () => {
        setCount(prevCount=>prevCount-1)
    }
    const Reset = () => {
        setCount(0)
    }
    return [count,Increment,Decrement,Reset]
}

export default useCounter