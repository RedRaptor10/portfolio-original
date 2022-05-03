import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faEye, faCode, faPause } from '@fortawesome/free-solid-svg-icons';
import projects from '../helpers/projects';

// Import Project Thumbs From Assets Using Webpack
const thumbs = {};

function importAll(r) {
    return r.keys().forEach((key) => (thumbs[key] = r(key)));
}

importAll(require.context('../assets/projects', false, /\.(png|jpe?g|svg)$/)); // require.context(directory, (useSubdirectories = true), (regExp));

const Projects = () => {
    let index = 1;
    let paused = false;
    const delay = 5000;

    // Automatically shift slides
    let interval = setInterval(() => {
        shiftSlide(index + 1);
    }, delay);

    function play() {
        document.querySelector('.pause-btn').style.background = 'rgb(96, 32, 32)';

        interval = setInterval(() => {
            shiftSlide(index + 1);
            paused = false;
        }, delay);
    }

    function pause() {
        document.querySelector('.pause-btn').style.background = 'rgb(64, 32, 32)';

        clearInterval(interval);
        paused = true;
    }

    // Clone first and last slides and add them as prev and next slides
    useEffect(() => {
        const slidesContainer = document.querySelector('.projects-list');
        const slides = document.querySelectorAll('.project');

        const firstClone = slides[0].cloneNode(true);
        const lastClone = slides[slides.length - 1].cloneNode(true);

        slidesContainer.append(firstClone);
        slidesContainer.prepend(lastClone);

        // Set default slide positions
        const newSlides = document.querySelectorAll('.project');
        newSlides.forEach((s, i) => {
            s.style.left = `${125 * (i - 1)}%`;
        });
    }, []);

    function shiftSlide(newIndex) {
        const slides = document.querySelectorAll('.project');
        const btns = document.querySelectorAll('.projects-list-btns > button');
        const prev = 0;
        const first = 1;
        const last = slides.length - 2;
        const next = slides.length - 1;

        // Add slide animation
        slides.forEach(s => { s.classList.add('animate'); });

        // Temporarily disable buttons
        btns.forEach(b => { b.disabled = true; });

        // Shift slides
        slides.forEach((s, i) => {
            s.style.left = `${125 * (i - newIndex)}%`;
        });

        index = newIndex; // Set new index

        // Wait for slides to shift
        setTimeout(() => {
            // Remove slide animation
            slides.forEach(s => { s.classList.remove('animate'); });

            // If prev or next slide is reached, reset slide positions
            if (index === next) {
                slides.forEach((s, i) => {
                    s.style.left = `${125 * (i - first)}%`;
                });

                index = first; // Reset index
            } else if (index === prev) {
                slides.forEach((s, i) => {
                    s.style.left = `${125 * (i - last)}%`;
                });

                index = last; // Reset index
            }

            // Re-enable buttons
            btns.forEach(b => { b.disabled = false; });
        }, 500);
    }

    return (
        <section id="projects">
            <h1>Projects</h1>
            <div className="projects-list">
                {projects.map((project, i) => {
                    return (
                        <div key={i} className="card project">
                            <h2 className="card-title">{project.name}<span>{i + 1 + ' / ' + projects.length}</span></h2>
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
                <button className="prev-btn" onClick={() => { pause(); shiftSlide(index - 1) }}>Prev</button>
                <button className="pause-btn" onClick={() => paused ? play() : pause() }><FontAwesomeIcon icon={faPause} /></button>
                <button className="next-btn" onClick={() => { pause(); shiftSlide(index + 1) }}>Next</button>
            </div>
        </section>
    )
};

export default Projects;