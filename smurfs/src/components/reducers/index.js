export const DATA_START = "FETCHING_DATA_START";
export const DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const DATA_FAILURE = "FETCHING_DATA_FAILURE";
export const EDITING_STATE = "EDITING_STATE";
export const FORM_STATE = "FORM_STATE";

const initialstate = {
  isloading: false,
  smurfs: [],
  error: "",
  editing: false,
  smurf: {
    name: "",
    age: 0,
    height: "",
    id: 0
  }
};

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case DATA_START:
      return {
        ...state,
        isloading: true
      };

    case DATA_SUCCESS:
      return {
        ...state,
        isloading: false,
        smurfs: action.payload
      };

    case DATA_FAILURE:
      return {
        ...state,
        isloading: false,
        smurfs: action.payload
      };

    case EDITING_STATE:
      return {
        ...state,
        editing: !state.editing
      };

    case FORM_STATE: {
      return {
        ...state,
        smurf: {
          ...state.smurf,
          [action.name]: action.value
        }
      };
    }

    default:
      return state;
  }
};



