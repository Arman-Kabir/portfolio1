import React from 'react';
import './Hero.css';
import myImg from '../../../assets/my-image22.jpg';
import myResume from '../../../assets/Arman Kabir Resume1.pdf';

const Hero = () => {
    return (
        <div className='hero-section'>
            <div className='title-center'>
                <h1>Hi, I'm Arman Kabir</h1>
            </div>

            <div className='hero-wrapper'>

                <div className='left-column'>
                    <img src={myImg} alt="" />
                </div>

                <div className='right-column'>
                    <div className='my-intro'>
                        <p>
                           I'm a Full-Stack Web Developer Mainly Focused On Front-end.
                        </p>
                        
                        <div className='resume'>
                            <a target="_blank" href={myResume}>Download Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;