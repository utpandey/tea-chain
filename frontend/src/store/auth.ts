import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { saveState, removeState } from "../utils/localStorage";

interface IProfile {
  name?: string,
  picture?: string,
}

interface IUserState {
  isAuthenticated: boolean;
  userProfile: IProfile;
};

const initialState: IUserState = {
  isAuthenticated: false,
  userProfile: {},
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    LOGIN: (state, action: PayloadAction<IProfile>) => {
      saveState('auth', {
        authentication: {
          isAuthenticated: true,
          userProfile: action.payload,
        }
      });
      return {
        isAuthenticated: true,
        userProfile: action.payload,
      };
    },

    LOGOUT: () => {
      removeState('auth');
      return {
        isAuthenticated: false,
        userProfile: {},
      };
    },
  },
});

export const getUserStateReducer = (state: { snackbar: IUserState }) =>
  state.snackbar.isAuthenticated;

export const getUserProfileReducer = (state: { snackbar: IUserState }) =>
  state.snackbar.userProfile;

export const { LOGIN, LOGOUT } = authenticationSlice.actions;
export default authenticationSlice.reducer;
