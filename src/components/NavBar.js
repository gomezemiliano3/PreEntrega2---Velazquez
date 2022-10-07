import logo from '../multimedia/logonegro-01.webp';
import CartWidget from './CartWidget'
import {NavLink} from 'react-router-dom'

function NavBar () {
    return (
        <>
            <nav className="navbarStandard navBar navbar-expand-lg">
                <NavLink to={'/'}>    
                    <img src={logo} className="logo" alt="logo" />
                </NavLink>

                <div className="container-fluid">    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">       
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" role="button" aria-expanded="false">
                                    Inicio
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Planes 
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a class="dropdown-item"><NavLink to={`/category/Mensuales/mensual`}>Mensuales</NavLink> </a></li>
                                    <li><a class="dropdown-item"><NavLink to={`/category/FullWeb/full`}>Full Web</NavLink></a></li>                    
                                </ul>
                            </li>
                        </ul>
                        <CartWidget/>
                    </div>
                </div>
            </nav>
        </>
    )    
};

export default NavBar;

