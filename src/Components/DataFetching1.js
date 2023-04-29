import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching1() {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState("")
    const [post,setPost] = useState({})
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => {
            setLoading(false)
            setPost(res.data)
            setError("")
        })
        .catch(error => {
            setLoading(false)
            setPost({})
            setError("something went wrong")
        })

    },[])
  return (
    <div>
        {loading ? "Loading" : post.title}
        {error ? "Error" : null}
    </div>
  )
}

export default DataFetching1