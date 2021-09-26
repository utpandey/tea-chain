import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { saveState, removeState } from '../utils/localStorage';

interface IBatchState {
  batchData: any[] | any;
}

const initialState: IBatchState = {
  batchData: null,
};

const batchSlice = createSlice({
  name: "batch",
  initialState,
  reducers: {
    /* tslint:disable-next-line */ // @ts-ignore
    AddBatch: {
      reducer(state: IBatchState, action: PayloadAction<IBatchState>) {
        const item = action.payload; // @ts-ignore
        // console.log(item);
        /* tslint:disable-next-line */ // console.log(item[0][])
        return item;
      },
      // LOGOUT: () => {
      //   removeState('auth');
      //   return {
      //     isAuthenticated: false,
      //     userProfile: {},
      //   };
      // },
    },
    EmptyBatch: () => {
      return {
        batchData: null,
      };
    },
  },
});

export const getBatchStateReducer = (state: { batch: IBatchState }) =>
  state.batch.batchData;

export const { AddBatch, EmptyBatch } = batchSlice.actions;
export default batchSlice.reducer;
