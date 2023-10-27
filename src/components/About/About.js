import React from 'react';
import './About.css';
import myImg from '../../assets/my-image22.jpg';

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-image'>
                <img src={myImg} alt="" />
            </div>
            <div className='about-body'>
                <h1>About Arman Kabir</h1>
                <p>I am a Full-Stack Web Developer . I have sound knowledge on HTML, CSS, JavaScript, ReactJs, ExpressJs, NodeJs, MongoDB, React Router, React Query, Axiox, Bootstrap, Tailwind CSS, Daisy UI, Firebase Authentication and hosting, Netlify, Heroku. I have done several projects based on these technologies. If given enough time, I am able to do any kinds of project using these technologies. I also have knowledge on MySQL database , UI/UX design using Adobe XD, Wordpress Customization, SEO and i am able to adopt any new technology quickly and implement it in projects as well.</p>
            </div>
        </div>
    );
};

export default About;