const filterCurrency = (state = '$', action) => {
  switch (action.type) {
    case "FILTER_CURRENCY":
      return action.filter;
    default:
      return state;
  }
};

export default filterCurrency;
