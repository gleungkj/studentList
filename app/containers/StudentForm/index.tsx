import React from "react";
import './index.css';
import { StudentSubmitButton } from "containers/StudentSubmitButton";
import { Field, Form, Formik } from "formik";

export const StudentForm: React.FC = (): JSX.Element => {
    return (
        <Formik initialValues={{}} 
        
        
        // placeholder onSubmit function
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400)}}>

            <Form id="studentForm">
            <Field name='firstName' placeholder='First Name' required='true' type='text'/>
            <Field name='lastName' placeholder='Last Name' required='true' type='text'/>
            <Field name='email' placeholder='Email' type='email'/>
            <Field name='age' placeholder='Age' type='number'/>
            <Field name='grade' placeholder='Grade' type='number'/>
            <button type='submit'>
                Submit
            </button>    
            </Form>                
            
        </Formik>
        // <table id='studentForm'>            
        //     <input placeholder="First Name" />          
        //     <input placeholder="Last Name" />            
        //     <input placeholder="Email" />
        //     <input placeholder="Age" />
        //     <input placeholder="Grade" />
        //     <StudentSubmitButton studentList={}/>
        // </table>
        
    )
}