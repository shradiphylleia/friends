import React from 'react'

function Button({name,onButtonClick,className}) {
  return (
    <div>
        <button className={className} onClick={onButtonClick}>{name}</button>
    </div>
  )
}

export default Button