import axios from "axios";
import { DATA_FAILURE, DATA_START, DATA_SUCCESS } from "../reducers";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: DATA_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res, "smurf data");
      dispatch({ type: DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DATA_FAILURE, payload: err.response });
    });
};

export const sendSmurfs = smurf => dispatch => {
  dispatch({ type: DATA_START });
  axios
    .post(
      "http://localhost:3333/smurfs",
      smurf
      //   id: Date.now()
    )
    .then(res => {
      console.log(res, "smurf data");
      setTimeout(() => {
        dispatch({ type: DATA_SUCCESS, payload: res.data });
      }, 2500);
    })
    .catch(err => {
      dispatch({ type: DATA_FAILURE, payload: err.response });
    });
};

export const editSmurfs = (smurf, id) => dispatch => {
  dispatch({ type: DATA_START });
  axios
    .put(
      `http://localhost:3333/smurfs/${id}`,
      smurf
      //   id: Date.now()
    )
    .then(res => {
      console.log(res, "smurf data");
      setTimeout(() => {
        dispatch({ type: DATA_SUCCESS, payload: res.data });
      }, 2500);
    })
    .catch(err => {
      dispatch({ type: DATA_FAILURE, payload: err.response });
    });
};

export const killSmurfs = (smurf, id) => dispatch => {
  dispatch({ type: DATA_START });
  axios
    .delete(
      `http://localhost:3333/smurfs/${id}`,
      smurf
      //   id: Date.now()
    )
    .then(res => {
      console.log(res, "smurf data");
      setTimeout(() => {
        dispatch({ type: DATA_SUCCESS, payload: res.data });
      }, 2500);
    })
    .catch(err => {
      dispatch({ type: DATA_FAILURE, payload: err.response });
    });
};
