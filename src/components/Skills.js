import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Add Font Awesome Brand Icons
library.add(fab);

// Import Additional Icons From Assets Using Webpack
const icons = {};

function importAll(r) {
    return r.keys().forEach((key) => (icons[key] = r(key)));
}

importAll(require.context('../assets/icons', false, /\.(png|jpe?g|svg)$/)); // require.context(directory, (useSubdirectories = true), (regExp));

const Skills = () => {
    return (
        <section id="skills">
            <h1>Skills</h1>
            <div className="skills-wrapper">
                <div className="card skills-group">
                    <h2 className="card-title">Front-end</h2>
                    <div className="skills-group-items">
                        <a href="https://www.javascript.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-brands fa-js-square" />JavaScript</a>
                        <a href="https://reactjs.org" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-brands fa-react" />React</a>
                        <a href="https://html.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-brands fa-html5" />HTML5</a>
                        <a href="https://pugjs.org" target="_blank" rel="noreferrer"><img className="skills-icon" src={icons['./pug.svg']} alt="Pug"></img>Pug</a>
                        <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-brands fa-css3" />CSS3</a>
                    </div>
                </div>
                <div className="card skills-group">
                    <h2 className="card-title">Back-end</h2>
                    <div className="skills-group-items">
                        <a href="https://www.javascript.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-brands fa-js-square" />JavaScript</a>
                        <a href="https://jestjs.io" target="_blank" rel="noreferrer"><img className="skills-icon" src={icons['./jest.svg']} alt="Jest"></img>Jest</a>
                        <a href="https://nodejs.org" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-brands fa-node-js" />NodeJS</a>
                        <a href="https://expressjs.com" target="_blank" rel="noreferrer"><img className="skills-icon" src={icons['./expressjs.svg']} alt="Express"></img>Express</a>
                        <a href="https://www.mongodb.com" target="_blank" rel="noreferrer"><img className="skills-icon" src={icons['./mongodb.svg']} alt="MongoDB"></img>MongoDB</a>
                        <a href="https://firebase.google.com" target="_blank" rel="noreferrer"><img className="skills-icon" src={icons['./firebase.svg']} alt="Firebase"></img>Firebase</a>
                    </div>
                </div>
                <div className="card skills-group">
                    <h2 className="card-title">Miscellaneous</h2>
                    <div className="skills-group-items">
                        <a href="https://git-scm.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-brands fa-git" />Git</a>
                        <a href="https://www.npmjs.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-brands fa-npm" />npm</a>
                        <a href="https://webpack.js.org" target="_blank" rel="noreferrer"><img className="skills-icon" src={icons['./webpack.svg']} alt="Webpack"></img>Webpack</a>
                        <a href="https://github.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-brands fa-github" />GitHub</a>
                        <a href="https://www.heroku.com" target="_blank" rel="noreferrer"><img className="skills-icon" src={icons['./heroku.svg']} alt="Heroku"></img>Heroku</a>
                        <a href="https://wordpress.org" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-brands fa-wordpress" />WordPress</a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Skills;