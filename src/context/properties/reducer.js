export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "refetch":
      return { ...state, refetch: payload };
    default:
      return state;
  }
};
