import React from 'react'

function Pcard({className,heading,brief,link}) {
  return (
    <>
    <div className={className}>
        <h1>{heading}</h1>
        <p>{brief}</p>
        <a href={link}>Learn more</a>
    </div>
    </>
  )
}

export default Pcard