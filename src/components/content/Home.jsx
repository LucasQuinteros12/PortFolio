import React from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/L-home.png'
import '../../styles/Home.scss';
const Home = () => {
    return (
        <>

            <div className="container home-page">
                <div className='text-zone'>
                    <h1>Hola, <br /> Soy
                        <img src={LogoTitle} alt="developer" />
                        ucas Quinteros
                        <br />
                        web Developer
                    </h1>
                    <h2>Front End Developer / React Js</h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
            </div>
        </>
    );
}

export default Home;
