import axios, { useState } from 'axios';
import React, { Component } from 'react';
import './pic.css';
import bck from '../../Assets/bck_post.png'
import {ToastContainer, toast} from 'react-toastify';
class Pic extends Component {

    state = {
        pic : null,
        email : "abc@gmail.com",
        tags : "",
    }

    handleChange = (e) => {
        const field = e.currentTarget.name;
            
            
        if(field == 'tags'){
            this.setState({tags:e.target.value});
        }
    }

    handleChange2 = (e) => {
            this.setState({pic:e.target.files[0]});
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
            toast.success("Uploaded Successfully!");
        })
        .catch((err) => {
            console.log(err);
            toast.error("Error in uploading!");
        })
    }



    render() { 
        return <React.Fragment>
            <div className="container-fluid pics-wrapper">
                <ToastContainer></ToastContainer>
            <div className="row">
                <div className="col-md-6">
                    <img src={bck} className="bck-p" />
                </div>
                <div className="col-md-6">
                    <p className="head-p">Add your Post!</p>
                    <input type="file" className="left" name="file" onChange={this.handleChange2}/>
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