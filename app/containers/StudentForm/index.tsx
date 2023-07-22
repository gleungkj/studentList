import React from "react";
import './index.css';
import { Field, Form, Formik } from "formik";
import { StudentDTO } from "types/students";
import { addOneStudent } from "services/addOneStudent";
import { initialValues } from "./const";

export const StudentForm: React.FC = (): JSX.Element => {
    return (
        <Formik initialValues={initialValues} 
        
        // placeholder onSubmit function
            onSubmit={async (values: StudentDTO, { setSubmitting }): Promise<void|Error> => {
                const newStudentDTO: StudentDTO = {
                    first_name: values.first_name,
                    last_name: values.last_name,
                    email: values.email,
                    age: values.age,
                    grade: values.grade,
                    id: Math.random()
                }

                try {
                    addOneStudent(newStudentDTO)
                } catch {
                    return new Error
                }

                // got form as studentDTO, so send this via handleSubmit
                setSubmitting(false)}}>

            <Form id="studentForm">
            <Field name='first_name' placeholder='First Name' required='true' type='text'/>
            <Field name='last_name' placeholder='Last Name' required='true' type='text'/>
            <Field name='email' placeholder='Email' type='email'/>
            <Field name='age' placeholder='Age' type='number'/>
            <Field name='grade' placeholder='Grade' type='number'/>
            <button type='submit'>
                Submit
            </button>    
            </Form>                
            
        </Formik>        
    )
}