import React, { useState } from 'react'

// Equivalente ao Props do vue.js
interface HeaderProps {
  title: String;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
    </header>
  )
}

export default Header