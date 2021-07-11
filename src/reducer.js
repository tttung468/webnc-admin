/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
export default function reducer(state, action) {
  // action = { type, payload }
  switch (action.type) {
    // students_list action
    case 'init_students_list': {
      return {
        ...state,
        students_list: action.payload.students_list
      };
    }
    // end students_list action

    // admin_info action
    case 'init_admin_info': {
      return {
        ...state,
        admin_info: action.payload.admin_info
      };
    }
    // end admin_info action

    // user_info action
    case 'init_user_info': {
      return {
        ...state,
        user_info: action.payload.user_info
      };
    }
    // end user_info action

    default:
      return state;
  }
}
