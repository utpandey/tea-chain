import { configureStore } from "@reduxjs/toolkit";
import { loadState } from "../utils/localStorage";
import authReducer from "../store/auth";

const storeConfig = () =>
  configureStore({
    preloadedState: loadState('auth'),
    reducer: {
      authentication: authReducer,
    },
  });

export default storeConfig;
