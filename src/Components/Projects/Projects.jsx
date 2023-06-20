import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import ProjectData from "./ProjectData";
import "./project.css";
import { BsGithub } from 'react-icons/bs';
import { RiLiveLine } from 'react-icons/ri';

const allCategory = [...new Set(ProjectData.map((curElem) => curElem.category)), "All"];

const Projects = () => {

    const [items, setItems] = useState(ProjectData);
    const [catItems] = useState(allCategory);

    const filterItem = (category) => {

        if (category === "All") {
            setItems(ProjectData);
            return;
        }
        const updatedItems = ProjectData.filter((curElem) => {
            return curElem.category === category;
        });

        setItems(updatedItems);
    }

    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease-in-sine',
        });
    }, []);

    return (
        <>
            <section className="project_section" id="projects">
                <h2 className="project_title">Projects Preview</h2>
                <div className="project_nav">
                    {
                        catItems.map((curElem, index) => {
                            return <button key={index} onClick={() => filterItem(curElem)}>{curElem}</button>
                        })
                    }

                </div>
                <div className="project_center">

                    {
                        items.map((elem) => {
                            const { id, name, image, git, live } = elem;

                            return (
                                <>
                                    <div className='project_container'>
                                        <div className="project" key={id}>
                                            <a href={live} target="_blank" rel="noreferrer">
                                                <picture>
                                                    <img src={image} alt="img" />
                                                </picture>
                                                <h2>{name}</h2>
                                            </a>
                                        </div>
                                        <div className='project_buttons'>
                                            <a href={git}><button className='git_button'><BsGithub /> GitHub </button></a>
                                            <a href={live}><button className='live_button'><RiLiveLine /> Live </button></a>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </section>

        </>
    );
};

export default Projects;