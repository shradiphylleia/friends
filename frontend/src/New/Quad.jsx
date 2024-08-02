import React from 'react'

function Quad({className,heading,brief}) {
  return (
    <>
    <div className={className}>
        <h1>{heading}</h1>
        <h2>{brief}</h2>
    </div>
    </>
  )
}

export default Quad