
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';



function Header(){

    return(

        <Navbar bg="light" expand="lg">
            <Container className='topnav'>
                <img href="/home" className="header-img" alt="myimage" src="/sspic4.png" width={170} height={120}></img>
                <NavLink to="about">HOME</NavLink>
                <NavLink to="about">ABOUT US</NavLink>
                <NavLink to="about">SERMON</NavLink>
                <NavLink to="about">EVENTS</NavLink>
                <NavLink to="about">GIVING</NavLink>    
            </Container>
        </Navbar>

    )
}

export default Header;