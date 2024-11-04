import React from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { SiTypescript, SiBootstrap, SiTailwindcss, SiNextdotjs } from "react-icons/si";

function Icons() {
  return (
    <>
      {/* Right Side - Skill Icons */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:w-2/3 gap-6 mx-auto justify-items-center items-center">
        <div className="text-6xl text-gray-400 bg-gray-100 p-7 rounded-full hover:text-orange-600 transition-colors duration-300">
          <FaHtml5 title="HTML5" />
        </div>
        <div className="text-6xl text-gray-400 bg-gray-100 p-7 rounded-full hover:text-blue-500 transition-colors duration-300">
          <FaCss3Alt title="CSS3" />
        </div>
        <div className="text-6xl text-gray-400 bg-gray-100 p-7 rounded-full hover:text-yellow-500 transition-colors duration-300">
          <FaJsSquare title="JavaScript" />
        </div>
        <div className="text-6xl text-gray-400 bg-gray-100 p-7 rounded-full hover:text-blue-600 transition-colors duration-300">
          <SiTypescript title="TypeScript" />
        </div>
        <div className="text-6xl text-gray-400 bg-gray-100 p-7 rounded-full hover:text-purple-600 transition-colors duration-300">
          <SiBootstrap title="Bootstrap" />
        </div>
        <div className="text-6xl text-gray-400 bg-gray-100 p-7 rounded-full hover:text-teal-500 transition-colors duration-300">
          <SiTailwindcss title="Tailwind CSS" />
        </div>
        <div className="text-6xl text-gray-400 bg-gray-100 p-7 rounded-full hover:text-blue-400 transition-colors duration-300">
          <FaReact title="React" />
        </div>
        <div className="text-6xl text-gray-400 bg-gray-100 p-7 rounded-full hover:text-black transition-colors duration-300">
          <SiNextdotjs title="Next.js" />
        </div>
      </div>
    </>
  )
}

export default Icons;
