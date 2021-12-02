import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css'
const Footer = () =>
    <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">College Collab</h5>
                <p>Collab - With specific focus on that section which generally from the rural setting. </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li className="footer-link"> <a href="/">collab</a></li>
                    <li className="footer-link"><a href="/addform">Add Post</a></li>
                    <li className="footer-link"><a href="/contact">Contact Us</a></li>
                    <li className="footer-link"><a href="discuss">Chat</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li className="footer-link"> <i className = "icon ion-social-facebook"></i></li>
                    <li className="footer-link"> <i className = "icon ion-social-twitter" > </i></li>
                    <li className="footer-link"> <i className = "icon ion-social-snapchat"> </i></li>
                    <li className="footer-link"> <i className = "icon ion-social-instagram"> </i></li>
                     
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2021 Copyright:
        <a className="footer-link" href="https://mdbootstrap.com/"> CollageCollab</a>
    </div>

</footer>

export default Footer