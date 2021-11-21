import React, { useState } from 'react';
import { Formik, Form,Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import  { Button } from 'react-bootstrap';

import "./examrequestform.css"

const CreateExamequestFormSchema = Yup.object().shape({
    examineeName: Yup.string().required('Fullname is required'),
    examName: Yup.string().required('Exam name is Required'),
    examineeAge: Yup.number().required('Examinee`s age is Required'),
    examCityName: Yup.string().required('Exam city is Required'),
    examDate: Yup.date().required('Exam date is Required'),
    examTime: Yup.string().required('Exam time is Required'),
    examVenue: Yup.string().required('Exam venue is Required'),
    examDuration: Yup.string().required('Exam duration is Required'),
    examineeAddress: Yup.string().required('Examinee`s address is Required'),

});


const ExamRequestForm = () => {
    const [initialValue, setInitialValue] = useState({
        examineeName: "",
        examName: "",
        examCityName: "",
        examineeAge: "",
        examDate: "",
        examineeAddress: "",
    
    });

    // const handleSubmit = (data) => {
    //     alert(JSON.stringify(data));
    //     console.log(JSON.stringify(data, null, 2));

    // }
   
    

    return (
        <div className="examrequestform-container">
            <div className="examrequestform-container-inner" >
               <h1 className="examrequestform-head">Find Your Exam Buddy</h1> 
                 <Formik
                    initialValues={initialValue}
                    // enableReinitialize={true}
                    validationSchema={CreateExamequestFormSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        console.log(values);
                    }}
            >
                {({resetForm }) => {
                    return (
                        <div className="createQuestionsForm scrollableFormWrapper">
                            <Form>
                                <div className="row">

                                <div className="col-5">
                                    <div className="form-group">
                                            <label>Full Name</label>
                                            <Field name="examineeName" type="text" className="form-control" />
                                            <ErrorMessage
                                            name="examineeName"
                                            component="div"
                                            className="text-danger"
                                            />
                                        </div>
    
                                    </div>
                                    <div className="col-2"></div>
                                    <div className="col-5">
                                    <div className="form-group">
                                            <label>Enter Age</label>
                                            <Field name="examineeAge" type="number" className="form-control" />
                                            <ErrorMessage
                                            name="examineeAge"
                                            component="div"
                                            className="text-danger"
                                            />
                                        </div>
    
                                    </div>

                                    <div className="col-5">
                                    <div className="form-group">
                                            <label>Enter Your full Adreess</label>
                                            <Field name="examineeAddress" type="text" className="form-control" />
                                            <ErrorMessage
                                            name ="examineeAddress"
                                            component="div"
                                            className="text-danger"
                                            />
                                        </div>
    
                                    </div>
                                    <div className="col-2"></div>
                                    <div className="col-5">
                                    <div className="form-group">
                                            <label>Enter Exam Name</label>
                                            <Field name="examName" type="text" className="form-control" />
                                            <ErrorMessage
                                            name="examName"
                                            component="div"
                                            className="text-danger"
                                            />
                                        </div>
    
                                    </div>
                                    
                                    <div className="col-5">
                                    <div className="form-group">
                                            <label>Enter Exam city Name</label>
                                            <Field name="examCityName" type="text" className="form-control" />
                                            <ErrorMessage
                                            name ="examCityName"
                                            component="div"
                                            className="text-danger"
                                            />
                                        </div>
    
                                    </div>
                                    <div className="col-2"></div>
                                    <div className="col-5">
                                    <div className="form-group">
                                            <label>Enter Exam Date</label>
                                            <Field name="examDate" type="text" className="form-control" />
                                            <ErrorMessage
                                            name="examDate"
                                            component="div"
                                            className="text-danger"
                                            />
                                        </div>
    
                                </div>


                                </div>

                                <div className="floating-btn-grp ">
                                    <button type="button" onClick={resetForm} className="button-container">
                                        Submit 
                                    </button>
                                </div>
                            
                            </Form>
                        </div>
                    )
                }}
                </Formik>
            </div>
       
            </div>
    )

}

export default ExamRequestForm;

