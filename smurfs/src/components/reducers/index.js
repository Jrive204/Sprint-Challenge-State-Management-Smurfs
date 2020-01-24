export const FETCHING_ACTIVITY_START = "FETCHING_ACTIVITY_START";
export const FETCHING_ACTIVITY_SUCCESS = "FETCHING_ACTIVITY_SUCCESS";
export const FETCHING_ACTIVITY_FAILURE = "FETCHING_ACTIVITY_FAILURE";

const initialstate = {
  isloading: false,
  smurfs: null,
  error: ""
};

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCHING_ACTIVITY_START:
      return {
        ...state,
        isloading: true
      };

    case FETCHING_ACTIVITY_SUCCESS:
      return {
        ...state,
        isloading: false,
        smurfs: action.payload
      };

    case FETCHING_ACTIVITY_FAILURE:
      return {
        ...state,
        isloading: false,
        smurfs: action.payload
      };

    default:
      return state;
  }
};
