import { SET_LOADING, SET_INPUT, SET_DEFAULT } from "./action";
import football from "./football-local";
const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_INPUT: {
      return {
        ...state,
        isLoading: false,
        football: football.filter(
          (item) =>
            item.away.name === action.payload ||
            item.home.name === action.payload ||
            item.country.name === action.payload
        ),
      };
    }
    case SET_DEFAULT:
      return {
        ...state,
        isLoading: false,
        football,
      };
    default:
      return state;
  }
};

export default reducer;
