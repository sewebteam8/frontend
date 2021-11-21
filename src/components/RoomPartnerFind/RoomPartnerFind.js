import React from "react";
import { Link } from "react-router-dom";
import { useFormik} from "formik";
import * as Yup from 'yup'
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
    const initialValues = {
        name: "",
        email: "",
        city: "",
        age: "",
        presentaddress: "",
        phonenumber: "",
        duration: "",
        roomtype: "",
    }
    const { handleSubmit, handleChange, handleBlur, values, errors } = useFormik({
        initialValues, RoomPartnerFindSchema, onSubmit(values) {
            console.log(values);
            initialValues.name = "";
            initialValues.email = "";
            initialValues.city = "";
            initialValues.age = "";
            initialValues.presentaddress = "";
            initialValues.phonenumber = "";
            initialValues.duration = "";
            initialValues.roomtype = "";

        }
    });
    return (
        <div className="roompartnerfind-container">
            <div className="roompartnerfind-container-inner">
                <h1 className="roompartnerfind-head">Find Your Roompartner here</h1>
                <div className="roompartnerfind-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Fullname</label>
                            <input type="text" className="form-control" id="name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                            {errors.name && <div className="error">{errors.name}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                            {errors.email && <div className="error">{errors.email}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City where you want find room partner</label>
                            <input type="text" className="form-control" id="city" name="city" value={values.city} onChange={handleChange} onBlur={handleBlur} />
                            {errors.city && <div className="error">{errors.city}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input type="number" className="form-control" id="age" name="age" value={values.age} onChange={handleChange} onBlur={handleBlur} />
                            {errors.age && <div className="error">{errors.age}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="presentaddress">Present Address</label>
                            <input type="text" className="form-control" id="presentaddress" name="presentaddress" value={values.presentaddress} onChange={handleChange} onBlur={handleBlur} />
                            {errors.presentaddress && <div className="error">{errors.presentaddress}</div>}
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
                            <label htmlFor="roomtype">Room Type</label>
                            <input type="text" className="form-control" id="roomtype" name="roomtype" value={values.roomtype} onChange={handleChange} onBlur={handleBlur} />
                            {errors.roomtype && <div className="error">{errors.roomtype}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
        
};

export default RoomPartnerFind;

    