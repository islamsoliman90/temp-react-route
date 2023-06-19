const reducer = (state, action) => {
  switch (action.type) {
    case "search":
      return { ...state, search: !state.search };
    default:
      throw new Error(`no mathching "${action.type}" action type`);
  }
};
export default reducer;
