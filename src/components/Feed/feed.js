import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import Post from '../posts/post';
import Top from '../top/top';
import './feed.css'

const Feed = () => {

    const [posts,setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://se-web-app.herokuapp.com/services/blog/get')
        .then((res) => {
            console.log(res.data);
            setPosts(res.data);
        })
        .catch((err) => {
            console.log(err.mesasge);
        })
    }, [])

    return (
        <React.Fragment>
            <div className="row feed">
                <div className="col-12 col-md-8">
                {
                    posts && 
                    posts.map(item => {
                        return (<Post data={item} />)
                    })
                }
                </div>
                <div className="col-12 col-md-4"><Top /></div>
            </div>
        </React.Fragment>
    );
}
 
export default Feed;