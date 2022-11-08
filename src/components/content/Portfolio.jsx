import '../../styles/Portfolio.scss';
import London from '../../assets/london.png'
import tiendaOnline from '../../assets/TiendaOnline.png'
import tiendaReact from '../../assets/tiendaReact.png'
import movies from '../../assets/Movies.png'
const Portfolio = () => {
    return (
        <>
            <div className="container portfolio-page">
                <div className="text-zone">
                    <h1>Portfolio</h1>
                    <p>Estos son algunos de los proyectos en los que he estado trabajando.</p>

                    <div className='portfolio-container'>
                        <div className='portFolio'>
                            <div className="card">
                                <figure>
                                    <img src={London} alt="london" />
                                </figure>
                                <div className="contenido">
                                    <h3>London Indumentaria</h3>
                                    <a target="_blank" rel='noreferrer' href="https://lucasquinteros12.github.io/proyectoLondon/">Ir al Sitio</a>
                                </div>
                            </div>

                            <div className="card">
                                <figure>
                                    <img src={tiendaOnline} alt="Tienda JavaScript" />
                                </figure>
                                <div className="contenido">
                                    <h3>Tienda Online con javaScript</h3>
                                    <a target="_blank" rel='noreferrer' href="https://lucasquinteros12.github.io/ProyectoFinalCoder/">Ir al Sitio</a>
                                </div>
                            </div>

                            <div className="card">
                                <figure>
                                    <img src={tiendaReact} alt="Tienda React" />
                                </figure>
                                <div className="contenido">
                                    <h3>Tienda Online con ReactJs</h3>
                                    <a target="_blank" rel='noreferrer' href="https://tienda-online-react.vercel.app/">Ir al Sitio</a>
                                </div>
                            </div>

                            <div className="card">
                                <figure>
                                    <img src={movies} alt="Movies" />
                                </figure>
                                <div className="contenido">
                                    <h3>Aplicacion de peliculas con React</h3>
                                    <a target="_blank" rel='noreferrer' href="https://movies-react-one.vercel.app/">Ir al Sitio</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
