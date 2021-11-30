import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import './navbar.css';

const Navbar = () => {
    const handleClicks = () => {
        window.open("https://collegecollab001.herokuapp.com/");
    }

    const [drop,setDrop] = useState(false)

    const handleClick = () => {
        setDrop(!drop)
    }

    return( 
        <React.Fragment>
            <div className="container-fluid navbar_">
                <div className="row">

                    <div className="col-2 navHead">
                        <NavLink to = "/" > Collab </NavLink> 
                    </div>

                    <div className="col-3 navLinks">
                            <NavLink to = "/findbuddy" > YourBuddy </NavLink>
                    </div>

                    <div className="col-3 navLinks">
                            <NavLink to = "/blog" > Blog </NavLink>
                    </div>

                    <div className="col-2 navLinks">
                        <NavLink to = "/"><div onClick={handleClicks}> Donate </div> </NavLink>
                    </div>

                    
                    <div className="col-2 navLinks">
                        <NavLink to = "/discuss"> Discuss </NavLink> 
                    </div>
                    
                    <div className="col-2 navLinks">
                        <NavLink to = "/contact" > Contact </NavLink> 
                    </div>


                    <div className="col-1 navLinks">
                        <div onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg></div>

                       


                    </div>
                </div>
            </div>       
            {
                drop && <div className="profile_">
                    <div className="profile_links"> <NavLink to = "/authorise" >Auth links</NavLink></div>
                    <div className="profile_links"> <NavLink to = "/editprofile" >Edit profile </NavLink></div>
                    <div className="profile_links"> <NavLink to="/profile" >Profile </NavLink></div>
                     <div className="profile_links"> <NavLink to = "/logout">Delete my account </NavLink></div>
                </div>
            }
        </React.Fragment>
    );   
}
 
export default Navbar;