import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import about from "../images/about-us.png";
import Button1 from "../components/Button1";
import Heading from '../components/Heading'

function About() {
  return (
    <>
    <div>
      <Heading title="WHO I AM" subtitle="My background"/>
    </div>
      <div className={styles.section}>
        <div className={styles.image}>
          <Image src={about} alt=""></Image>
        </div>
        <div className={styles.content}>
          <h1>LETS INTRODUCE ABOUT MYSELF</h1>
          <p>I am Waleed Bin Mehmood, currently pursuing a BBA while honing my skills in web development. Alongside my studies, I am enrolled in the Governor Sindh IT Initiative, where I am expanding my technical knowledge and practical experience in the field of web development.</p>
          <p>My passion for web development began with curiosity. I used to wonder how websites were created whenever I browsed the web. This curiosity drove me to learn the foundations of web development, and now I am committed to advancing my skills to higher levels as I pursue this interest with even greater enthusiasm.</p>
          <Button1 text="Download CV"/>
        </div>
      </div>
    </>
  );
}

export default About;
