import React, { useState } from 'react';
import { Formik, Form,Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import  { Button } from 'react-bootstrap';
import { ToastContainer,toast } from 'react-toastify'
import "./examrequestform.css"
import { addExamRequestForm } from '../../services/api';
const CreateExamequestFormSchema = Yup.object().shape({
    examineeName: Yup.string().required('Fullname is required'),
    examName: Yup.string().required('Exam name is Required'),
    examineeAge: Yup.number().required('Examinee`s age is Required'),
    examCityName: Yup.string().required('Exam city is Required'),
    examDate: Yup.date().required('Exam date is Required'),
    examTime: Yup.string().required('Exam time is Required'),
    examVenue: Yup.string().required('Exam venue is Required'),
    examDuration: Yup.number().required('Exam duration is Required'),
    examineeAddress: Yup.string().required('Examinee`s address is Required'),

});


const ExamRequestForm = () => {
    const [examRequest, setExamRequest] = useState({
        examineeName: '',
        examName: '',
        examineeAge: '',
        examCityName: '',
        examDate: '',
        examTime: '',
        examVenue: '',
        examDuration: '',
        examineeAddress: '',
    });
    const handleSubmit = (values,{resetForm}) => {
        console.log(values);
        addExamRequestForm(values)
        resetForm();
        setExamRequest({
            examineeName: '',
            examName: '',
            examineeAge: '',
            examCityName: '',
            examDate: '',
            examTime: '',
            examVenue: '',
            examDuration: '',
            examineeAddress: '',
        })
        toast(`Exam Details Submitted Successfully`)
    }
    return (
       <div className="examrequestform-container">
            <div className="examrequestform-container-inner">
                <ToastContainer></ToastContainer>
                <h1 className="examrequestform-head">Find your exam companion here</h1>
                <div className="examrequestform">
                    <Formik
                        initialValues={examRequest}
                        validationSchema={CreateExamequestFormSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form className="exam-request-form">
                                <div className="form-group">
                                    <label htmlFor="examineeName">Fullname</label>
                                    <Field name="examineeName" type="text" className={`form-control ${errors.examineeName && touched.examineeName ? 'is-invalid' : ''}`} />
                                    < ErrorMessage name = "examineeName" component = "div" className = "invalid-feedback" / >
                                </div>
                                <div className="form-group">
                                    <label htmlFor="examName">Exam Name</label>
                                    <Field name="examName" type="text" className={`form-control ${errors.examName && touched.examName ? 'is-invalid' : ''}`} />
                                    <ErrorMessage name="examName"  component="div" className="invalid-feedback"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="examineeAge">Examinee`s Age</label>
                                    <Field name="examineeAge" type="text" className={`form-control ${errors.examineeAge && touched.examineeAge ? 'is-invalid' : ''}`} />
                                    <ErrorMessage name="examineeAge"  component="div"
                                        className="invalid-feedback" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="examCityName">Exam City</label>
                                    <Field name="examCityName" type="text" className={`form-control ${errors.examCityName && touched.examCityName ? 'is-invalid' : ''}`} />
                                    <ErrorMessage name="examCityName"  component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="examDate">Exam Date</label>
                                    <Field name="examDate" type="date" className={`form-control ${errors.examDate && touched.examDate ? 'is-invalid' : ''}`} />
                                    <ErrorMessage name="examDate"  component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="examTime">Exam Time</label>
                                    <Field name="examTime" type="text" className={`form-control ${errors.examTime && touched.examTime ? 'is-invalid' : ''}`} />
                                    <ErrorMessage name="examTime"  component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="examVenue">Exam Venue</label>
                                    <Field name="examVenue" type="text" className={`form-control ${errors.examVenue && touched.examVenue ? 'is-invalid' : ''}`} />
                                    <ErrorMessage name="examVenue"  component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="examDuration">Exam Duration</label>
                                    <Field name="examDuration" type="text" className={`form-control ${errors.examDuration && touched.examDuration ? 'is-invalid' : ''}`} />
                                    <ErrorMessage name="examDuration"  component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="examineeAddress">Examinee`s Address</label>

                                    <Field name="examineeAddress" type="text" className={`form-control ${errors.examineeAddress && touched.examineeAddress ? 'is-invalid' : ''}`} />
                                    <ErrorMessage name="examineeAddress"  component="div" className="invalid-feedback" />
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

export default ExamRequestForm;

