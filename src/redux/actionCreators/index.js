import { INC, DEC } from "../Actions";

export const increment = (data) => {
  return { type: INC, payload: data };
};

export const decrement = (data) => {
  return { type: DEC, payload: data };
};
