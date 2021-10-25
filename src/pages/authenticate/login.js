import React, { Component } from 'react';
import axios from 'axios';
import './login.css'
import { ToastContainer } from 'react-toastify'
import '../../../node_modules/react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom';

class Login extends Component {
    state = { 
        account : {
            email : "",
            password : "",
        }
    }

    componentDidMount() {
        if(localStorage.getItem('cc-logged') === 'true'){
            this.props.history.push('/');
        }
    }

    handleChange = (e) => {
        const account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ account });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email : this.state.account.email,
            password : this.state.account.password,
        }
        axios.post('https://localhost:7000/services/login', data)
        .then((res) => {
            if(res.status === 200){
                localStorage.setItem('cc-logged', true)
                this.props.history.push('/');
                toast(`Login successfull`)
            }  
        })
        .catch((err) => {
            let account = {...this.state.account};
            account.email = ""
            account.password = ""
            this.setState({account})
            toast(`Login Failed`)
        });
    }

    render() { 
        return ( 
            <>
            <ToastContainer></ToastContainer>
            <div className="login-whole">
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
                            Don't Have An Account ?
                        </div>
                    </Link>

                </form>
            </div>
            </>
         );
    }
}
 
export default Login;



