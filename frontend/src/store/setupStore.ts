import { configureStore } from "@reduxjs/toolkit";
// import logger from 'redux-logger'
import { loadState } from "../utils/localStorage";
import authReducer from "../store/auth";
import batchReducer from "../store/batch";

const storeConfig = () =>
  configureStore({
    preloadedState: loadState("auth"),
    reducer: {
      authentication: authReducer,
      batch: batchReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export default storeConfig;
