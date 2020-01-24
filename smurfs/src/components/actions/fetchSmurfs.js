import axios from "axios";
import {
  FETCHING_DATA_FAILURE,
  FETCHING_DATA_START,
  FETCHING_DATA_SUCCESS,
  POSTING_DATA_FAILURE,
  POSTING_DATA_START,
  POSTING_DATA_SUCCESS
} from "../reducers";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_DATA_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res, "smurf data");
      dispatch({ type: FETCHING_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_DATA_FAILURE, payload: err.response });
    });
};

export const sendSmurfs = smurf => dispatch => {
  dispatch({ type: POSTING_DATA_START });
  axios
    .post(
      "http://localhost:3333/smurfs",
      smurf
      //   id: Date.now()
    )
    .then(res => {
      console.log(res, "smurf data");
      setTimeout(() => {
        dispatch({ type: POSTING_DATA_SUCCESS, payload: res.data });
      }, 2500);
    })
    .catch(err => {
      dispatch({ type: POSTING_DATA_FAILURE, payload: err.response });
    });
};

export const editSmurfs = (smurf, id) => dispatch => {
  dispatch({ type: POSTING_DATA_START });
  axios
    .put(
      `http://localhost:3333/smurfs/${id}`,
      smurf
      //   id: Date.now()
    )
    .then(res => {
      console.log(res, "smurf data");
      setTimeout(() => {
        dispatch({ type: POSTING_DATA_SUCCESS, payload: res.data });
      }, 2500);
    })
    .catch(err => {
      dispatch({ type: POSTING_DATA_FAILURE, payload: err.response });
    });
};
