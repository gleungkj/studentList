import { StudentRow } from 'containers/StudentRow';
import React from 'react';
import { StudentDTO } from 'types/students';

interface StudentDTOProps {
  studentList: StudentDTO[];
  setStudentList: React.Dispatch<React.SetStateAction<StudentDTO[]>>
}

export const StudentTable: React.FC<StudentDTOProps> = ({
  studentList,
  setStudentList
}): JSX.Element => {
  return (
    <table id="studentTable">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Grade</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {studentList.map(student => (
          <StudentRow student={student} setStudentList={setStudentList}/>
        ))}
      </tbody>
    </table>
  );
};
