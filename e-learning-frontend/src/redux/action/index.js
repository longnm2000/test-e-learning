import * as actionTypes from "../constant/actionTypes";

export const act_setSearchInfo = (value) => {
  return {
    type: actionTypes.SET_SEARCH_INFO,
    payload: value,
  };
};
