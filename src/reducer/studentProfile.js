/* eslint-disable linebreak-style */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
export default function reducer(state, action) {
  // action = { type, payload }
  switch (action.type) {
    case 'init_student_profile': {
      return {
        student_profile: action.payload.student_profile
      };
    }

    default:
      return state;
  }
}
