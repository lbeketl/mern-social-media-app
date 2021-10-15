import { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';

const INITITAL_STATE = {
  user: {
    _id: "6154b463b7bca571b9c190c1",
    username: "beket",
    email: "beket@mail.com",
    password: "$2b$10$W13WdOxn8KWfcyY9YjWop.JL0kdy/Aa9bLSkCJSCSaz9hQPeYXoa2",
    profilePicture: "person/1.jpeg",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: false,
    createdAt: "2021-09-29T18:45:55.735+00:00",
    updatedAt: "2021-09-29T18:45:55.735+00:00",
  },
  isFetching: false,
  error: false
};

export const AuthContext = createContext(INITITAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITITAL_STATE);

  return (
    <AuthContext.Provider value={{
      user: state.user,
      isFetching: state.isFetching,
      error: state.error,
      dispatch
      }}>
        { children }
    </AuthContext.Provider>
  )
}