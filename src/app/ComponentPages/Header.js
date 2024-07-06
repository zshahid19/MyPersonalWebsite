import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="svg-container">
                <div className="shape-container OrangeHeader">
                    <img src="/Shapes/OrangeHeader.svg" alt="OrangeHeader" className="HeaderShape" />
                    <div className="shape-container OrangeHeader">
                    <a href="#home" className="orange-text">
                        Zaid Shahid<br />Software Engineer
                    </a>
                    </div>
                </div>
                <div className="shape-container BlueHeader">
                    <img src="/Shapes/BlueHeader.svg" alt="BlueHeader" className="HeaderShape" />
                    <a href="#resume" className="blue-text header-text">My Resume</a>


                    <div className="blue-text-icons">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src='/Shapes/Linkedin.svg' alt="linkedin icon" className='blue-text-logos' />
                        </a>
                        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                            <img src='/Shapes/Github.svg' alt="github icon" className='blue-text-logos' />
                        </a>
                        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                            <img src='/Shapes/Vector.svg' alt="vector icon" className='blue-text-logos' />
                        </a>
                    </div>
                </div>
                <div className="shape-container PinkHeader">
                <img src="/Shapes/PinkHeader.svg" alt="PinkHeader" className="HeaderShape" />
                <div className='pink-text'>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#art">Art</a>
                    <a href="#cooking">Cooking</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
            </div>

        </header>
    );
};

export default Header;
