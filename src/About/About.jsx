import React from 'react';
// import web1 from '../../images/cat-webp.webp';
// import web2 from '../../images/cat-jpg.jpg';
import web2 from '../assets/images/subh-min2.jpg';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import "./about.css";


const About = () => {


    return (
        <>
            <section className="about_section" id="about">
                <h1 className="about_title">About me</h1>
                <div className="about_center">
                    <picture className="about_left">
                        {/* <source srcset={web1} type='image/webp' /> */}
                        <source src={web2} type='image/jpg' />
                        <img src={web2} alt="img" />
                    </picture>

                    <div className="about_right">
                        <h2>Welcome to my Portfolio Website </h2>
                        <div>
                            <ul>
                                <li>Hi... My name is Shubham Kumar.</li>
                                <li>I am a Computer Technology student who recently graduated from Priyadarshini College of Engineering Nagpur with a Bachelor of Engineering degree.</li>
                                <li>Throughout my studies, I have gained proficiency in JAVA Programming and Full Stack Development.</li>
                                <li>I also had the opportunity to acquire 2 months of industry experience in Nagpur at AliGn InfoTech, where I further enhanced my skills in HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, and MongoDB.</li>
                                <li>During my time at college, I actively engaged with cutting-edge technologies such as blockchain, broadening my understanding of their applications and potential.</li>
                                <li>Additionally, I have hands-on experience with other technologies like Tailwind CSS, SASS (CSS Preprocessor), Strapi, and Visual Studio Code, which have played a vital role in my development journey.</li>
                                <li>In recognition of my programming skills, I achieved the Silver level with 238 points at HackerRank, showcasing my problem-solving abilities.</li>
                                <li>Moreover, I participated in open-source programs like HactoberFest, where I successfully solved 4 issues through pull requests and emerged as a winner.</li>
                            </ul>
                        </div>
                        <div className="download">
                            <a href="https://ilaforplacements.com/api/pdf/skresume13" target="_blank" rel="noreferrer"> Download CV</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};


export default About;