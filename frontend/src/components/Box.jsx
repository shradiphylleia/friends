import React from 'react'
import Button from './Button'


function Box({className,ButtonClassName,onButtonClick}) {
  return (
    <>
        <div className={className}>
            <Button className={ButtonClassName} onButtonClick={onButtonClick} name={className}/>
        </div>
    </>
  )
}

export default Box