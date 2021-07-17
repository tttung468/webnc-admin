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
    // end studentsList action

    // teachersList action
    case 'initTeachersList': {
      return {
        ...state,
        teachersList: action.payload.teachersList
      };
    }
    // end teachersList action

    // adminInfo action
    case 'initAdminInfo': {
      return {
        ...state,
        adminInfo: action.payload.adminInfo
      };
    }
    // end adminInfo action

    // userInfo action
    case 'initUserInfo': {
      return {
        ...state,
        userInfo: action.payload.userInfo
      };
    }
    // end userInfo action

    default:
      return state;
  }
}
