import React from 'react'

function Header({className,text}) {
  return (
        <h1 className={className}>{text}</h1>
  )
}

export default Header