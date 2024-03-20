// import { SET_QUIZ_PREFERENCES } from './actions';
import { SET_QUIZ_PREFERENCES } from "./action";

const initialState = {
  quizPreferences: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUIZ_PREFERENCES:
      return {
        ...state,
        quizPreferences: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
