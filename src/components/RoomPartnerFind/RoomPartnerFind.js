import React, { useState } from 'react';
import { Formik, Form,Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import  { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify'
import { addFindRoomPartner } from '../../services/api';
import "./RoomPartnerFind.css";
const RoomPartnerFindSchema = Yup.object().shape({
    name: Yup.string().required('Fullname is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    city: Yup.string().required('City is required'),
    age: Yup.number().required('Age is required'),
    presentaddress: Yup.string().required('Address is required'),
    phonenumber: Yup.string().required('Phone number is required'),
    duration: Yup.string().required('Duration is required'),
    roomtype: Yup.string().required('Room type is required'),
});

const RoomPartnerFind = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        city: '',
        age: '',
        presentaddress: '',
        phonenumber: '',
        duration: '',
        roomtype: '',
    });
    const handleSubmit = (values,{resetForm}) => {
        console.log(values);
        addFindRoomPartner(values)
        toast("Your form submitted successfully")
        resetForm();
    }
    return (
       < div className = "roompartnerfind-container" >
            <div className="roompartnerfind-container-inner">
                <ToastContainer></ToastContainer>
                <h1 className="roompartnerfind-head">Find your exam companion here</h1>
                <div className="roompartnerfindform">
                    <Formik
                        initialValues={formData}
                        validationSchema={RoomPartnerFindSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form className="exam-request-form">
                                <div className="form-group">
                                    <label htmlFor="name">Fullname</label>
                                    <Field name="name" type="text" className={`form-control ${errors.name && touched.name ? 'is-invalid' : ''}`} />
                                    <ErrorMessage name = "name" component = "div" className = "invalid-feedback" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <Field name="email" type="text" className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`} />
                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city">City</label>
                                    <Field name="city" type="text" className={`form-control ${errors.city && touched.city ? 'is-invalid' : ''}`} />
                                    <ErrorMessage name="city" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="age">Age</label>
                                    <Field name="age" type="text" className={`form-control ${errors.age && touched.age ? 'is-invalid' : ''}`} />
                                    <ErrorMessage name="age" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="presentaddress">Present Address</label>
                                    <Field name="presentaddress" type="text" className={`form-control ${errors.presentaddress && touched.presentaddress ? 'is-invalid' : ''}`} />
                                    <ErrorMessage name="presentaddress" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phonenumber">Phone Number</label>
                                    <Field name="phonenumber" type="text" className={`form-control ${errors.phonenumber && touched.phonenumber ? 'is-invalid' : ''}`} />
                                    <ErrorMessage name="phonenumber" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="duration">Duration</label>
                                    <Field name="duration" type="text" className={`form-control ${errors.duration && touched.duration ? 'is-invalid' : ''}`} />
                                    <ErrorMessage name="duration" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="roomtype">Room Type</label>
                                    <Field name="roomtype" type="text" className={`form-control ${errors.roomtype && touched.roomtype ? 'is-invalid' : ''}`} />
                                    <ErrorMessage name="roomtype" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>   
        </div>
    );
                    

}

export default RoomPartnerFind;


    