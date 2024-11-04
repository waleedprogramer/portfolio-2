import React from 'react'

interface type{
  text:string
}

function Button1({text}:type) {
  return (
    <>
    <div  className='button1'>
      <button>{text}</button>
      </div>
    </>
  )
}

export default Button1
