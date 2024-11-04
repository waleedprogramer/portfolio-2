import React from 'react'
import Heading from '../components/Heading'
import Project from '../components/Project-cards'
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'
import p4 from '../images/p4.png'
import p5 from '../images/p5.png'
import p6 from '../images/p6.png'


function Projects() {
  return (
    <>
      <div>
     <Heading title='QUALITY WORK' subtitle='My Projects'/>
    </div>
    <div className='grid lg:grid-cols-2 grid-cols-1  p-10 gap-5'> 
      
    <Project
    image={p1}
    title='GYMFITO'
    description='IGNITE SHIFT & UNITE YOUR STRENGTH' 
    url='https://next-project-five-xi.vercel.app/'/>

    <Project
    image={p2}
    title='Designers'
    description='A creative design studio' 
    url='https://designers-agency-chqg.vercel.app/'/>

    
    <Project
    image={p4}
    title='Portfolio'
    description='Custom css Portfolio' 
    url='https://next-portfolio-theta-two.vercel.app/'/>

     <Project
    image={p3}
    title='Inventory'
    description='An Inventory Mastery' 
    url='website-one-rho-44.vercel.app
'/>

   <Project
    image={p5}
    title='Static Resume'
    description='My Static Resume'
    url='https://hackathon1-2-4qay.vercel.app/' />

   <Project
    image={p6}
    title='Dynamic Resume'
    description='Resume Generator' 
    url='https://mileston-5.vercel.app/'/>  
    </div>
    
    </>
    
  )
}

export default Projects
