import axios from "axios";

//fetch API function
// this is used to dispatch action to fetch data from api
// fetchUrl=url of api
// typeName=action type
export const fetchMyAPI = (fetchUrl, successTypeName, failureTypeName = null, isFetchingTypeName = null) => {
  return async dispatch => {
    try {
      if (isFetchingTypeName) {
        dispatch({
          type: isFetchingTypeName
        })
      }
      const fetchData = await axios.get(fetchUrl);
      dispatch({
        type: successTypeName,
        payload: fetchData.data,
      })
    } catch (err) {
      console.log("errorTypeName==>", successTypeName);
      console.log("error is==>", err);
      if (failureTypeName) {
        dispatch({
          type: failureTypeName,
          payload: err,
        })
      }
    }
  }
};