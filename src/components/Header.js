import avatar from '../assets/avatar.png';

const Header = () => {
    return (
        <header>
            <a className="header-left" href="/#">
                <img className="avatar" src={avatar} alt="Weiminh Lam"></img>
                <h1 className="title">Weiminh Lam</h1>
            </a>
            <ul className="nav">
                <li><a href="/#">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#projects">Projects</a></li>
                <li><a href="/#skills">Skills</a></li>
            </ul>
        </header>
    )
};

export default Header;