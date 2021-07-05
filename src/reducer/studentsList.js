/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
export default function reducer(state, action) {
  // action = { type, payload }
  switch (action.type) {
    case 'init_students_list': {
      return {
        students_list: action.payload.students_list
      };
    }

    default:
      return state;
  }
}
