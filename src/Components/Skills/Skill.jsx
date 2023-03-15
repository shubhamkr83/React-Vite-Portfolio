import React from 'react';
import webp1 from '../../assets/images/front-webp.webp';
import webp2 from '../../assets/images/back-webp.webp';
import webp3 from '../../assets/images/java-webp.webp';
// import webp4 from '../../assets/images/powerbi-webp.webp';
import webp5 from '../../assets/images/database-webp.webp';
import webp6 from '../../assets/images/data-webp.webp';
import webp7 from '../../assets/images/os-webp.webp';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import "./skill.css";

const Skill = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000,
            offset: 100,
            easing: 'ease-in-sine',
        });
    }, []);

    return (
        <>

            <section className="skill_section">
                <h1 data-aos='zoom-in' className="skill_title">Skills</h1>
                <div className="center_section">
                    <div data-aos='flip-left' className="card">

                        <h2>Front-End Development</h2>
                        <picture>
                            <img src={webp1} alt="img" />
                        </picture>

                    </div>

                    <div data-aos='flip-left' className="card">

                        <h2>Back-End Development</h2>
                        <picture>
                            <img src={webp2} alt="img" />
                        </picture>

                    </div>

                    <div data-aos='flip-left' className="card">

                        <h2>JAVA</h2>
                        <picture>
                            <img src={webp3} alt="img" />
                        </picture>

                    </div>

                    <div data-aos='flip-left' className="card">

                        <h2>DBMS</h2>
                        <picture>
                            <img src={webp5} alt="img" />
                        </picture>

                    </div>

                    <div data-aos='flip-left' className="card">

                        <h2>DSA</h2>
                        <picture>
                            <img src={webp6} alt="img" />
                        </picture>

                    </div>

                    <div data-aos='flip-left' className="card">

                        <h2>OS</h2>
                        <picture>
                            <img src={webp7} alt="img" />
                        </picture>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Skill;