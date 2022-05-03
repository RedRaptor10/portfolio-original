import avatar from '../assets/avatar.png';

const About = () => {
    return (
        <section id="about">
            <div className="section-top">
                <div className="section-left">
                    <h1>About</h1>
                    <p>
                        Hi! My name is Weiminh Lam. I am a self-taught <b>full-stack web developer</b> with a BS degree in Computer Science.
                        I have been learning web development since the beginning of 2021 through online resources such as&nbsp;
                        <a href="https://www.theodinproject.com" target="_blank" rel="noreferrer">The Odin Project</a>. I am constantly
                        learning and improving my skills in order to become a proficient web developer.
                    </p>
                </div>
                <div className="section-right">
                    <img className="avatar" src={avatar} alt="Weiminh Lam"></img>
                </div>
            </div>
            <div className="section-bottom">
                <div className="section-left">
                    <div className="get-in-touch">
                        <span>Interested in My Work?</span>
                        <a href="/#contact"><button>Contact Me</button></a>
                    </div>
                </div>
                <div className="section-right">
                    <p>
                        I have always found it fun to build websites and showcase them to the world. I've actually been creating websites since
                        I was young, using services like <em>Yahoo! GeoCities</em> and <em>WordPress</em>. In fact, I currently run a&nbsp;
                        <a href="https://www.kombatakademy.com" target="_blank" rel="noreferrer">WordPress</a> site that educates people on how
                        to play fighting games! Aside from coding, I enjoy playing video games, watching anime, and creating&nbsp;
                        <a href="https://www.youtube.com/RedRaptor10" target="_blank" rel="noreferrer">YouTube</a> videos.
                    </p>
                </div>
            </div>
        </section>
    )
};

export default About;