import React from 'react';
import { StudentDTO, studentDTOProps } from 'types/students'
import { BsFillTrashFill } from 'react-icons/bs'
import { RemoveStudentIcon } from 'containers/RemoveStudentIcon';

interface StudentRowProps {
  student: StudentDTO
  setStudentList: React.Dispatch<React.SetStateAction<StudentDTO[]>>
}

export const StudentRow: React.FC<StudentRowProps> = ({
  student, setStudentList
}): JSX.Element => {
  return (
    <tr id={`studentRow-${student.id}`}>
      <td>{student.first_name}</td>
      <td>{student.last_name}</td>
      <td>{student.email}</td>
      <td>{student.age}</td>
      <td>{student.grade}</td>
      <td><RemoveStudentIcon student={student} setStudentList={setStudentList}/></td>
    </tr>
  );
};
