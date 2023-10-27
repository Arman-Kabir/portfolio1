import React from 'react';
import './Hero.css';
import myImg from '../../../assets/my-image22.jpg';
import myResume from '../../../assets/Arman Kabir Resume.pdf';

const Hero = () => {
    return (
        <div className='hero-section'>

            <div className='title-center'>
                <h1>Hi Sir,<br></br> I'm<br></br>
                    <span className='text-3xl font-black'>Arman Kabir</span>
                    <br></br>
                    <span className='text-xl font-black'>Full-Stack Web Developer </span>
                </h1>             
            </div>

            <div className='md:space-x-5 flex  items-center'>
                <div className=''>
                    <img src={myImg} alt="" />
                </div>

                <div className='resume'>
                    <a target="_blank" href={myResume}>Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;