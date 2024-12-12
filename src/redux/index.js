import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/user-clise";

const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});

export default store;
