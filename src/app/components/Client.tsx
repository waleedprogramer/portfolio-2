import React from 'react'
import { IoMdCall } from "react-icons/io";


function Client() {
  return (
    <>
       <div className="bg-white shadow-lg shadow-purple-300 rounded-lg p-10 mb-8 lg:mb-0 lg:mr-8 w-full md:w-6/12">
        <h2 className="text-2xl font-bold mb-4 text-center">
          <span className="text-purple-600 text-6xl">05</span> Years of Experience
        </h2>
        <p className="text-gray-700 mb-6">
          Waleed Mehmood is a highly skilled web developer with 5 years of experience, specializing in creating responsive and modern web applications.
        </p>
        <div className="mt-4">
          <div className='flex gap-5 items-center'>
        <IoMdCall  className='bg-black text-6xl text-white rounded-full p-2'/>
        <div>
          <p className="text-purple-600 text-2xl font-bold">CALL ME NOW:</p>
          <p className="text-xl font-semibold">+92 3183153371</p>
          </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Client
