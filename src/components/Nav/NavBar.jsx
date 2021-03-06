import React from 'react'
import './Nav.css'
//import bootstrap navbar with search bar
import { Navbar, Nav,  Button , Container} from 'react-bootstrap';
import {FaSearch} from 'react-icons/fa'

function NavBar() {
    return (
        <div className='shadow-sm'>
            <Navbar  bg="light" expand="lg">
                <Container fluid>
                    <div className='searchbar'>
                        
                        <div className="box">
                            <FaSearch className='search-icon'/>
                            <input type="text" className='search-query' placeholder="Search..." />
                        </div>
                    </div>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    
                    <Nav className="ms-auto nav-items">
                        <Nav.Link id="nav-link" href="#home">Home</Nav.Link>
                        <Nav.Link id="nav-link1" href="#courses">Courses</Nav.Link>
                    </Nav>

                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cart m-3" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>

                    {/* login button grey color */}
                    <Button variant="outline-secondary" className="login-button">Login</Button>
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </div>
    )
}

export default NavBar
