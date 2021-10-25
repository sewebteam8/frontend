import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer } from 'react-toastify'
import '../../../node_modules/react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import contactUS from '../../Assets/contactusImg.png'
import FAQ from '../../Assets/faq.png'
import './contact.css';

const Contact = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')
    const [sub, setSub] = useState('')

    const [ans1, setans1] = useState(false);
    const [ans2, setans2] = useState(false);
    const [ans3, setans3] = useState(false);
    const [ans4, setans4] = useState(false);

    const handleq1 = () => {setans1(!ans1)}
    const handleq2 = () => {setans2(!ans2)}
    const handleq3 = () => {setans3(!ans3)}
    const handleq4 = () => {setans4(!ans4)}

    const handleChange = (e) => {
        const field = e.currentTarget.name;
        if(field == 'name')setName(e.currentTarget.value)
        if(field == 'email')setEmail(e.currentTarget.value)
        if(field == 'phone')setPhone(e.currentTarget.value)
        if(field == 'sub')setSub(e.currentTarget.value)
        if(field == 'msg')setMsg(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(name.length == 0 || email.length == 0 || phone.length == 0 || msg.length == 0 || sub.length == 0)toast(`Please fill all details!`);
        else{
            const data = {
                name_ : name,
                email_ : email,
                phone_ : phone,
                sub_ : sub,
                msg_ : msg,
            };

            
            axios.post('https://se-web-app.herokuapp.com/services/enqMail' ,data)
            .then((res) => {
                toast(`you will be contacted soon`);
                setName('');
                setEmail('');
                setPhone('');
                setSub('');
                setMsg('');
            })
            .catch((error) => {
                toast(`enquiry failed please try again`);
                console.log(error);
            })
        }
    }

    return ( 
        <React.Fragment>
            <ToastContainer></ToastContainer>
            <div className="container-fluid contact_page">
                <div className="row contact_wrapper">
                    <div className="col-12">
                        <p className="head1cu">Contact Us</p>
                        <p className="head2cu">Please feel free to reach us!!!</p>
                    </div>
                    
                    <div className="col-12 col-sm-6 col-lg-4 Contactdetails">
                        <p className="contactHead">Reach us at : </p>
                        <p>Email : EnquiryCollab@gmail.com</p>
                        <p>Email : or InfoCollab@gmail.com</p>
                        <p>Phone No: 9999999999, 9999999999</p>

                        <div className="col-12 form-input-contact">
                            <img src={FAQ} className="faq_pic"/>
                        </div>
                    </div>


                    <div className="col-12 col-sm-6 col-lg-4 Contactdetails">
                        <div className="col-12 form-input-contact">
                            <img src={contactUS} className="contact_pic"/>
                        </div>
                        <p className="admhead">Also you can Contribute :</p>
                        <p>Contact us for any querry and also help us to imporve the service. Also if you feel like contributing to the site you are welcome to check the official repository here : "link to repo"</p>
                    </div>

                    <div className="col-12 col-sm-12 col-lg-4 form-start">
                        <div className="col-12 form-input-contact">
                            <div class="form-group">
                                <label for="name_" className="feild_label">Name</label>
                                <input type="text" class="form-control" id="name_" placeholder="Your name"  onChange={handleChange} name="name"/>
                            </div>
                        </div>

                        <div className="col-12 form-input-contact">
                            <div class="form-group">
                                <label for="email" className="feild_label">Email address</label>
                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"  onChange={handleChange} name="email"/>
                                <small id="emailHelp" class="form-text text-muted">You will be contacted on the same email*</small>
                            </div>
                        </div>

                        <div className="col-12 form-input-contact">
                            <div class="form-group">
                                <label for="phoneno" className="feild_label">Phone No.</label>
                                <input type="text" class="form-control" id="phoneno" aria-describedby="phoneHelp" placeholder="Enter phone no"  onChange={handleChange} name="phone"/>
                                <small id="phoneHelp" class="form-text text-muted">You will be contacted on the same phone no.*</small>
                            </div>
                        </div>

                        <div className="col-12 form-input-contact">
                            <div class="form-group">
                                <label for="sub" className="feild_label">Doubt regarding</label>
                                <input type="text" class="form-control" id="sub" onChange={handleChange} name="sub"/>
                            </div>
                        </div>
                        
                        <div className="col-12 form-input-contact">
                            <div class="form-group">
                                <label for="msg_" className="feild_label">Message/Doubt</label>
                                <textarea type="text" class="form-control" id="msg_" rows="5" onChange={handleChange} name="msg"/>
                            </div>
                        </div>

                        <div className="col-12 form-input-contact">
                            <button className="col-12 btn send_btn" onClick={handleSubmit} style={{marginTop:"10px"}}>Send</button>
                        </div>

                        
                    </div>
                </div>


                <div className="row contact_wrapper2">
                    <div className="col-12 col-lg-8">
                        <p className="faq_wrapper">Frequenlty Asked Questions (FAQ)</p>
                        <div>
                            <p onClick={handleq1} className="questions">What benefits you will get?
                            {!ans1 && <span className="switch"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                          </svg></span>}
                            {ans1 && <span className="switch"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                          </svg></span>}
                            </p>
                            { ans1 && <p className="answers">All students will able to see the different functions if different colleges and institutions,like how they operate semesters,courses,fest and all.
                            </p>}

                            <p onClick={handleq2} className="questions">How it works?
                            {!ans2 && <span className="switch"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                          </svg></span>}
                            {ans2 && <span className="switch"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                          </svg></span>}
                            </p>
                            {ans2 && <p className="answers">Well all the students will create there ID and will provide/post  anything which will be beneficial of other students or atleast students with similar background.
                            </p>}

                            <p onClick={handleq3} className="questions">What if i stuck somewhere ?
                            {!ans3 && <span className="switch"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                          </svg></span>}
                            {ans3 && <span className="switch"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                          </svg></span>}
                            </p>
                            { ans3 && <p className="answers">We have created a help section where you can easily find basic queries.
                            </p>}

                            <p onClick={handleq4} className="questions">Please give the content Gwalia!
                            {!ans4 && <span className="switch"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                          </svg></span>}
                            {ans4 && <span className="switch"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                          </svg></span>}
                            </p>
                            { ans4 && <p className="answers">idk
                            </p>}
                        </div>
                        
                    </div>
                </div>
                </div>
        </React.Fragment>
     );
}
 
export default Contact;