import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({item,handleCheck,handleDelete}) => {
  //  Here we use item because the function name of map is item . Refer ItemLists components
  return (
    //key={item.id}
    <li className='item' > 
    
             <input type="checkbox"
              onChange={() =>handleCheck(item.id)}
              checked={item.checked}  />
             {/* The below code item.item; first item refers to map.((item)), second item refers to item property stored in setItems state */}
             <label
              style={(item.checked) ? {textDecoration: 'line-through'}: null}
              htmlFor="" onDoubleClick={() =>handleCheck(item.id)}>{item.item}</label>  
              <FaTrashAlt role="button"
              onClick={() =>handleDelete(item.id)}
              tabIndex="0"
              aria-label={`Delete ${item.item}`}
              />
           </li>
  )
}

export default LineItem