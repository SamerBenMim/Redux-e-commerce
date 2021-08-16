import React from 'react'
import { connect } from 'react-redux'
import {toggleCartHidden}from '../../redux/cart/cart.action'
import './cart-icon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg'
import { selectCartItemsCount } from '../../redux/cart/cart-selectors'

const cartIcon = ({toggleCartHidden,itemCount}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className = 'shopping-icon'></ShoppingIcon>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}
const mapDispatchToProps =dispatch=>({
    toggleCartHidden:() => dispatch(toggleCartHidden())
})
// const mapStateToProps =({cart : {cartItems}})=>({
// itemCount: cartItems.reduce((accumulatedQuantity,cartItem)=>(cartItem.quantity+accumulatedQuantity),0) before selectors
// })
const mapStateToProps =(state)=>({
itemCount: selectCartItemsCount(state)
})
export default connect(mapStateToProps,mapDispatchToProps) (cartIcon)

