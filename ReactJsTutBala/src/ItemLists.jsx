import React from 'react'

import LineItem from './LineItem';

const ItemLists = ({items,handleCheck,handleDelete}) => {
  return (
    

<ul>
         {/* The below code map every items stored in items */}
          {items.map((item) => (
           <LineItem
          //  Here we use item because the function name of map is item. Refer LineItem components
            item={item}
            key ={item.id}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            />
          ))}
        </ul>
    
  )
}

export default ItemLists