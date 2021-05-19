import { configureStore } from "@reduxjs/toolkit";
import { loadState } from "../utils/localStorage";
import authReducer from "../store/auth";
import batchReducer from '../store/batch';

const storeConfig = () =>
  configureStore({
    preloadedState: loadState('auth'),
    reducer: {
      authentication: authReducer,
      batch: batchReducer,
    },
  });

export default storeConfig;
