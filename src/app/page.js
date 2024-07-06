import Image from "next/image";
import Header from "./ComponentPages/Header.js";
import Head from "next/head";
import jimp from "jimp";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap" />
      </Head>
      <Header />
      <main>
        <div className="ImageRectanglePadding">
          <Image
            src="/Shapes/MeHeader.svg"
            alt="Image Rectangle"
            className='ImageRectangle'
            width={1300}
            height={600}
          />
        </div>
        <div className="Blobs">
          <div className= "IntroRectangleContainer">
            <Image
              src="/Shapes/IntroRectangle.svg"
              alt="Intro Rectangle"
              className="IntroRectangleClass"
              layout="responsive"

              width={600}
              height={600}
            />
            <div className="IntroRectangleText">
            Welcome to my  <br />website. <br /> My name is Zaid, enjoy your stay. <br />  <br />Say Hello: ZaidShahid19@gmail.com
            </div>
          </div>
          <div className="BlobBlobs">
          <Image
          src="/Shapes/AboutBlob.svg"
          alt="AboutBlob"
          className='AboutBlob'
          width={500}
          height={600}
          />
          <Image
          src="/Shapes/ProjectsBlob.svg"
          alt="AboutBlob"
          className='ProjectsBlob'
          width={500}
          height={600}
          />
          <Image
          src="/Shapes/ExpierenceBlob.svg"
          alt="AboutBlob"
          className='ExpierenceBlobClass'
          width={500}
          height={600}
          />
          <Image
          src="/Shapes/ArtBlob.svg"
          alt="ArtBlob"
          className='ArtBlobClass'
          width={500}
          height={600}
          />
          <Image
          src="/Shapes/CookingBlob.svg"
          alt="ArtBlob"
          className='CookingBlobClass'
          width={500}
          height={600}
          />
          </div>
        </div>
        <div className="BlobText"> 
          <div className="AboutText"> <a href="#About">About</a></div>
          <div className="ProjectsText"> <a href="#Projects">Projects</a></div>
          <div className="ExperienceText"> <a href="#Experience">Experience</a></div>
          <div className="ArttText"> <a href="#Art">Art</a></div>
          <div className="CookingText"> <a href="#Cooking">Cooking</a></div>
        </div>
      </main>
    </>
  );
}
