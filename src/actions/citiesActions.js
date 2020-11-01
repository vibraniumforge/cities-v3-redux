import info from "../info.json";

export const getCities = () => {
  return (dispatch) => {
    dispatch({ type: "GET_CITIES", payload: info });
  };
};
