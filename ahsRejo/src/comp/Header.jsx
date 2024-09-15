import logo from '../assets/images/logo.png';
import jumboImg from '../assets/images/ahs.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';

import Fade from 'react-reveal/Fade';

const HeaderPage = () => {
 return ( 
 <>
    <Navbar className=' navbar__page fixed-top font-bold' expand="lg">
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="60"
                    height="60"
                    className="d-inline-block align-top"
                    alt="Logo" // Selalu tambahkan alt untuk aksesibilitas
                />
            </Navbar.Brand>
            <Navbar.Toggle className='nav__toggle' aria-controls="navbarScroll" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav__list navbar-nav ml-auto">
                    <Nav.Link className='nav__link' href="#home">Home</Nav.Link>
                    <Nav.Link className='nav__link' href="#catalog">Catalog</Nav.Link>
                    <Nav.Link className='nav__link' href="#">Find Us</Nav.Link>
                    <Nav.Link className='nav__link' href="#">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    
        <div className='container mt-5 justify-center'>
            <Fade distance='20%' duration='2000'>
                <img className='gambar w-auto h-auto rounded-lg' src={jumboImg} alt="" />
            </Fade>
        </div>
    </>
    );
}
export default HeaderPage;