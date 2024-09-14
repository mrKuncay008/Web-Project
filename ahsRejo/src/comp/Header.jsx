import logo from '../assets/images/logo.png';
import jumboImg from '../assets/images/ahs.jpg';

import { Navbar } from 'react-bootstrap';

const HeaderPage = () => {
 return ( <>
 <Navbar classNameName='mx-4' bg="white">
    <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="60"
                    height="60"
                    classNameName="d-inline-block align-top"
                />
        </Navbar.Brand>
    </Navbar>
    <div className='container justify-center'>
        <img className='gambar rounded-lg' src={jumboImg} alt="" />
    </div>
    </>
    );
}
export default HeaderPage;