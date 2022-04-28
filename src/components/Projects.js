import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faEye, faCode } from '@fortawesome/free-solid-svg-icons';
import odinbook from '../assets/projects/odinbook.jpg';

//let currentSlide = 0;

const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    function switchSlide(nav) {
        let slides = document.querySelectorAll('.project');

        //let prevBtn = document.querySelector('.prev-btn');
        //let nextBtn = document.querySelector('.next-btn');
    
        // Switch Slide
        if (nav === 'prev') {
            if (currentSlide > 0) {
                slides[currentSlide].style.left = '125%';
                slides[currentSlide - 1].style.left = '0';
                setCurrentSlide(currentSlide - 1);
            }
        }
        else if (nav === 'next') {
            if (currentSlide < slides.length - 1) {
                slides[currentSlide].style.left = '-125%';
                slides[currentSlide + 1].style.left = '0';
                setCurrentSlide(currentSlide + 1);
            }
        }
    }

    return (
        <section id="projects">
            <h1>Projects</h1>
            <div className="projects-list">
                <div className="card project">
                    <h2 className="card-title">Odinbook</h2>
                    <div className="project-content">
                        <img src={odinbook} alt="Odinbook"></img>
                        <div className="project-info">
                            <div className="project-description">
                                The Odinbook is a clone of popular social media website, <em>Facebook</em>. Users can create an account and log in,
                                view timelines, create posts and comments, send friend requests, upload a profile picture, and set profile and post
                                visibility. To get started, either create an account or log in with an existing account:
                                <br />
                                Email: johndoe@johndoe.com | Password: johndoe
                            </div>
                            <div className="project-tools">
                            <FontAwesomeIcon icon={faTools} /><b>Tools: </b>React
                            </div>
                            <div className="project-btns">
                                <a href="https://redraptor10.github.io/odinbook/" target="_blank" rel="noreferrer">
                                    <button><FontAwesomeIcon icon={faEye} />View Demo</button>
                                </a>
                                <a href="https://github.com/RedRaptor10/odinbook" target="_blank" rel="noreferrer">
                                    <button><FontAwesomeIcon icon={faCode} />Source Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card project">
                    <h2 className="card-title">Odinbook</h2>
                    <div className="project-content">
                        <img src={odinbook} alt="Odinbook"></img>
                        <div className="project-info">
                            <div className="project-description">
                                The Odinbook is a clone of popular social media website, <em>Facebook</em>. Users can create an account and log in,
                                view timelines, create posts and comments, send friend requests, upload a profile picture, and set profile and post
                                visibility. To get started, either create an account or log in with an existing account:
                                <br />
                                Email: johndoe@johndoe.com | Password: johndoe
                            </div>
                            <div className="project-tools">
                            <FontAwesomeIcon icon={faTools} /><b>Tools: </b>React
                            </div>
                            <div className="project-btns">
                                <a href="https://redraptor10.github.io/odinbook/" target="_blank" rel="noreferrer">
                                    <button><FontAwesomeIcon icon={faEye} />View Demo</button>
                                </a>
                                <a href="https://github.com/RedRaptor10/odinbook" target="_blank" rel="noreferrer">
                                    <button><FontAwesomeIcon icon={faCode} />Source Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="prev-btn" onClick={() => { switchSlide('prev') }}>Prev</button>
            <button className="next-btn" onClick={() => { switchSlide('next') }}>Next</button>
        </section>
    )
};

export default Projects;