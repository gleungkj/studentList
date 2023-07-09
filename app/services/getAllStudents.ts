import axios, { AxiosResponse } from "axios";
import { ApiDataType } from "types";

export const getAllStudents = async () : Promise<AxiosResponse<ApiDataType>> => {
    try {
        const studentList: AxiosResponse<ApiDataType> = await axios({
            method: 'get',
            url: `http://localhost:3000/studentList`
        })
        return studentList
    } catch (error) {
        throw new Error(error as unknown as string)
    }
}