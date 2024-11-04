import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface CardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

function Card({ image, title, description }: CardProps) {
  return (
    <div className="card">
      <Image src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
