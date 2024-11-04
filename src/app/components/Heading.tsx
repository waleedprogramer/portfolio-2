import React from 'react'

interface type{
  title:string
  subtitle:string
}

function Heading({title,subtitle}: type) {
  return (
    <>
      <div className="heading">
        <h2>{title}</h2>
        <h1>{subtitle}</h1>
      </div>
    </>
  )
}

export default Heading
