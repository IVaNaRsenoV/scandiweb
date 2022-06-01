import { combineReducers } from "redux";
import { data } from "../../assets/data/data";

const initialState = {
  slides: data,
};

const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const sliderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const root = combineReducers({
  counter: counterReducer,
  slider: sliderReducer,
});

export default root;
