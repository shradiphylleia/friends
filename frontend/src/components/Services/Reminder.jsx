import React from 'react'
import Button from '../Button'

function Reminder({className,ButtonClassName,name,onButtonClick}) {
  return (
    <>
    <div className={className} >
        <h1>Vaccination Remindersss</h1>
        <Button className={ButtonClassName} onCilck={onButtonClick} name={name}/>
    </div>
    </>
  )
}

export default Reminder