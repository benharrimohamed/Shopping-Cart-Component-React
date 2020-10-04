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
      const newItems = items.map (item => {
        if (item.id !== id)
          return item
        return {}
        })
        setItems(newItems)
    }

    const CartTotal = items.reduce((total, item) => (
        total+item.qty*item.price
    ),0).toFixed(2)

    
    return (
       <React.Fragment>
        <div className="cart-container">
         <h1 className="cart-title">Shopping Cart</h1>
         <div className="cart-content">
            {
                items.map (item => (<CartItem key={item.id} removeItem={removeItem} updateQty={updateQty} {...item} />))
            }
         </div>
         <div className="cart-total">
           <h1 disabled={(CartTotal === 0)} >Cart total: {CartTotal} $</h1>
         </div>
       </div>
       </React.Fragment>
    )
}

export default Cart
