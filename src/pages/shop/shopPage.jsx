import React, { Component } from 'react'
import SHOP_DATA from './shop.data'
import PreviewCollection from '../../Components/preview-Collection/preview-collection'
export default class shopPage extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          collections: SHOP_DATA 
     }
 }
 
 
    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
               { collections.map(({id,...others}) =>(<PreviewCollection key={id} {...others}></PreviewCollection> )) }
            </div>
        )
    }
}
