import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {
    const [post,setPost] = useState({})
    const [id,setID] = useState(1)
    const[idFromButton,setIdFromButton]= useState(1)
    const clickHandler = () => {
setIdFromButton(id)
    }


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
        .then(response => setPost(response.data))
        .catch(error => console.log(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[idFromButton])
  return (
    <div>
        <input type='text' value={id} onChange={e=> setID(e.target.value)}/>
        <div>{post.title}</div>
        <button type='button' onClick={clickHandler}> Fetch Data</button>
        {/* <ul>
        {
            post.map(post => (<li key={post.id}>{post.title}</li>))
        }
        </ul> */}
    </div>
  )
}

export default DataFetching