import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/L.png'
import '../../styles/Sidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt="logo" />
            </Link>

            <nav>
                <NavLink exact="true" activeclassname="activate" to="/">
                    <FontAwesomeIcon icon={faHome} color="#f1faee" />
                </NavLink>
                <NavLink exact="true" activeclassname="activate" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#f1faee" />
                </NavLink>
                <NavLink exact="true" activeclassname="activate" className="portfolio-link" to="/portfolio">
                    <FontAwesomeIcon icon={faBriefcase} color="#f1faee" />
                </NavLink>
                <NavLink exact="true" activeclassname="activate" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#f1faee" />
                </NavLink>
            </nav>

            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/lucas-quinteros-8300a7239/">
                        <FontAwesomeIcon icon={faLinkedin} color="#f1faee"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href="https://github.com/LucasQuinteros12">
                        <FontAwesomeIcon icon={faGithub} color="#f1faee"/>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
