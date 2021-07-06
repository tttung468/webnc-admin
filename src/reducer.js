/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
export default function reducer(state, action) {
  // action = { type, payload }
  switch (action.type) {
    /* students_list */
    case 'init_students_list': {
      return {
        ...state,
        students_list: action.payload.students_list
      };
    }

    /* admin_info */
    case 'init_admin_info': {
      return {
        ...state,
        admin_info: action.payload.admin_info
      };
    }

    /* user_info */
    case 'init_user_info': {
      return {
        ...state,
        user_info: action.payload.user_info
      };
    }

    default:
      return state;
  }
}
