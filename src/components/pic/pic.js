import axios, { useState } from 'axios';
import React, { Component } from 'react';

class Pic extends Component {

    state = {
        pic : null,
    }

    handleChange = (e) => {
        this.setState({pic:e.target.files[0]});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var fd = new FormData();
        fd.append("pic",this.state.pic);

        axios.post("http://localhost:7000/services/upload", fd)
        .then((res) => {
            console.log("uploaded")
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() { 
        return <React.Fragment>
        <p><input type="file" onChange={this.handleChange} /></p>
        <button onClick={this.handleSubmit}>save</button>
    </React.Fragment>
    }
}
 
export default Pic;