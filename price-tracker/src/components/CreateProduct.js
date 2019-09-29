import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

export class CreateProduct extends Component {
    
    state = {
      name:'',
      seller:'',
      price:0,
      dom:new Date(),
    }
    
    onChangeName = (e) => this.setState({name:e.target.value})
    onChangeSeller = (e) => this.setState({seller:e.target.value})
    onChangePrice = (e) => this.setState({price:e.target.value})
    onChangeDom = (date) => this.setState({dom:date})
    onSubmit = (e) => {
      e.preventDefault()
      const product = {
        name:this.state.name,
        seller:this.state.seller,
        price:this.state.price,
        dom:this.state.dom,
      }
      console.log(product)

      axios.post('http://localhost:4000/products/add',product)
        .then(res => console.log(res.data))

      this.setState({name:'',seller:'',price:0,dom:new Date()})        
            
    }

  render() {
    return (
     <div className='container' style={style}>
       <h3>Enter Product Details here</h3>
        <form onSubmit={this.onSubmit}>

          <div className='form-group'>
            <label>Product name:</label>
            <input 
                type='text'
                ref='userInput'
                required
                className='form-control'
                value={this.state.name}
                onChange={this.onChangeName}
            />            
          </div>

          <div className='form-group'>
            <label>Seller name:</label>
            <input 
                type='text'
                ref='userInput'
                required
                className='form-control'
                value={this.state.seller}
                onChange={this.onChangeSeller}
            />            
          </div>

          <div className='form-group'>
            <label>Product Price:</label>
            <input 
                ref='userInput'
                required
                className='form-control'
                value={this.state.price}
                onChange={this.onChangePrice}
            />            
          </div>

          <div className='form-group'>
            <label>Date:</label>
            <div>
                <DatePicker
                    selected = {this.state.date}
                    onChange={this.onChangeDom}
                />
            </div>          
          </div>

          <div className='form-group'>
            <input 
                type='submit'
                className='btn btn-primary'
                value='Create Product'
            />            
          </div>
          
        </form>
                         
     </div>
    )
  }  
  
}
const style = {
  border: '30px',
  padding:'30px'
}



export default CreateProduct
