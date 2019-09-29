import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'

const Product = (props) => (
  <tr>
    <td>{props.product.name}</td>
    <td>{props.product.seller}</td>
    <td>{props.product.price}</td>
    <td>{props.product.dom.substring(0,10)}</td>
    <td>
      <button className='btn btn-warning'><Link to={'/edit/'+props.product._id}>Update</Link></button>
        &nbsp;
      <button className='btn btn-danger'onClick={()=>{props.deleteProducts(props.product._id)}}>Delete</button>
    </td>
  </tr>
)

export class ProductList extends Component {

    state = { products:[] }

    componentDidMount(){
        axios.get('http://localhost:4000/products/')
            .then(response => this.setState({products:response.data}))
            .catch(error =>console.log(error))
    }

    deleteProducts = (id) => {
        axios.delete('http://localhost:4000/products/'+ id )
            .then(res => console.log(res.data))
        
        this.setState({products:this.state.products.filter(product => product._id !== id)})
    }

    productList = () => {
        return this.state.products.map(currentproduct => {
            return(
                <Product
                    product = {currentproduct} 
                    deleteProducts = {this.deleteProducts}
                    key = {currentproduct._id}
                />
            )
        })
    }

    render() {
      return (
        <div className='container'>
            <h3>Product Logs</h3><br/>
            <table className='table' style={style}>
              <thead className='thead-light'>
                <tr>
                    <th>Product </th>
                    <th>Seller </th>
                    <th>Price</th>
                    <th>Date of Manufacture</th>
                    <th>Actions</th>
                </tr>
              </thead>
                <tbody>
                    {this.productList()}
                </tbody>
            </table>
            
        </div>
      )
    }
}
const style = {
    color:'white',
}

export default ProductList
