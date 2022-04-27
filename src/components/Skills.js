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
                        <div><FontAwesomeIcon icon="fa-brands fa-js-square" />JavaScript</div>
                        <div><FontAwesomeIcon icon="fa-brands fa-react" />React</div>
                        <div><FontAwesomeIcon icon="fa-brands fa-html5" />HTML5</div>
                        <div><img className="skills-icon" src={icons['./pug.svg']} alt="Pug"></img>Pug</div>
                        <div><FontAwesomeIcon icon="fa-brands fa-css3" />CSS3</div>
                    </div>
                </div>
                <div className="card skills-group">
                    <h2 className="card-title">Back-end</h2>
                    <div className="skills-group-items">
                        <div><FontAwesomeIcon icon="fa-brands fa-js-square" />JavaScript</div>
                        <div><img className="skills-icon" src={icons['./jest.svg']} alt="Jest"></img>Jest</div>
                        <div><FontAwesomeIcon icon="fa-brands fa-node-js" />NodeJS</div>
                        <div><img className="skills-icon" src={icons['./expressjs.svg']} alt="Express"></img>Express</div>
                        <div><img className="skills-icon" src={icons['./mongodb.svg']} alt="MongoDB"></img>MongoDB</div>
                        <div><img className="skills-icon" src={icons['./firebase.svg']} alt="Firebase"></img>Firebase</div>
                    </div>
                </div>
                <div className="card skills-group">
                    <h2 className="card-title">Miscellaneous</h2>
                    <div className="skills-group-items">
                        <div><FontAwesomeIcon icon="fa-brands fa-git" />Git</div>
                        <div><FontAwesomeIcon icon="fa-brands fa-npm" />npm</div>
                        <div><img className="skills-icon" src={icons['./webpack.svg']} alt="Webpack"></img>Webpack</div>
                        <div><FontAwesomeIcon icon="fa-brands fa-github" />GitHub</div>
                        <div><img className="skills-icon" src={icons['./heroku.svg']} alt="Heroku"></img>Heroku</div>
                        <div><FontAwesomeIcon icon="fa-brands fa-wordpress" />WordPress</div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Skills;