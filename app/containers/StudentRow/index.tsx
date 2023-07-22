import React from 'react';
import { studentDTOProps } from 'types/students';
import { TrashIcon } from '@heroicons/react/24/solid'
import { BsFillTrashFill } from 'react-icons/bs'

export const StudentRow: React.FC<studentDTOProps> = ({
  studentList,
}): JSX.Element => {
  return (
    <tr id={`studentRow-${studentList.id}`}>
      <td>{studentList.first_name}</td>
      <td>{studentList.last_name}</td>
      <td>{studentList.email}</td>
      <td>{studentList.age}</td>
      <td>{studentList.grade}</td>
      <td><BsFillTrashFill /></td>
    </tr>
  );
};
