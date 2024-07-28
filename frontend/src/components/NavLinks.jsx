import React from 'react'

function NavLinks({name,className,redirect}) {
  return (
    <div className={className}>
        <a href={redirect}>{name}</a>
    </div>
  )
}

export default NavLinks