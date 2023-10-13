import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import {CartWidget} from "../CartWidget/CartWidget"


function NavBar() {
    return (
    <nav>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">MaxPower-Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#features">Home</Nav.Link>
                    <NavDropdown title="Accesorios" id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Ruedas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                        Faros
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Alerones</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">
                        Frenos
                        </NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <CartWidget/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </nav>
    )
}

export default NavBar