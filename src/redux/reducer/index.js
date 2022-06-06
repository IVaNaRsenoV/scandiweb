import { initialState } from "../state";

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "TOGGLE":
      return { ...state, toggle: payload };
    case "SRC":
      return { ...state, src: payload };
    default:
      return state;
  }
};

export default reducer;
