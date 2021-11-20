import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer } from 'react-toastify'
import '../../../node_modules/react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import './form.css';
import bck_post from '../../Assets/bck_post.png'

const Form = () => {

    const [name, setName] = useState('')
    const [tags, setTags] = useState('')
    const [message, setMessage] = useState('')
    const [title, setTitle] = useState('')

    const handleChange = (e) => {
        const field = e.currentTarget.name;
        if(field == 'name')setName(e.currentTarget.value)
        if(field == 'tags')setTags(e.currentTarget.value)
        if(field == 'message')setMessage(e.currentTarget.value)
        if(field == 'title')setTitle(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(name.length == 0 || tags.length == 0 || message.length == 0 || title.length == 0)toast(`Please fill all feilds!`);
        else{
            const data = {
                name : name,
                message : message,
                title : title,
                tags : tags,
            };

            console.log(data)

            //routes
            axios.post('http://localhost:7000/services/blog/add' ,data)
            .then((res) => {
                toast(`Your blog is added`);
                setName('');
                setMessage('');
                setTitle('');
                setTags('');
            })
            .catch((error) => {
                toast(`Failed please try again`);
                console.log(error);
            })
        }
    }

    return ( 
        <React.Fragment>
            <ToastContainer></ToastContainer>
            <div className="container-fluid post_page">
                <div className="row post_wrapper">

                    <div className="col-12 col-sm-12 col-lg-6 form-start">
                        <div className="col-12 form-input-post">
                            <div class="form-group">
                                <label for="name" className="feild_label">Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Your name" value={name} onChange={handleChange} name="name"/>
                            </div>
                        </div>

                        <div className="col-12 form-input-post">
                            <div class="form-group">
                                <label for="title" className="feild_label">Title</label>
                                <input type="text" value={title} class="form-control" id="title" onChange={handleChange} name="title"/>
                            </div>
                        </div>

                        <div className="col-12 form-input-post">
                            <div class="form-group">
                                <label for="tags" className="feild_label">Tags</label>
                                <input type="tags" value={tags} class="form-control" id="tags" placeholder="Enter tags"  onChange={handleChange} name="tags"/>
                                
                            </div>
                        </div>

                        <div className="col-12 form-input-post">
                            <div class="form-group">
                                <label for="message" className="feild_label">Blog Content</label>
                                <textarea rows={10} type="text" value={message} class="form-control" id="message" aria-describedby="phoneHelp" placeholder="content"  onChange={handleChange} name="message"/>
                            </div>
                        </div>
                        

                        <div className="col-12 form-input-post">
                            <button className="col-12 btn send_btn" onClick={handleSubmit} style={{marginTop:"10px"}}>Add my post</button>
                        </div>
                    </div>

                    <div className="col-6">
                        <img src={bck_post} className="post_pic"/>
                    </div>
                </div>


                </div>
        </React.Fragment>
     );
}
 
export default Form;