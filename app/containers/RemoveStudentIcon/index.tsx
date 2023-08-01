import React from 'react';
import { StudentDTO, studentDTOProps } from 'types/students'
import { BsFillTrashFill } from 'react-icons/bs'
import { deleteStudentById } from 'services/deleteStudentById';
import { fetchStudents } from 'services/fetchStudents';

interface RemoveStudentProps {
  student: StudentDTO
  setStudentList: React.Dispatch<React.SetStateAction<StudentDTO[]>>
}

export const RemoveStudentIcon: React.FC<RemoveStudentProps> = ({student, setStudentList}): JSX.Element => {

  const handleOnClick = (student: StudentDTO): void => {
    deleteStudentById(student)
    fetchStudents(setStudentList)
  }

  return (
  <button type='button' onClick={() => handleOnClick(student)}>
    <BsFillTrashFill />
  </button>)
}