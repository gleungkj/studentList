/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
// import students from './students';
import { StudentDTO } from 'types/students';
import { getAllStudents } from 'services/getAllStudents';
import { AxiosResponse } from 'axios';
import { ApiDataType } from 'types';
import { StudentTable } from 'containers/StudentTable';
import { StudentForm } from 'containers/StudentForm';
import './index.css'
import { fetchStudents } from 'services/fetchStudents';

export default function HomePage() {

  const [loading, setLoading] = useState(true)
  const [studentList, setStudentList] = useState<StudentDTO[]>([])
 

  useEffect(() => {
    fetchStudents(setStudentList)
    setLoading(false)
    
  }, [])

  

  console.log(studentList)
  // create table component and pass students INTO it

  return (
    loading ? 
    <div>Loading...</div> :
    <div id='studentContainer'>
      <StudentTable studentList={studentList} setStudentList={setStudentList}/>
      <StudentForm setStudentList={setStudentList}/>
    </div>   
    // <h1>
    //         {/* <FormattedMessage {...messages.header} /> */}
    // </h1>
  );
}
