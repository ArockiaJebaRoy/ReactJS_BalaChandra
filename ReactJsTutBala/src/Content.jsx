import React from 'react';
import ItemLists from './ItemLists';
// import ItemList from './ItemList';
// import {useState} from 'react';



const Content = ({items,handleCheck,handleDelete}) => {
   
  // const [items,setItems] = useState(
  //   [
  //     {id:1, 
  //     checked:true,
  //    item:"Practice Coding"
  //   },
  //     {id:2,
  //     checked:false,
  //    item:"Play"
  //   },
  //     {id:3,
  //     checked:false,
  //    item:"Learn New skills"
  //   }
  // ]);
  
  // // Checking if the list is done or not
  // const handleCheck=(id)=> {
  //   const listItems= items.map((item) => 
  //   item.id === id ? {...item,checked: !item.checked} : item);
  //   setItems(listItems)
  //   localStorage.setItem("todo_list",JSON.stringify(listItems));
  // }
  
  // // To Delete the todo
  // const handleDelete =(id) =>{
  //   const listItems= items.filter((item) => 
  //   item.id !== id);
  //   setItems(listItems)
  //   localStorage.setItem("todo_list",JSON.stringify(listItems));
  // } 


  // Map
  // const numbers=[-2,-1,0,1,2];
  // const itemss= numbers.filter(n => n>=0).map(n => (
  //   {number:n}))
  // console.log(itemss)
 
 
  return (
    // List Key
      <>
        {/* If the todo has length or any item it will display or it gives "Your List is Empty" */}
        {(items.length) ? (
         <ItemLists items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
         />
        ): (
          <p style={{marginTop:"2rem"}}>Your List is Empty...</p>
          
        )}
         
      </>
  )
}

export default Content

 //  const [count, setCount] = useState(99);
  //  const [name,setName]= useState(() =>namee());
   
  //  function namee(){
  //   return console.log("Visit Bala")
  // }
  // const [name,setName]= useState("Earn");
  // function handleNameChange(){
  //   const names=["Earn","Grow","Give"]
  //   const int= Math.floor(Math.random() * 3);
  //   setName(names[int])
  // }
  // //Use State Eg
  // function incrementFunction(){
  //   setCount((prevCount) =>
  //   {return prevCount+1})
    
  // }
  // The above function can be written as below code
  // function incrementFunction(){
  //   setCount((currVal) => {
  //     return currVal+1
  //   })
  // }
    
  // function decrementFunction(){
  //   setCount((prevCount) =>
  //   {return prevCount-1})
  // }

  // const handleClick= (e) =>{ //e= event
  //   console.log(e.target.innerText)
  // }

  // const handleClick2= (name) =>{
  //   console.log(`Thanks For the support ${name}`)
  // }

// {/*  
//        <p>Lets {name} Money</p>
//       {/* Passing event e */}
//       {/* <button onClick={handleNameChange}>Subscribe1</button> 
//       <button onClick={decrementFunction}>-</button>
//       <span>{count}</span>
//       <button onClick={incrementFunction}>+</button> */}
//       {/* <button onClick={() =>handleClick2('Bala')}>Subscribe</button> */}



