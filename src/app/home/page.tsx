'use client'
import React from "react";
import styles from "./home.module.css";
import Image from "next/image";
import hero from '../images/home-right.png'
import Button1 from '../components/Button1'
import Button2 from '../components/Button2'
import { TypeAnimation } from "react-type-animation";



function Main() {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.content}>
          <h2>
            HELLO <span>_______________</span>
          </h2>
          <h1>I AM WALEED MEHMOOD</h1>
          <p>
          <TypeAnimation
                sequence={[
                  "Website Developer",
                  1000,
                  "SEO Optemizer",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
              />
          </p>
          <div className={styles.buttons}> 
         <Button1 text="Hire Me"/>
         <Button2 text="Get Cv"/>
        </div>
        </div>
        
        <div className={styles.image}>
          <Image src={hero} alt=""></Image>
        </div>
        
      </div>
    </>
  );
}

export default Main;
