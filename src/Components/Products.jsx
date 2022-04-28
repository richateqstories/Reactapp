import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


class Products extends Component{
    constructor(props) {
        super(props)
        this.state = {
            toDoList:[],
            flage:true
        }
    }
    componentDidMount(){
        this.getData();
    }

    getData=()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then((res)=>{
           this.setState({toDoList:res.data})
        })
        .catch((err)=>{
            console.log(err)
        })

    }
    
    render(){
   
           return (
                 <>
                     {
                         this.state.toDoList.map(res => (
                             <ul key = {res.id}>
                               <li style={{color:res.completed ? 'green':'red'}}>{res.title}</li><Link to ={'/products/'+res.id}><button>Detail</button></Link>
                             </ul>
                         ))
                     }
                     
                 </>
            )
    }
}
export default Products;