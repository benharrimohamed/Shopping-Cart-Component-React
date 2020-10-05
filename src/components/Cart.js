import React, {useState,useEffect} from 'react'
import '../App.css'
import CartItem from './CartItem'
import {Data} from './CartData.js'

const Cart = () => {

    //const StoredData = JSON.parse(window.localStorage.getItem('items'))
    const [items,setItems] = useState(Data)

    /*useEffect(() => {
        window.localStorage.setItem('items',JSON.stringify(items))
        }, 
    [items])*/

    const updateQty = (idItem , NewQty) => {
       const newItems = items.map ((item) => {
           if (item.id === idItem)
           return {...item, qty : NewQty}
           else
           return item
       })

       setItems(newItems)
    }

    const removeItem = (id) => {
      const newItems = items.filter(item => item.id !== id)
      setItems(newItems)
    }

    const CartTotal = items.reduce((total, item) => (
        total+item.qty*item.price
    ),0).toFixed(2)

    const NoItems = <div className="no-items">No Items.</div>
    const Items = items.map (item => (<CartItem key={item.id} removeItem={removeItem} updateQty={updateQty} {...item} />))
    return (
       <React.Fragment>
        <div className="cart-container">
        <div className="cart-header">
         <h1 className="cart-title">Shopping Cart</h1>
         <div className="items-counter">
           {items.length}
         </div>
         </div>
         <div className="cart-content">
            {items.length > 0 ? Items : NoItems}
         </div>
         <div className="cart-total">
           <h1 disabled={(CartTotal === 0)} >Cart total: {CartTotal} $</h1>
         </div>
       </div>
       </React.Fragment>
    )
}

export default Cart
