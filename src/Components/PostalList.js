
import axios from 'axios'
import React, { Component } from 'react'

//  class PostalList extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          posts:[]
//       }
//     }
//     componentDidMount(){
//         axios.get("https://jsonplaceholder.typicode.com/posts")
//         .then(response => {
//             console.log(response);
//             this.setState({posts:response.data})
//         })
//         .catch(error => {
//             console.log(error);
//                     })
//     }
//   render() {
//     const {posts} =this.state
//     return (
//       <div>
//         {
//             posts.length ? 
//             posts.map(post => <div key={post.id}> {post.title}</div>) :
//             null
//         }
//       </div>
//     )
//   }
// }

// export default PostalList


export class PostalList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts:[]
    }
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      this.setState({posts:response.data})
    })
    .catch(error =>{
      console.log(error)
    })
  }
  render() {
    const {posts} = this.state
    return (
      <div>
        {
        posts.length ?
        posts.map(post => <div key={post.id}>{post.body} </div>):
        null
      }
      </div>
    )
  }
}

export default PostalList