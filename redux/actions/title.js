export const MOVIE_TITLE = "MOVIE_TITLE";

export default function title(payload) {
  return {
    type: MOVIE_TITLE,
    payload,
  };
}
