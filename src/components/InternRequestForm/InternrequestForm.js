import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./InternRequestForm.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addInternRequestForm } from "../../services/api";
import { ToastContainer,toast } from 'react-toastify'
const InternRequestFormSchema = Yup.object().shape({
    name: Yup.string().required("fullename is rquired"),
    email: Yup.string().email("inavallid email").required('email is required'),
    mode: Yup.string().required('mode is required'),
    city: Yup.string(),
    desc: Yup.string().required('description is required'),
    phonenumber: Yup.string().required('phonenumber is required'),
    duration: Yup.string().required('duration is required'),
    technologies: Yup.string().required('technologies is required'),
    stipend: Yup.string(),
});
const InternRequestForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mode: "",
        city: "",
        desc: "",
        phonenumber: "",
        duration: "",
        technologies: "",
        stipend: "",
    });
    const handleSubmit = (values,{resetForm}) => {
        console.log(values);
        addInternRequestForm(values);
        resetForm();
        toast("Internship Request form Submitted Successfully")
    };
    return (
        <div className="internrequestform-container">
            <div className="internrequestform-container-inner">
                
                        <ToastContainer></ToastContainer>
                            <h4 className="internrequestform-head">Internship Request Form</h4>
                        
                        <div className="internrequestform">
                            <Formik
                                initialValues={formData}
                                validationSchema={InternRequestFormSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ errors, touched }) => (
                                    <Form className="intern-request-form">
                                        
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name</label>
                                            <Field name="name" type="text" className={`form-control ${errors.name && touched.name && "is-invalid"}`} />
                                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <Field name="email" type="email" className={`form-control ${errors.email && touched.email && "is-invalid"}`} />
                                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="mode">Mode</label>
                                            <Field name="mode" type="text" className={`form-control ${errors.mode && touched.mode && "is-invalid"}`} />
                                            <ErrorMessage name="mode" component="div" className="invalid-feedback" />
                                    
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="city">City</label>
                                            <Field name="city" type="text" className={`form-control ${errors.city && touched.city && "is-invalid"}`} />
                                            <ErrorMessage name="city" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="desc">Description</label>
                                            <Field name="desc" type="textarea" className={`form-control ${errors.desc && touched.desc && "is-invalid"}`} />
                                            <ErrorMessage name="desc" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phonenumber">Phone Number</label>
                                            <Field name="phonenumber" type="text" className={`form-control ${errors.phonenumber && touched.phonenumber && "is-invalid"}`} />
                                            <ErrorMessage name="phonenumber" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="duration">Duration</label>
                                            <Field name="duration" type="text" className={`form-control ${errors.duration && touched.duration && "is-invalid"}`} />
                                            <ErrorMessage name="duration" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="technologies">Technologies</label>
                                            <Field name="technologies" type="text" className={`form-control ${errors.technologies && touched.technologies && "is-invalid"}`} />
                                            <ErrorMessage name="technologies" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="stipend">Stipend</label>
                                            <Field name="stipend" type="text" className={`form-control ${errors.stipend && touched.stipend && "is-invalid"}`} />
                                            <ErrorMessage name="stipend" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary">
                                                Submit
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
           
    );
};
export default InternRequestForm;