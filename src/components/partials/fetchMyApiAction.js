import axios from "axios";

//fetch API function
// this is used to dispatch action to fetch data from api
// fetchUrl=url of api
// typeName=action type
export const fetchMyAPI = (fetchUrl, typeName) => {
  return async dispatch => {
    try {
      const fetchData = await axios.get(fetchUrl);
      console.log(`${typeName} fetchMyApi function data is==>${fetchData}`);
      dispatch({
        type: typeName,
        payload: fetchData.data,
      })
    } catch (err) {
      console.log(`${typeName} fetchMyApi function error is==>${err}`);
      dispatch({
        type: typeName,
        payload: err
      })
    }
  }
};