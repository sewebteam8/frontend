import React, { Component } from 'react';
import './signup.css';
const Signup = () => {
 return ( 
        <>
        <ToastContainer></ToastContainer>
        <div className="signup-whole">
            <div className="signup-img">
                <img src="./signup.png" className="signup-left"></img>
            </div>
            <form className="signup-form">
                <div className="name-signup">Name</div>
                <input name="name" value={this.state.account.name} onChange={this.handleChange} className="input-name-signup"></input>
                <div className="email-signup">Email</div>
                <input name="email" type="mail" value={this.state.account.email} onChange={this.handleChange} className="input-email-signup"></input>
                <div className="password-signup">Password</div>
                <input name="password" type="password" value={this.state.account.password} onChange={this.handleChange} className="input-password-signup"></input>
                <div className="confirm-password-signup">Confirm Password</div>
                <input name="passwordCheck" type="password" value={this.state.account.passwordCheck} onChange={this.handleChange} className="input-confirm-password"></input>
                <div type="submit" onClick={this.handleSubmit} className="signup-btn">Signup</div>
                <Link to="/login"  style={{textDecoration:'none'}}>
                    <div className="already-have">Already Have An Account</div> 
                </Link>
            </form>
        </div>
        </>
     );
}
}

export default Signup;