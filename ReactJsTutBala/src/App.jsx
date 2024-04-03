import React from 'react'
import { useState,useEffect } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';
import './index.css'
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import apiRequest from './apiRequest';


function App() {

  const API_URL= 'http://localhost:3500/items'
   
  const [items,setItems] = useState( []); 
  const [newItem,setNewItem]= useState('');
  const [search, setSearch] = useState('')
  
  // State for handling Error
  const [fetchError, setFetchError] = useState(null);
  // Function during Loading time
  const [isLoading,setIsLoading] = useState(true)

  // The above code use to avoid crash in the app the code is given in useEffect
  /*
  Removed these default values and add JSON.parse(localStorage.getItem('todo_list')) so that it gets the value
    [
      {id:1,
      checked:true,
     item:"Practice Coding"
    },
      {id:2,
      checked:false,
     item:"Play"
    },
      {id:3,
      checked:false,
     item:"Learn New skills"
    }
  ]
  */

  // Fetching The Items 
  useEffect(() => {
    const fetchItems=async () => {
      try{
        const response= await fetch(API_URL)
        if (!response.ok) throw Error("Data Not received")
        // console.log(response)
        const listItems= await response.json();
        console.log(listItems)
        setItems(listItems);
        setFetchError(null)
      } catch(err){
        setFetchError(err.message)
      } finally{
        setIsLoading(false)
      }
    }
    setTimeout(()=> {
      (async () => await fetchItems())()
    },2000)
    
  },[])


  //item= new Item that will add
  // Create and Read
  const addItem=async (item) => {
    // the below function use to check the id
    const id= items.length ? items[items.length -1].id +1 : 1
    const addNewItem= {id,checked:false,item}
    const listItems= [...items,addNewItem]
    setItems(listItems)

    const postOptions= {
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(addNewItem)
    }

    const result= await apiRequest(API_URL,postOptions)
    if(result) setFetchError(result)
    // localStorage.setItem("todo_list",JSON.stringify(listItems));
  }
  
  // Checking if the list is done or not
  const handleCheck= async (id)=> {
    const listItems= items.map((item) => 
    item.id === id ? {...item,checked: !item.checked} : item);
    setItems(listItems)
    
    // UPDATE
    const myItem= listItems.filter((item) => item.id === id)

    const updateOptions= {
      method:'PATCH',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify({checked:myItem[0].checked})
    }
     
    // Updating URL
    const reqUrl= `${API_URL}/${id}`
    const result= await apiRequest(reqUrl,updateOptions)
    if(result) setFetchError(result)
  

    //localStorage.setItem("todo_list",JSON.stringify(listItems));
  }
  
  // To Delete the todo
  const handleDelete =async (id) =>{
    const listItems= items.filter((item) => 
    item.id !== id);
    setItems(listItems)
   
    const deleteOptions= {
      method:'DELETE'
    }
    const reqUrl= `${API_URL}/${id}`
    const result= await apiRequest(reqUrl,deleteOptions)
    if(result) setFetchError(result)

   // localStorage.setItem("todo_list",JSON.stringify(listItems));
  } 

  const handleSubmit=(e) => {
    e.preventDefault();
      
      if(!newItem) return;
      console.log(newItem)
      //addItem
      addItem(newItem)
      setNewItem('');
  }
  
  return (
    <div className='App'>
      <Header title="Todo List" />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}  
      />
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p>{`Error:${fetchError}`}</p>}
        {/* The below code is to excecute on base of load time error etc... */}
        {!isLoading && !fetchError && <Content 
          // This use to search and show the item present in the list
            // filter is used make search to lowercase here
            items= {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          /> }
        </main>
      {/* setItems={setItems} = Here set items did not been used since we used in handleCheck & Delete */}
      <Footer length={items.length} />
      {/* Hi I Am AJR 
      <p>Let's {handleNameChange()} Money</p> */}
    </div>
  );
}

export default App;