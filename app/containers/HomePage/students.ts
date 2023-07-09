import { defineMessages } from 'react-intl';
import { getAllStudents } from 'services/getAllStudents';

export const scope = 'app.containers.HomePage';

const allStudents = await getAllStudents()

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: allStudents.toString,
  },
});
