import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom'
import './navbar.css';

const Navbar = () => {

    const [drop,setDrop] = useState(false)

    const handleClick = () => {
        setDrop(!drop)
    }

    return( 
        <React.Fragment>
            <div className="container-fluid navbar_">
                <div className="row">

                    <div className="col-3 navHead">
                        <Link to = "/" > Collab </Link> 
                    </div>

                    <div className="col-2 navLinks">
                        <Link to = "/" > Donate </Link> 
                    </div>

                    <div className="col-2 navLinks">
                        <Link to = "/contact" > Contact </Link> 
                    </div>

                    <div className="col-2 navLinks">
                        <Link to = "/discuss"> Discuss </Link> 
                    </div>

                    <div className="col-2 navLinks">
                            <Link to = "/" > Find Your Buddy </Link>
                    </div>

                    <div className="col-1 navLinks">
                        <div onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg></div>

                    </div>
                </div>
            </div>       
            {
                drop && <div className="profile_">
                    <div className="profile_links">Login</div>
                    <div className="profile_links">Edit profile</div>
                    <div className="profile_links">Logout</div>
                    <div className="profile_links">Delete my account</div>
                </div>
            }
        </React.Fragment>
    );   
}
 
export default Navbar;