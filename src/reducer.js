/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
export default function reducer(state, action) {
  // action = { type, payload }
  switch (action.type) {
    case 'initStudentsList': {
      return {
        ...state,
        studentsList: action.payload.studentsList
      };
    }

    case 'initTeachersList': {
      return {
        ...state,
        teachersList: action.payload.teachersList
      };
    }

    case 'initCategoriesList': {
      return {
        ...state,
        categoriesList: action.payload.categoriesList
      };
    }

    case 'initEditSubcategory': {
      return {
        ...state,
        editSubcategory: action.payload.editSubcategory
      };
    }

    case 'initSubcategoriesList': {
      return {
        ...state,
        subcategoriesList: action.payload.subcategoriesList
      };
    }

    case 'initCoursesList': {
      return {
        ...state,
        coursesList: action.payload.coursesList
      };
    }

    // course action
    case 'initCourse': {
      return {
        ...state,
        course: action.payload.course
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
