import React from 'react'
import './preview-collection.scss'
import CollectionItem from '../collection-item/collection-item'

function previewCollection({title,items}) {
    return (
        <div className='collection-preview '>
        <h1>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((item,idx) => idx<4 )
                .map(({id,...others})=>(
                 <CollectionItem key={id} {...others}></CollectionItem>
                 ))
            }
            
        </div>
    </div>
    )
}

export default previewCollection



// export const PreviewCollection = ({Title,items}) => {
//     return (
//         <div>
//             <h1>{Title.toUpperCase()}</h1>
//             <div className='preview'>
//                 {
//                     items.map(item=>{
//                         return <div key={item.id}>{item.name}</div>
//                     })
//                 }
//             </div>
//         </div>
//     )
// }