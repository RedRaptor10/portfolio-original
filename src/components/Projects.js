import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faEye, faCode } from '@fortawesome/free-solid-svg-icons';
import projects from '../helpers/projects';

// Import Project Thumbs From Assets Using Webpack
const thumbs = {};

function importAll(r) {
    return r.keys().forEach((key) => (thumbs[key] = r(key)));
}

importAll(require.context('../assets/projects', false, /\.(png|jpe?g|svg)$/)); // require.context(directory, (useSubdirectories = true), (regExp));

const Projects = () => {
    let index = 1;

    // Clone first and last slides and add them as prev and next slides
    useEffect(() => {
        const slidesContainer = document.querySelector('.projects-list');
        const slides = document.querySelectorAll('.project');

        const firstClone = slides[0].cloneNode(true);
        const lastClone = slides[slides.length - 1].cloneNode(true);

        slidesContainer.append(firstClone);
        slidesContainer.prepend(lastClone);
    }, []);

    function shiftSlide(direction) {
        const slides = document.querySelectorAll('.project');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const prev = 0;
        const first = 1;
        const last = slides.length - 2;
        const next = slides.length - 1;

        // Add slide animation
        slides.forEach(s => { s.classList.add('animate'); });

        // Temporarily disable buttons
        direction ? nextBtn.disabled = true : prevBtn.disabled = true;

        // Shift slides
        if (direction) {
            slides[index].style.left = '-125%';
            slides[index + 1].style.left = '0';
            index++;
        } else {
            slides[index].style.left = '125%';
            slides[index - 1].style.left = '0';
            index--;
        }

        // Wait for slides to shift
        setTimeout(() => {
            slides.forEach((s, i) => {
                s.classList.remove('animate'); // Remove slide animation
            });

            // If prev or next slide is reached, reset slide positions
            if (index === next) {
                slides.forEach((s, i) => {
                    if (i === prev) { s.style.left = '-125%'; }
                    else if (i === first) { s.style.left = '0'; }
                    else { s.style.left = '125%'; }
                });

                index = first; // Reset index
            } else if (index === prev) {
                slides.forEach((s, i) => {
                    if (i === next) { s.style.left = '125%'; }
                    else if (i === last) { s.style.left = '0'; }
                    else { s.style.left = '-125%'; }
                });

                index = last; // Reset index
            }

            // Re-enable buttons
            direction ? nextBtn.disabled = false : prevBtn.disabled = false;
        }, 500);
    }

    return (
        <section id="projects">
            <h1>Projects</h1>
            <div className="projects-list">
                {projects.map((project, i) => {
                    return (
                        <div key={i} className="card project">
                            <h2 className="card-title">{project.name}</h2>
                            <div className="project-content">
                                <img src={thumbs['./' + project.thumb]} alt={project.name}></img>
                                <div className="project-info">
                                    <div className="project-description">
                                        {project.description}
                                    </div>
                                    <div className="project-tools">
                                    <FontAwesomeIcon icon={faTools} /><b>Tools: </b>{project.tools}
                                    </div>
                                    <div className="project-btns">
                                        <a href={project.demo} target="_blank" rel="noreferrer">
                                            <button><FontAwesomeIcon icon={faEye} />View Demo</button>
                                        </a>
                                        <a href={project.source} target="_blank" rel="noreferrer">
                                            <button><FontAwesomeIcon icon={faCode} />Source Code</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="projects-list-btns">
                <button className="prev-btn" onClick={() => { shiftSlide(0) }}>Prev</button>
                <button className="next-btn" onClick={() => { shiftSlide(1) }}>Next</button>
            </div>
        </section>
    )
};

export default Projects;