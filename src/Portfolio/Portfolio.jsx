import React from 'react';
import Skill from "../Components/Skills/Skill";
import Technology from "../Components/Technology/Technology";
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import "./portfolio.css";


const Portfolio = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
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
        </>
    )
};


export default Portfolio;