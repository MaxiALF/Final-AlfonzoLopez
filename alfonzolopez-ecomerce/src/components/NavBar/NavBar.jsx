// import { Container, Nav, Navbar } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"


const NavBar = () => {
    return (
    <nav>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">MaxPower-Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={({isActive}) => isActive ? 'btn btn-success' : 'btn'} to='/category/Ruedas'>Ruedas</NavLink>
                        <NavLink className={({isActive}) => isActive ? 'btn btn-success' : 'btn'} to='/category/Faros'>Faros</NavLink>
                        <NavLink className={({isActive}) => isActive ? 'btn btn-success' : 'btn'} to='/category/Alerones'>Alerones</NavLink>
                        <NavLink className={({isActive}) => isActive ? 'btn btn-success' : 'btn'} to='/category/Frenos'>Frenos</NavLink>
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