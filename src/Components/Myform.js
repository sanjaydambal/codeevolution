import React, { Component } from 'react'
import axios from 'axios'

class Myform extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         UserId:"",
         Title:"",
         Body:""
      }
    }
    Change = (e) => {
        this.setState({
            [e.target.name] : [e.target.value]
        })
    }
    Submit = (e) => {
        e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then(response => {
            console.log(response);
        })
        .catch(error =>{
            console.log(error);
        })
    }
  render() {
    const {UserId,Title,Body} = this.state
    return (
      <div>
        <form onSubmit={this.Submit}>
            <div>
                <input type='text' name='UserId' value={UserId} onChange={this.Change}/>
                </div>
                <div>
                <input type='text' name='Title' value={Title} onChange={this.Change}/>
                </div>
                <div>
                <input type='text' name='Body' value={Body} onChange={this.Change}/>
                </div>
                <button>Submit</button>
            
        </form>
      </div>
    )
  }
}

export default Myform