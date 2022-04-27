const Skills = () => {
    return (
        <section id="skills">
            <h1>Skills</h1>
            <div className="skills-wrapper">
                <div className="card skills-group">
                    <h2 className="card-title">Front-end</h2>
                    <div className="skills-group-items">
                        <div>JavaScript</div>
                        <div>React</div>
                        <div>HTML5</div>
                        <div>Pug</div>
                        <div>CSS3</div>
                    </div>
                </div>
                <div className="card skills-group">
                    <h2 className="card-title">Back-end</h2>
                    <div className="skills-group-items">
                        <div>JavaScript</div>
                        <div>NodeJS</div>
                        <div>Express</div>
                        <div>MongoDB</div>
                        <div>Firebase</div>
                        <div>Jest</div>
                    </div>
                </div>
                <div className="card skills-group">
                    <h2 className="card-title">Miscellaneous</h2>
                    <div className="skills-group-items">
                        <div>Git</div>
                        <div>npm</div>
                        <div>Webpack</div>
                        <div>GitHub</div>
                        <div>Heroku</div>
                        <div>WordPress</div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Skills;