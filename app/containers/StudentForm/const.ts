import { StudentDTO } from 'types/students';

export const initialValues: StudentDTO = {
  first_name: '',
  last_name: '',
  email: '',
  age: ('' as unknown) as number,
  grade: ('' as unknown) as number,
  id: Math.random(),
};
