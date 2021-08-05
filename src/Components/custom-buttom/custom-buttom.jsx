import React from 'react'
import './custom-buttom.scss'
const CustomButtom = ({children,...otherprops }) => {
    return (
        <button className='custom-button'>
            {children}
        </button>
    )
}

export default CustomButtom
