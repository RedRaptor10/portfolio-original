import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1 className="title">Weiminh Lam</h1>
            <ul className="nav">
                <li><Link to="#home">Home</Link></li>
                <li><Link to="#about">About</Link></li>
                <li><Link to="#projects">Projects</Link></li>
                <li><Link to="skills">Skills</Link></li>
            </ul>
        </header>
    )
};

export default Header;