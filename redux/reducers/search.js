import { MOVIE_TITLE } from "../actions/title";

const initialState = "";

export default function search(state = initialState, { type, payload }) {
  switch (type) {
    case MOVIE_TITLE:
      return payload;
    default:
      return state;
  }
}
