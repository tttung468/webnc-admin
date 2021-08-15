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

    // categoriesList action
    case 'initCategoriesList': {
      return {
        ...state,
        categoriesList: action.payload.categoriesList
      };
    }

    // subcategory action
    case 'initEditSubcategory': {
      return {
        ...state,
        editSubcategory: action.payload.editSubcategory
      };
    }

    // subcategoriesList action
    case 'initSubcategoriesList': {
      return {
        ...state,
        subcategoriesList: action.payload.subcategoriesList
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
