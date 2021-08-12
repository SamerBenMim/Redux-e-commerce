import React from 'react'
import './cart-icon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg'


const cartIcon = () => {
    return (
        <div className='cart-icon'>
            <ShoppingIcon className = 'shopping-icon'></ShoppingIcon>
            <span className="item-count">0</span>
        </div>
    )
}

export default cartIcon

