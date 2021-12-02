import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import {Nav,Navbar,Container } from 'react-bootstrap';
import './navbar.css';

const NavbarComponent = () => {
    const handleClicks = () => {
        window.open("https://collegecollab001.herokuapp.com/");
    }

    const [drop,setDrop] = useState(false)

    const handleClick = () => {
        setDrop(!drop)
    }
    
    const handleLogout = () => {
        localStorage.removeItem('cc-logged');
        localStorage.removeItem('currentUser');
        window.location.reload();
    }

    return( 
        <React.Fragment>
            
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">CC</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/">Collab</Nav.Link>
                    {localStorage.getItem('cc-logged') === 'true' && <Nav.Link href = "/findbuddy" > Your buddy </Nav.Link>}
                    {localStorage.getItem('cc-logged') === 'true' && <Nav.Link href="/blog">Blog</Nav.Link>}
                    {localStorage.getItem('cc-logged') === 'true' &&<Nav.Link href="/pic">Pic</Nav.Link>}
                    <Nav.Link href="/"><div onClick={handleClicks}>  Donate </div></Nav.Link>
                    <Nav.Link href="/discuss">Discuss</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
               
                    <div className="col-1 navLinks">
                        <div onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>
                        </div>
                </div>
                {
                    drop && <div className="profile_ ">
                        <div className="profile_links"> <NavLink to = "/authorise" >Login</NavLink></div>
                        <div className="profile_links"> <NavLink to = "/editprofile" >Edit profile </NavLink></div>
                        <div className="profile_links"> <NavLink to="/profile" >Profile </NavLink></div>
                        <div className="profile_links"> <NavLink to = "/delete">Delete my account </NavLink></div>
                        <div className="profile_links" onClick={handleLogout}> <NavLink to = "">logout </NavLink></div>
                    </div>
                        }
                         
                </Navbar.Collapse>
                </Container>
             </Navbar>
                    
                
        </React.Fragment>
    );   
}
 
export default NavbarComponent;