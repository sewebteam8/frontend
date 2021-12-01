import axios, { useState } from 'axios';
import React, { Component } from 'react';
import './pic.css';
import bck from '../../Assets/bck_post.png'

class Pic extends Component {

    state = {
        pic : null,
        email : "abc@gmail.com",
        tags : "",
    }

    handleChange = (e) => {
        const field = e.currentTarget.name;
        if(field == 'file'){
            this.setState({pic:e.target.files[0]});
        }
        if(field == 'tags'){
            this.setState({tags:e.target.value});
        }
    }

    componentDidMount() {
        // const data = localStorage.getItem("currentUser");
        // const useremail = data.user.email;
        // this.setState({email : useremail});
        // console.log(useremail);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var fd = new FormData();
        fd.append("pic",this.state.pic);
        fd.append("tags",this.state.tags);
        fd.append("email",this.state.email);
        
        axios.post("https://se-web-app.herokuapp.com/services/upload", fd)
        .then((res) => {
            console.log("uploaded")
        })
        .catch((err) => {
            console.log(err);
        })
    }



    render() { 
        return <React.Fragment>
        <div className="container-fluid pics-wrapper">
            <div className="row">
                <div className="col-md-6">
                    <img src={bck} className="bck-p" />
                </div>
                <div className="col-md-6">
                    <p className="head-p">Add your Post!</p>
                    <input type="file" className="left" name="file"/>
                    <div class="form-group">
                        <label for="tags" className="feild_label">Tags</label>
                        <input type="text" value={this.state.tags} onChange={this.handleChange} class="form-control" id="tags" placeholder="Enter tags" name="tags"/>
                    </div>
                    <button className="col-md-12" onClick={this.handleSubmit}>Upload</button>
                </div>
            </div>
        </div>
    </React.Fragment>
    }
}
 
export default Pic;