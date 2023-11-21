import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import { Link } from 'react-router-dom';
import { ProductsData } from "../../data/productsData";

export const NavBarComponent = () => {
    const navBarStyle = {
        backgroundColor: '#B20303',
        color: '#fafafa',
        fontSize: '1.2rem',
        marginRigth: '100px',
    };
    const navLinksStyle = {
        color: '#fafafa',
        backgroundColor: '#B20303',
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "5px",
    };
    const navLinksStyleDropdown = {
        color: '#fafafa',
        backgroundColor: '#B20303',
        border: '1.5px solid #fafafa',
    };
    const navLinksStyleCategory = {
        color: '#fafafa',
        backgroundColor: '#B20303',
        textDecoration: "none",
    };
    const navLogoStyle = {
        fontSize: '1.5rem',
        color: '#fafafa',
        textDecoration: "none",

    };
    return (
        <Navbar expand="lg" className="navBarComponent" style={navBarStyle}>
            <Container>
                <Navbar.Brand href="#home">
                    <Link to={"/"} style={navLogoStyle}>Show de Stand Up Hoy</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={"/"} style={navLinksStyle}>Inicio</Link>
                        <Link to="#eventos" style={navLinksStyle}>Eventos</Link>
                        <Link to="#comediantes" style={navLinksStyle}>Comediantes</Link>
                        <Link to="#contactanos" style={navLinksStyle}>Contactanos</Link>
                        <NavDropdown title="Shows" id="basic-nav-dropdown" style={navLinksStyle}>
                            {ProductsData.map((product) => {
                                return (
                                    <NavDropdown.Item key={product.id} style={navLinksStyleDropdown}>
                                        <Link
                                            to={`/category/${product.category}`}
                                            style={navLinksStyleCategory}
                                        >
                                            {product.category}
                                        </Link>
                                    </NavDropdown.Item>
                                );
                            })}
                        </NavDropdown>
                    </Nav>
                    <CartWidgetComponent />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

