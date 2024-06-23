import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="svg-container">
                <div className="shape-container OrangeHeader">
                    <img src="/Shapes/OrangeHeader.svg" alt="OrangeHeader" className="HeaderShape" />
                    <p className="orange-text">Zaid Shahid <br></br> Software Engineer</p>
                </div>
                <div className="shape-container BlueHeader">
                    <img src="/Shapes/BlueHeader.svg" alt="BlueHeader" className="HeaderShape" />
                    <p className='blue-text'>My Resume</p>
                    <p className='blue-text-icons'>My Resume</p>
                </div>
                <div className="shape-container PinkHeader">
                    <img src="/Shapes/PinkHeader.svg" alt="PinkHeader" className="HeaderShape" />
                </div>
            </div>
        </header>
    );
};

export default Header;
