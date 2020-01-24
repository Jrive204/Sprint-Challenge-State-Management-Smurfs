export const FETCHING_DATA_START = "FETCHING_DATA_START";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const FETCHING_DATA_FAILURE = "FETCHING_DATA_FAILURE";

export const POSTING_DATA_START = "POSTING_DATA_START";
export const POSTING_DATA_SUCCESS = "POSTING_DATA_SUCCESS";
export const POSTING_DATA_FAILURE = "POSTING_DATA_FAILURE";

const initialstate = {
  isloading: false,
  smurfs: [],
  error: ""
};

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCHING_DATA_START:
      return {
        ...state,
        isloading: true
      };

    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isloading: false,
        smurfs: action.payload
      };

    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isloading: false,
        smurfs: action.payload
      };
    //POSTING DATA STARTS HERE

    case POSTING_DATA_START:
      return {
        ...state,
        isloading: true
      };
    case POSTING_DATA_SUCCESS:
      return {
        ...state,
        isloading: false,
        smurfs: action.payload
      };
    case POSTING_DATA_FAILURE:
      return {
        ...state,
        isloading: false,
        smurfs: action.payload
      };

    default:
      return state;
  }
};
