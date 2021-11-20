import axios from 'axios';
import React, { Component, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './post.css'

const IndPost = (props) => {

    const [data,setData] = useState([]);

    const handleDelete = (e) => {
        e.preventDefault()
        const data1 = {
            id : data1._id
        }
        axios.post('http://localhost:7000/services/blog/delete', data1)
    }

    useEffect(() => {
        const id = window.location.pathname.split("singlepost/")[1] 
        axios.get(`http://localhost:7000/services/blog/getbyID/${id}`)
        .then((res) => {
            setData(res.data[0]);
            console.log(res.data[0])
        })
        .catch((err) => {
            console.log(err.message)
        })
    },[])

    return ( 
    <React.Fragment>
        {data && <div className="row singlepost">
            <div className="col-12 title">{data.title}</div>
            <div className="desc col-12">
                <div className="col-6 tags">{data.tags}</div>
                <div className="col-6 name_">By : {data.name}</div>
            </div>
            <div className="col-12 msg-del">
                <div className="col-12 msg">{data.message}</div>
                <div className="btn delete" onClick={handleDelete}>Delete</div>
            </div>
        </div>}
    </React.Fragment>
    );
}
 
export default IndPost;