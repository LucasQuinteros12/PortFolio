import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../styles/About.scss';
const About = () => {
    return (
        <div className='container about-page'>
            <div className="text-zone">
                <h1>About Me</h1>
                <p>
                    Hola, tengo 19 años, vivo en Argentina, y soy web developer, 
                    tengo conocimientos en HTML5, CSS3, JavaScript, ReactJs, Python,
                    Django, Git, GitHub, SASS, SEO, Bootstrap, Firebase, Etc.
                </p>
                <p>
                    Soy una persona super proactiva, me gusta aprender cosas nuevas todo el tiempo,
                    desde muy chico me gusta la programacion. Me comprometo mucho con lo que hago y
                    dejo todo de mi en cada proyecto.

                </p>
                <h2>Academico</h2>
                <li>Curso Introduccion a la Programacion. Celsius | 2020 - 2021</li>
                <li>Curso Desarrollo Web. CoderHouse | 2021 - 2022</li>
                <li>Curso JavaScript. CoderHouse | 2021 - 2022</li>
                <li>Curso ReactJs. CoderHouse | 2021 - 2022</li>
                <li>Curso Python. CoderHouse | 2021 - 2022</li>
                <li>Curso Ingles. Facultad de Lenguas | 2022 - Cursando</li>
                <li>Curso PLC. Celsius | 2022 - Cursando</li>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4"/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faPython} color="#55acee"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
