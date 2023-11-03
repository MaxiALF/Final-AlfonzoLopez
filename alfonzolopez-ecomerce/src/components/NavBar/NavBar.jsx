import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import {CartWidget} from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"


function NavBar() {
    return (
    <nav>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">MaxPower-Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <NavLink className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'} to="/">Home</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'} to='/category/Ruedas'>Ruedas</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'} to='/category/Faros'>Faros</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'} to='/category/Alerones'>Alerones</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'} to='/category/Frenos'>Frenos</NavLink>
                    </Nav>
                    <Nav>
                        <Link to='/cart'>
                            <CartWidget/>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </nav>
    )
}

export default NavBar