import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
    <nav className='NavBarBody'>
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand className='NavBarTitle' href="/">MaxPower-Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        <NavLink className= 'btn btn-outline-light NBB' to='/category/Ruedas'>Ruedas</NavLink>
                        <NavLink className= 'btn btn-outline-light NBB' to='/category/Faros'>Faros</NavLink>
                        <NavLink className= 'btn btn-outline-light NBB' to='/category/Alerones'>Alerones</NavLink>
                        <NavLink className= 'btn btn-outline-light NBB' to='/category/Frenos'>Frenos</NavLink>
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