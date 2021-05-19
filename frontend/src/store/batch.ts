import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { saveState, removeState } from "../utils/localStorage";

interface IBatchState {
  batchData: any;
};

const initialState: IBatchState = {
  batchData: [],
};

const batchSlice = createSlice({
  name: "batch",
  initialState,
  reducers: {
    /* tslint:disable-next-line */ // @ts-ignore
    AddBatch: {
      reducer(state: IBatchState, action: PayloadAction<any>) {
        const item = action.payload;
        state = item;
        console.log(state);
      }

      // LOGOUT: () => {
      //   removeState('auth');
      //   return {
      //     isAuthenticated: false,
      //     userProfile: {},
      //   };
      // },
    },
  }
});

export const { AddBatch } = batchSlice.actions;
export default batchSlice.reducer;
