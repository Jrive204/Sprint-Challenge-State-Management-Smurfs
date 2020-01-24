import axios from "axios";
import {
  FETCHING_ACTIVITY_FAILURE,
  FETCHING_ACTIVITY_START,
  FETCHING_ACTIVITY_SUCCESS
} from "../../reducers";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_ACTIVITY_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res, "smurf data");
      dispatch({ type: FETCHING_ACTIVITY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_ACTIVITY_FAILURE, payload: err.response });
    });
};
