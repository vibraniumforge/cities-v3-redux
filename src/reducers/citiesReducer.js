const initialState = {
  citiesData: [],
};

export default function citiesReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CITIES":
      return {
        ...state,
        citiesData: action.payload,
      };
    default:
      return state;
  }
}
