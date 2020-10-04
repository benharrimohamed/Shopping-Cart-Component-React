import React from 'react'

const CartItem = ({id , product ,price , qty ,updateQty ,removeItem}) => {

    const incQty = () => updateQty(id,qty+1)
    const decQty = () => updateQty(id,qty-1)
    const rmItem = () => removeItem(id)
    return (
        <React.Fragment>
        <div className="cart-item">
             <div className="item-title">
               <h4>{product}</h4>
             </div>
             <div className="item-price">
              {price} $
             </div>
             <div className="item-qty">
               <button onClick={decQty} className="cart-button" disabled={(qty <= 0)}>-</button>
               {qty}
               <button onClick={incQty} className="cart-button">+</button>  
             </div>
             <div className="item-total">
               Total : {(price * qty).toFixed(2)} $
             </div>
        </div>
        <div className='item-removal'>
         <h6 onClick={rmItem}>- Remove</h6>
        </div>  
        </React.Fragment>
    )
}

export default CartItem
