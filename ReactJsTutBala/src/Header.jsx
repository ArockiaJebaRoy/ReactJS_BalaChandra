import React from 'react'
// import App from './App.jsx'
import { FcTodoList } from "react-icons/fc";

const Header = ({title}) => {
  // const headerStyle={backgroundColor:'mediumblue',color:'white'}
  return (
    <header>
      <h1>{title} <FcTodoList /></h1>
    </header>
  )
}

Header.defaultProps= {
  title:"Todo List"
}
export default Header