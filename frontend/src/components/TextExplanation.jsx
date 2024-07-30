import React from 'react'

function TextExplanation({className,text}) {
  return (
    <>
        <div className={className}>
            <p>{text}</p>
        </div>
    </>
  )
}

export default TextExplanation