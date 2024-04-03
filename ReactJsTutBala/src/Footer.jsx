import React from 'react'

const Footer = ({length}) => {

  // const year= new Date()
  return (
    <footer> 
      {length} List {length === 1 ? "Item":"Items"}
    </footer>
    // Copyright &copy; {year.getFullYear()}
  )
}

export default Footer