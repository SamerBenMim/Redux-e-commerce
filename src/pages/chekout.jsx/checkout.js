import './checkout.scss'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart-selectors'
import React from 'react'
import CheckoutItem from '../../Components/checkout-item/checkout'
const Checkout = ({cartItems,total,dispatch}) => {
    return (
        <div className='checkout-page'>
           <div className='checkout-header'>
            <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
           </div>
           {
               cartItems.map(cartItem=>
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                )
           }
           <div className='total'>
               <span>TOTAL : ${total}</span>
           </div>
        </div>
    )
}
const mapStateToProps = createStructuredSelector(
    {
        cartItems:selectCartItems,
        total: selectCartTotal
    }
)
export default connect(mapStateToProps)(Checkout)
