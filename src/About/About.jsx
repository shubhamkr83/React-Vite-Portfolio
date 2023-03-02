import React from 'react';
// import web1 from '../../images/cat-webp.webp';
// import web2 from '../../images/cat-jpg.jpg';
import web2 from '../assets/images/subh-min2.jpg';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import "./about.css";


const About = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000,
            offset: 100,
            easing: 'ease-in-sine',
        });
    }, []);

    return (
        <>
            <section className="about_section" id="about">
                <h1 data-aos='zoom-in' className="about_title">About me</h1>
                <div className="about_center">
                    <picture data-aos='fade-right' className="about_left">
                        {/* <source srcset={web1} type='image/webp' /> */}
                        <source srcset={web2} type='image/jpg' />
                        <img src={web2} alt="img" />
                    </picture>

                    <div data-aos='fade-left' className="about_right">
                        <h2>Welcome to my Portfolio Website </h2>
                        <p>Hi... My name is Shubham Kumar. I am a Computer Technology student pursuing a Bachelor of Engineering in Priyadarshani College of Engineering, Nagpur Maharashtra. I am also a MERN Stack Developer specializing in Front End Development. I have a deep interest in web development.. </p>
                        <div className="download">
                            <a href="https://ilaforplacements.com/api/pdf/skresume11" target="_blank" rel="noreferrer"> Download CV</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};


export default About;