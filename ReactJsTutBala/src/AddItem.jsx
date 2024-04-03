import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({newItem,setNewItem,handleSubmit}) => {

  const inputRef= useRef()

  return (
    <form className="addForm" onSubmit={handleSubmit} action="">
       <label htmlFor="addItem">Add Item</label>
       <input 
          autoFocus 
          ref={inputRef}
          type="text" 
          id="addItem"
          placeholder="Add Item" 
          required
          value={newItem}
          onChange={(e) =>setNewItem(e.target.value)}
          // Controlled Input
       />
       
       <button type='submit' aria-label='Add Item'
          onClick={()=>inputRef.current.focus()}  
          // This is used to auto focus on inputfield 
       >
           <FaPlus />
       </button>
    </form>
  )
}

export default AddItem