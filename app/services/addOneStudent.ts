import axios, { AxiosRequestConfig } from "axios";
import { StudentDTO } from "types/students";

export const addOneStudent = async (studentList: StudentDTO) : Promise<void> => {
    try {
        await axios({
            method: 'post',
            url: `http://localhost:3000/studentList`,
            data: {
                studentList
            }
        } as AxiosRequestConfig)
    } catch (error) {
        throw new Error(error as unknown as string)
    }
}