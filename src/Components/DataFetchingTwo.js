import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const intialState = {
    loading:true,
    post:{},
    error:""
}
const reducer = (state,action) => {
    switch(action.type) {
        case "Fetch_Success" : return {
            loading:false,
            post:action.payload,
            error:""
        }
        case "Fetch_Failure" : return {
            loading:false,
            post:{},
            error:"something went wrong"
        }
        default: return state

    }
}
function DataFetchingTwo() {
    const [state,dispatch] = useReducer(reducer,intialState)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => {
           dispatch({
            type:"Fetch_Success",payload:res.data
           })
        })
        .catch(error => {
            dispatch({
                type:"Fetch_Failure"
               })
        })

    },[])
  return (
    <div>
       {state.loading ? "Loading" : state.post.title}
        {state.error ? "Error" : null}  
    </div>
  )
}

export default DataFetchingTwo