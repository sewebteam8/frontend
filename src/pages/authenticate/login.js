import React, { Component } from 'react';
import './login.css'
import { Link } from 'react-router-dom';
render() { 
    return ( 
        <>
        <ToastContainer></ToastContainer>
        <div className="login-whole">

            <div className="left-img-login">
                <img src="./login.png" className="login"></img>
            </div>

            <form className="login-form">
                <div className="login-title">Collab </div>
                <div className="email-login" >Email</div>
                <input name="email" type="mail" className="input-email-login" value={this.state.account.email} onChange={this.handleChange}></input>
                <div className="password-login">Password</div>
                <input name="password" className="input-password-login" type="password" value={this.state.account.password} onChange={this.handleChange}></input>
                <div className="btns-login-flex">
                    <div type="submit" onClick={this.handleSubmit} className="login-btn">Login</div>
                </div>

                <Link to="/signup" style={{textDecoration:'none'}} >
                    <div className="dont-account">
                        Don't Have An Acoount ?
                    </div>
                </Link>

            </form>
        </div>
        </>
     );
}
}

export default Login;