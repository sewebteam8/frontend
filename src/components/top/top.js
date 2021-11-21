import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './top.css'

const Top = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:7000/services/blog/get`)
        .then((res) => {
            setData(res.data);
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.message)
        })
    },[])

    return ( 
        <React.Fragment>
        <NavLink to={`/addform`}><div className="add_post">Add post</div></NavLink>
        {data && data.map(item => {
            return (
            <React.Fragment>
                <div className="sb_post">
                    <Link to = {`/singlepost/${item._id}`} >
                        <div className="col-12 title_sb">{item.title}</div>
                    </Link>
                    <div className="desc_ col-12">
                        <div className="col-6 tag_sb">{item.tags}</div>
                        <div className="col-6 name_sb">By : {item.name}</div>
                    </div>
                </div>
            </React.Fragment>)
        })}
        
    </React.Fragment>
    );
}
 
export default Top;