import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/addUser/addUserSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
