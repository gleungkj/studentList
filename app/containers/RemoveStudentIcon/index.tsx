import React from 'react';
import { StudentDTO, studentDTOProps } from 'types/students'
import { BsFillTrashFill } from 'react-icons/bs'
import { deleteStudentById } from 'services/deleteStudentById';

export const RemoveStudentIcon: React.FC<studentDTOProps> = ({studentList}): JSX.Element => {

  const handleOnClick = (student: StudentDTO): void => {
    deleteStudentById(student)
  }

  return (
  <button type='button' onClick={() => handleOnClick(studentList)}>
    <BsFillTrashFill />
  </button>)
}