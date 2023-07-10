import React from "react";
import { StudentDTO, studentDTOProps } from "types/students";


export const StudentRow: React.FC<studentDTOProps> = ({studentList}): JSX.Element => {
    return (
        <tr id={`studentRow-${studentList.id}`}>
            <td>
            {studentList.first_name}
            </td>
            <td>
            {studentList.last_name}
            </td>
            <td>
            {studentList.email}
            </td>
            <td>
            {studentList.age}
            </td>
            <td>
            {studentList.grade}
            </td>
        </tr>
    )
}