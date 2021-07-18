/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
export default function reducer(state, action) {
  // action = { type, payload }
  switch (action.type) {
    // studentsList action
    case 'initStudentsList': {
      return {
        ...state,
        studentsList: action.payload.studentsList
      };
    }

    // teachersList action
    case 'initTeachersList': {
      return {
        ...state,
        teachersList: action.payload.teachersList
      };
    }

    // admin action
    case 'initAdmin': {
      return {
        ...state,
        admin: action.payload.admin
      };
    }

    // user action
    case 'initUser': {
      return {
        ...state,
        user: action.payload.user
      };
    }

    default:
      return state;
  }
}
