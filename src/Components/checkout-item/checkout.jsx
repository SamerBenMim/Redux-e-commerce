import React from 'react'
import './checkout-item.scss'
import {connect} from 'react-redux'
import {clearItemFromCart,addItem,removeItem} from '../../redux/cart/cart.action'
 const CheckoutItem = ({cartItem:{name,imageUrl,price,quantity},cartItem,clearItem,removeItem,addItem}) => {
    return (
        <div className='checkout-item '>
            <div className="image-container">
                <img alt='item' src={imageUrl} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
            <div className="arrow" onClick={()=>removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div> 
                </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={()=>clearItem(cartItem)}>&#10005;</div> {/** UTF dingbat */}
        </div>
    )
}
 const mapDispatchToprops = dispatch=>(
     {
         clearItem: item=> dispatch((clearItemFromCart(item))),
         addItem: item=> dispatch(addItem(item)),
         removeItem: item=> dispatch(removeItem(item))
     }
 )
export default connect(null,mapDispatchToprops)(CheckoutItem)
 