"use client";

import Image from "next/image";
import Header from "./ComponentPages/Header";
import VantaBackground from "./ComponentPages/VantaBackground";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="vantaWrapper">
      <VantaBackground />
      <Header />
      <main>
        <div className="ImageRectanglePadding">
          <Image
            src="/Shapes/MeHeader.svg"
            alt="Image Rectangle"
            className="ImageRectangle"
            width={1300}
            height={600}
            priority
          />
        </div>
        <div className="Blobs">
          <div className="IntroRectangleContainer">
            <Image
              src="/Shapes/IntroRectangle.svg"
              alt="Intro Rectangle"
              className="IntroRectangleClass"
              width={600}
              height={600}
            />
            <div className="IntroRectangleText">
              Welcome to my <br />
              website. <br /> My name is Zaid, enjoy your stay. <br /> <br />
              Say Hello: ZaidShahid19@gmail.com
            </div>
          </div>
          <div className="BlobBlobs">
            <Image
              src="/Shapes/AboutBlob.svg"
              alt="AboutBlob"
              className="AboutBlob"
              width={500}
              height={600}
            />
            <Image
              src="/Shapes/ProjectsBlob.svg"
              alt="ProjectsBlob"
              className="ProjectsBlob"
              width={500}
              height={600}
            />
            <Image
              src="/Shapes/ExpierenceBlob.svg"
              alt="ExperienceBlob"
              className="ExpierenceBlobClass"
              width={500}
              height={600}
            />
            <Image
              src="/Shapes/ArtBlob.svg"
              alt="ArtBlob"
              className="ArtBlobClass"
              width={500}
              height={600}
            />
            <Image
              src="/Shapes/CookingBlob.svg"
              alt="CookingBlob"
              className="CookingBlobClass"
              width={500}
              height={600}
            />
          </div>
        </div>
        <div className="BlobText">
          <div className="AboutText">
            <Link href="/About">About</Link>
          </div>
          <div className="ProjectsText">
            <a href="#Projects">Projects</a>
          </div>
          <div className="ExperienceText">
            <a href="#Experience">Experience</a>
          </div>
          <div className="ArttText">
            <a href="#Art">Art</a>
          </div>
          <div className="CookingText">
            <a href="#Cooking">Cooking</a>
          </div>
        </div>
      </main>
    </div>
  );
}
