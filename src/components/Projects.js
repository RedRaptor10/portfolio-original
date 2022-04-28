import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faEye, faCode } from '@fortawesome/free-solid-svg-icons';
import odinbook from '../assets/projects/odinbook.jpg';

const Projects = () => {
    return (
        <section id="projects">
            <h1>Projects</h1>
            <div className="card">
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
        </section>
    )
};

export default Projects;