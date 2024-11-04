import React from 'react'
import { StaticImageData } from 'next/image';
import  Image  from 'next/image';
import Button2 from './Button2';
import Link from 'next/link';


interface CardProps {
  image: StaticImageData;
  title: string;
  description: string;
  url:string;
}
function Project({ image, title, description,url }: CardProps) {
  return (
    <>
      <div className="wrapper">
        <div className="project-image">
        <Image src={image} alt={title} />
        
        <div className="content">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <Link href={url} className='p-button'>
        <Button2 text='View Project'/>
        </Link>

        </div>
        </div>
      </div>
    </>
  )
}

export default Project
