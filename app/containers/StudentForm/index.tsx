import React from "react";
import './index.css';
import { StudentSubmitButton } from "containers/StudentSubmitButton";

export const StudentForm: React.FC = (): JSX.Element => {
    return (
        <table id='studentForm'>            
            <input placeholder="First Name" />          
            <input placeholder="Last Name" />            
            <input placeholder="Email" />
            <input placeholder="Age" />
            <input placeholder="Grade" />
            <StudentSubmitButton />
        </table>
        
    )
}