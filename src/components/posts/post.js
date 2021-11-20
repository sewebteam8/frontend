import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Top from '../top/top';
import './post.css'

const Post = (props) => {

    return ( 
    <React.Fragment>
        <div className="singlepost">
            <div className="col-12 title">{props.data.title}</div>
            <div className="desc col-12">
                <div className="col-6 tags">{props.data.tags}</div>
                <div className="col-6 name_">By : {props.data.name}</div>
            </div>
            <div className="col-12 msg-del">
                <div className="col-12 msg">{props.data.message.substr(0,300)} ... <span className="read"><Link to={`/singlepost/${props.data._id}`}>read more</Link></span></div>
            </div>
        </div>    
    </React.Fragment>
    );
}
 
export default Post;