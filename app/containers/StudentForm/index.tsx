import React from "react";
import './index.css';
import { StudentSubmitButton } from "containers/StudentSubmitButton";
import { Form, Formik } from "formik";

export const StudentForm: React.FC = (): JSX.Element => {
    return (
        <Formik initialValues={{
            firstName: 'First Name',
            lastName: 'Last Name',
            email: 'Email',
            age: 'Age',
            grade: 'Grade'        
        }} 
        
        
        // placeholder onSubmit function
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400)}}>            
            <button type='submit'>
                Submit
            </button>
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