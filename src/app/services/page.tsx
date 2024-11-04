import React from 'react'
import Card from '../components/Card'
import styles from './services.module.css'
import s1 from '../images/s1.png.jpg'
import s2 from '../images/s2.png.jpg'
import s3 from '../images/s3.png.jpg'
import s4 from '../images/s4.png.jpg'
import Heading from '../components/Heading'


function Services() {
  return (
    <>
    <div>
     <Heading title='SERVICE OFFERS' subtitle='The Work I Do'/>
    </div>
    <div className={styles.card}>
      <Card 
        image={s1}
        title="WEB DEVELOPMENT" 
        description="Building responsive and interactive websites with modern web technologies."
      />
      <Card 
        image={s2} 
        title="UI/UX DESIGN" 
        description="Creating stunning visuals and branding for businesses and products."
      />
      <Card 
        image={s3} 
        title="WEB DESIGN" 
        description="Creating visually appealing, user-friendly websites that provide seamless navigation and an engaging user experience"
      />
      <Card 
        image={s4} 
        title="SEO OPTIMIZE" 
        description="Enhancing website visibility and ranking on search engines by improving content, and performance for better search results."
      />
      </div>
    </>
  )
}

export default Services
