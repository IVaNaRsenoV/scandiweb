import { INC, DEC } from "../Actions";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INC:
      return { ...state, counter: payload + 1 };
    case DEC:
      return { ...state, counter: payload - 1 };
    default:
      return state;
  }
};

export default reducer;
