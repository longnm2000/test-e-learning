const initState = { categoryId: "", search: "" };
import * as actionTypes from "../constant/actionTypes";
const searchInfo = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_INFO:
      console.log(action.payload);
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default searchInfo;
