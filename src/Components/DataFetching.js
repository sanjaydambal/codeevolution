import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {
    const [post,setPost] = useState({})
    const [id,setID] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => setPost(response.data))
        .catch(error => console.log(error))
    })
  return (
    <div>
        <input type='text' value={id} onChange={e=> setID(e.target.value)}/>
        <div>{post.title}</div>
        {/* <ul>
        {
            post.map(post => (<li key={post.id}>{post.title}</li>))
        }
        </ul> */}
    </div>
  )
}

export default DataFetching