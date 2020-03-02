import {
  GET_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT
} from "../Actions/actionTypes";

const initialState = {
  loading: true,
  comments: []
};

const commentsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COMMENTS:
      return {
        comments: [...payload],
        loading: false
      };
    case ADD_COMMENT:
      return {
        comments: [...state.comments, payload],
        loading: false
      };

    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment._id !== payload),
        loading: false
      };

    default:
      return state;
  }
};

export default commentsReducer;
