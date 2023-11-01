import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';


const NavBarComponent = () => {
    const navBarStyle = {
        backgroundColor: '#B20303',
        color: '#fafafa',
        fontSize: '1.2rem'

    }
    const navLinksStyle ={
        color: '#fafafa',
        backgroundColor: '#B20303',
    }
const navLinksStyleDropdown ={
    color: '#fafafa',
    backgroundColor: '#B20303',
    border: '1.5px solid #fafafa',
}
    const navLogoStyle ={
        fontSize: '1.5rem',
        color: '#fafafa',
    }
    return (
        <Navbar  expand="lg" className="navBarComponent" style={navBarStyle}>
            <Container>
                <Navbar.Brand href="#home"style={navLogoStyle}>Show de Stand Up Hoy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home"style={navLinksStyle}>Inicio</Nav.Link>
                        <Nav.Link href="#link"style={navLinksStyle}>Historia del Stand Up</Nav.Link>
                        <Nav.Link href="#link"style={navLinksStyle}>Comediantes</Nav.Link>
                        <Nav.Link href="#link"style={navLinksStyle}>Contactanos</Nav.Link>
                        <NavDropdown title="Shows" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1"style={navLinksStyleDropdown}>Unipersonales</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"style={navLinksStyleDropdown}>Rotativos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3"style={navLinksStyleDropdown}>Elencos Fijos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4"style={navLinksStyleDropdown}>Open Mics</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.5"style={navLinksStyleDropdown}>Shows gratis/a la gorra</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidgetComponent/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;