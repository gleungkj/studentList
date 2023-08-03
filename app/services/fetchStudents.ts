import { StudentDTO } from "types/students"
import { getAllStudents } from "./getAllStudents"
import { ApiDataType } from "types"
import { AxiosResponse } from "axios"


export const fetchStudents = async (setStudentList: React.Dispatch<React.SetStateAction<StudentDTO[]>>): Promise<void> => {

    const studentList = await getAllStudents()
    setStudentList([...studentList.data as unknown as StudentDTO[]])

  }