
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';



function Header(){

    return(

        <Navbar bg="light" expand="lg">
            <Container className=''>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="topnav">
                    <img href="#home" className="header-img" alt="myimage" src="/sspic4.png" width={170} height={120}></img>
                    <Nav.Link to="/home" activeStyle>HOME</Nav.Link>
                    <Nav.Link to="/about" activeStyle>ABOUT US</Nav.Link>
                    <Nav.Link to="/sermons" activeStyle>SERMON</Nav.Link>
                    <Nav.Link to="/events" activeStyle>EVENTS</Nav.Link>
                    <Nav.Link href="/giving" activeStyle><button>GIVING</button></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>    
         </Navbar>
        // <nav>
        //     <div class="topnav">
        //         {/* <a class="active" href="#home">Home</a> */}
        //         <img href="#home" className="header-img" alt="myimage" src="/sspic4.png" width={170} height={120}></img>
        //         <a href="#news"><button>GIVING</button></a>
        //         <a href="#news">NEW MEMBERS</a>
        //         <a href="#contact">CONTACT US</a>
        //         <a href="#news">SERMONS</a>
        //         <a href="#news">RESOURCES</a>
        //         <a href="#about">ABOUT</a>
        //     </div>
        // </nav>
    )
}

export default Header;