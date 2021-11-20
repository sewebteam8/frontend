import React, { Component } from 'react';
import Feed from '../../components/Feed/feed';

const Blog = () => {
    return ( 
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <Feed />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Blog;