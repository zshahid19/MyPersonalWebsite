"use client";

import Image from "next/image";
import Header from "../ComponentPages/Header";
import VantaBackground from "../ComponentPages/VantaBackground";
import styles from "../page.module.css";

export default function About() {
  return (
    <div className="vantaWrapper">
      <VantaBackground />
      <Header />
      <main>
        <div className="AboutMeSection">
              <Image
                src="/Shapes/BiggerAboutBlob.svg"
                alt="BiggerAboutBlob"
                className="BiggerAboutMeBlob"
                width={700}
                height={700}
              />
              <div className="AboutmeBlobText">
                <p>Hello!  <br /> My name is Zaid Shahid <br /> and I recently graduated from  <br />the University of Michigan with a  <br /> Bachelors Degree in Computer Science.
                <br /> Currently I am seeking a full-time Software  <br />Developer Position anywhere within the  <br />United States. Please feel free to take a  <br />look at my resume and reach out if  <br />you have any questions.
                <br /> <br /> My hobbies include Art, Coding, Cooking, <br /> Raquetball, Video Games, MTG and many <br /> more. This website was created to <br />showcase some of that. Take a look  <br/>around at some cool projects <br/>and colorful art and <br/>learn about <br/>me! 
                </p>
              </div>
          <div> 
              <Image
                src="/Shapes/AboutMeImage.png"
                alt="BiggerAboutBlob"
                className="AboutMeImageBlob"
                width={400}
                height={400}
              />
          </div>
          </div>
      </main>
    </div>
  );
}
