import { createContext, useReducer } from "react";
import { postsReducer, initialState } from "../reducer/postsReducer";
export const PostsContext = createContext();

const PostsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, initialState);

  return (
    <PostsContext.Provider value={{ state, dispatch }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;