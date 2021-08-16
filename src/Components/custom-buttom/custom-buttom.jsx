import React from 'react'
import './custom-buttom.scss'
const CustomButtom = ({children,isGoogleSignIn,inverted,...otherprops }) => {
    return (
        <button className={` ${inverted ? 'inverted':''}${isGoogleSignIn ? 'google-sign-in':''} custom-button`}
        {...otherprops} >
            {children}
        </button>
    )
}

export default CustomButtom
