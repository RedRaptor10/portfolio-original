import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faTools, faFolder, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import avatar from '../assets/avatar.png';

const Header = () => {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');

        if (window.scrollY > 100) {
            header.classList.add('header-background');
        } else {
            header.classList.remove('header-background');
        }
    });

    return (
        <header>
            <a className="header-left" href="#home">
                <img className="avatar" src={avatar} alt="Weiminh Lam"></img>
                <h1 className="title">Weiminh Lam</h1>
            </a>
            <ul className="nav">
                <li><a href="#home"><FontAwesomeIcon icon={faHome} />Home</a></li>
                <li><a href="#about"><FontAwesomeIcon icon={faUser} />About</a></li>
                <li><a href="#skills"><FontAwesomeIcon icon={faTools} />Skills</a></li>
                <li><a href="#projects"><FontAwesomeIcon icon={faFolder} />Projects</a></li>
                <li><a href="#contact"><FontAwesomeIcon icon={faEnvelope} />Contact</a></li>
            </ul>
        </header>
    )
};

export default Header;