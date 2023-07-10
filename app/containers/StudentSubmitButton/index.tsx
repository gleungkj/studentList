import React, { useCallback } from "react";
import { addOneStudent } from "services/addOneStudent";
import { StudentDTO, studentDTOProps } from "types/students";

// add onsubmit logic here

const handleSubmit = (student: StudentDTO) => {
    return useCallback(() => {
        addOneStudent(student)
    },[addOneStudent, student])
}

export const StudentSubmitButton: React.FC<studentDTOProps> = ({studentList}): JSX.Element => {
    return (
        <button onSubmit={handleSubmit(studentList)}>
            Submit
        </button>
    )
}