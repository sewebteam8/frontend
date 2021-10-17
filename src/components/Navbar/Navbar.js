import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
    render() { 
        return( 
            <React.Fragment>
                <div className="container navbar_">
                    <div className="row">
                        <div className="col-4 navHead">
                            Collab
                        </div>
                        <div className="col-2 navLinks">
                            Donate
                        </div>
                        <div className="col-2 navLinks">
                            Discuss
                        </div>
                        <div className="col-2 navLinks">
                            FindYourBuddy
                        </div>
                        <div className="col-2 navLinks">
                            Profile
                        </div>
                    </div>
                </div>       
            </React.Fragment>
        );
    }   
}
 
export default Navbar;