import React from 'react';
import Skill from "../Components/Skills/Skill";
import Technology from "../Components/Technology/Technology";
import Projects from '../Components/Projects/Projects';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import "./portfolio.css";


const Portfolio = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 100,
            easing: 'ease-in-sine',
        });
    }, []);

    return (
        <>
            <div className="Port_title" id="portfolio">
                <h1 data-aos='zoom-in'>Portfolio</h1>
            </div>
            <Skill />
            <Technology />
            <Projects />
        </>
    )
};


export default Portfolio;