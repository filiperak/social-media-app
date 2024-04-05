export const initialState = {
    posts: [],
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
          posts: action.payload,
        };
      case "FETCH_POSTS_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.payload, //false
        };
  
      default:
        return state;
    }
  };