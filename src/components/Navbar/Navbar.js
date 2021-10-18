import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './navbar.css';

class Navbar extends Component {
    render() { 
        return( 
            <React.Fragment>
                <div className="container-fluid navbar_">
                    <div className="row">

                        <div className="col-4 navHead">
                           <Link to = "/" > Collab </Link> 
                        </div>

                        <div className="col-2 navLinks">
                           <Link to = "/" > Donate </Link> 
                        </div>

                        <div className="col-2 navLinks">
                            <Link to = "/discuss"> Discuss </Link> 
                        </div>

                        <div className="col-2 navLinks">
                             <Link to = "/" > Find Your Buddy </Link>
                        </div>

                        <div className="col-2 navLinks">
                           <Link to = "/" > Profile </Link>
                        </div>
                    </div>
                </div>       
            </React.Fragment>
        );
    }   
}
 
export default Navbar;