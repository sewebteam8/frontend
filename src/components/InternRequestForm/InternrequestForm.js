import React from "react";
import { Link } from "react-router-dom";
import "./InternRequestForm.css";
import * as Yup from "yup";
import { useFormik } from "formik";
const InternRequestFormSchema = Yup.object().shape({
    name: Yup.string().required("fullename is rquired"),
    email: Yup.string().email("inavallid email").required('email is required'),
    mode: Yup.string().required('mode is required'),
    city: Yup.string(),
    desc: Yup.string().required('description is required'),
    phonenumber: Yup.string().required('phonenumber is required'),
    duration: Yup.string().required('duration is required'),
    technologies: Yup.string().required('technologies is required'),
    stipend: Yup.string,
});
const InternRequestForm = () => {
    const initialValues = {
        name: "",
        email: "",
        mode: "",
        city: "",
        desc: "",
        phonenumber: "",
        duration: "",
        technologies: "",
        stipend: "",
    };
    const { handleSubmit, handleChange, handleBlur, values, errors } = useFormik({
        initialValues, InternRequestFormSchema, onSubmit(values) {
            console.log(values);
            initialValues.name = "";
            initialValues.email = "";
            initialValues.mode = "";
            initialValues.city = "";
            initialValues.desc = "";
            initialValues.phonenumber = "";
            initialValues.duration = "";
            initialValues.technologies = "";
            initialValues.stipend = "";
        }
    });
    return (
        <div className="internrequestform-container">
            <div className="internrequestform-container-inner">
                <h1 className="internrequestform-head">Find suitable intern here</h1>
                <div className="internrequestform-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">FullName</label>
                            <input type="text" className="form-control" id="name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                            {errors.name && <div className="error">{errors.name}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                            {errors.email && <div className="error">{errors.email}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="mode">Mode</label>
                            <select className="form-control" id="mode" name="mode" value={values.mode} onChange={handleChange} onBlur={handleBlur}>
                                <option value="">Select Mode</option>
                                <option value="fulltime">Fulltime</option>
                                <option value="parttime">Parttime</option>
                            </select>
                            {errors.mode && <div className="error">{errors.mode}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" className="form-control" id="city" name="city" value={values.city} onChange={handleChange} onBlur={handleBlur} />
                            {errors.city && <div className="error">{errors.city}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="desc">Description about internship</label>
                            <textarea className="form-control" id="desc" name="desc" value={values.desc} onChange={handleChange} onBlur={handleBlur} rows="6" />
                            {errors.desc && <div className="error">{errors.desc}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phonenumber">Phone Number</label>
                            <input type="text" className="form-control" id="phonenumber" name="phonenumber" value={values.phonenumber} onChange={handleChange} onBlur={handleBlur} />
                            {errors.phonenumber && <div className="error">{errors.phonenumber}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="duration">Duration</label>
                            <input type="text" className="form-control" id="duration" name="duration" value={values.duration} onChange={handleChange} onBlur={handleBlur} />
                            {errors.duration && <div className="error">{errors.duration}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="technologies">What Technologies you will use</label>
                            <input type="text" className="form-control" id="technologies" name="technologies" value={values.technologies} onChange={handleChange} onBlur={handleBlur} />
                            {errors.technologies && <div className="error">{errors.technologies}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="stipend">Stipend</label>
                            <input type="text" className="form-control" id="stipend" name="stipend" value={values.stipend} onChange={handleChange} onBlur={handleBlur} />
                            {errors.stipend && <div className="error">{errors.stipend}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default InternRequestForm;