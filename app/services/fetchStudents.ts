import { StudentDTO } from "types/students"
import { getAllStudents } from "./getAllStudents"
import { ApiDataType } from "types"
import { AxiosResponse } from "axios"


export const fetchStudents = (setStudentList: React.Dispatch<React.SetStateAction<StudentDTO[]>>): void => {
    getAllStudents().then((data: AxiosResponse<ApiDataType>) => setStudentList([...data.data as unknown as StudentDTO[]]))
  }