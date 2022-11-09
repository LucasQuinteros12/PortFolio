import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/L.png'
import '../../styles/Sidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faBriefcase, faClose, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {

    const [showNav, setShowNav] = useState(false);

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/' onClick={() => setShowNav(false)}>
                <img src={LogoS} alt="logo" />
            </Link>

            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact="true" activeclassname="activate" to="/" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color="#f1faee" />
                </NavLink>
                <NavLink exact="true" activeclassname="activate" className="about-link" to="/about" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color="#f1faee" />
                </NavLink>
                <NavLink exact="true" activeclassname="activate" className="portfolio-link" to="/portfolio" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faBriefcase} color="#f1faee" />
                </NavLink>
                <NavLink exact="true" activeclassname="activate" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faEnvelope} color="#f1faee" />
                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#f1faee"
                    size="3x"
                    className='close-icon' />
            </nav>

            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/lucas-quinteros-8300a7239/">
                        <FontAwesomeIcon icon={faLinkedin} color="#f1faee" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href="https://github.com/LucasQuinteros12">
                        <FontAwesomeIcon icon={faGithub} color="#f1faee" className="anchor-icon" />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#f1faee"
                size="3x"
                className='hamburger-icon' />
        </div>
    );
}

export default Sidebar;
