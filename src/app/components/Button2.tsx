import React from 'react'

interface type{
  text:string
}

function Button2({text}:type) {
  return (
    <>
    <div  className='button2'>
      <button>{text}</button>
      </div>
    </>
  )
}

export default Button2
