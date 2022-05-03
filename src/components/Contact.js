import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <section id="contact">
            <h1>Contact</h1>
            <div className="card contact-info-container">
                <h2 className="card-title">Contact Information</h2>
                <div className="contact-info">
                    <div className="contact-item">
                        <div><FontAwesomeIcon icon={faEnvelope} />Email</div>
                        <div><a href="mailto:weiminh_lam@yahoo.com">weiminh_lam@yahoo.com</a></div>
                    </div>
                    <div className="contact-item">
                        <div><FontAwesomeIcon icon={faGithub} />GitHub</div>
                        <div><a href="https://www.github.com/RedRaptor10" target="_blank" rel="noreferrer">github.com/RedRaptor10</a></div>
                    </div>
                    <div className="contact-item">
                        <div><FontAwesomeIcon icon={faLinkedin} />LinkedIn</div>
                        <div>
                            <a href="https://www.linkedin.com/in/weiminh-lam/339198129" target="_blank" rel="noreferrer">
                                linkedin.com/in/weiminh...
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact;