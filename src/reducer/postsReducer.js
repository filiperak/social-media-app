export const initialState = {
    postList: [],
    loading: false,
    error: null,
  };
  
  export const postsReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_POSTS_REQUEST":
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case "FETCH_POSTS_SUCCESS":
        return {
          ...state,
          loading: false,
          postList: action.payload,
        };
      case "FETCH_POSTS_FAILURE":
        return {
        postList:false,
          loading: false,
          error: action.payload, //false
        };
  
      default:
        return state;
    }
  };