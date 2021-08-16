import CustomButtom from '../../Components/custom-buttom/custom-buttom'
import './cart-drop-down.scss'
import React from 'react'
import CartItem from '../cart-item/cart-item'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {toggleCartHidden} from '../../redux/cart/cart.action'

const cartDropDown = ({cartItems,history,dispatch}) => {
    return (
        <div className = 'cart-dropdown'>
            <div className = 'cart-items'>
                {
                cartItems.length ?
                (cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>)))  
                :              
                (<span className="empty-message">Your cart is empty</span>)
            }
            </div>
                <CustomButtom onClick= { ()=>{
                    history.push('/checkout')
                    dispatch(toggleCartHidden())
                    }}>GO TO CHECKOUT</CustomButtom>
        </div>
    )
}
const mapStateToProps = ({cart : {cartItems}}) =>({
    cartItems
})
export default withRouter(connect(mapStateToProps)(cartDropDown))
 