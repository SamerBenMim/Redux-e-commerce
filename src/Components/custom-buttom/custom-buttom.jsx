import React from 'react'
import './custom-buttom.scss'
const CustomButtom = ({children,isGoogleSignIn,...otherprops }) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in':''} custom-button`}
        {...otherprops} >
            {children}
        </button>
    )
}

export default CustomButtom
