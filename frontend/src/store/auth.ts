import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { saveState, removeState } from "../utils/localStorage";

interface IUser {
  type: string,
  profile: {
    name?: string,
    picture?: string,
  }
}

interface IUserState {
  isAuthenticated: boolean;
  user: IUser;
};

const initialState: IUserState = {
  isAuthenticated: true,
  user: {
    type: '',
    profile: {}
  },
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    LOGIN: (state, action: PayloadAction<IUser>) => {
      saveState('auth', {
        authentication: {
          isAuthenticated: true,
          user: {
            type: action.payload.type,
            profile: action.payload.profile,
          },
        }
      });
      return {
        isAuthenticated: true,
        user: {
          type: action.payload.type,
          profile: action.payload.profile,
        },
      };
    },

    LOGOUT: () => {
      removeState('auth');
      return {
        isAuthenticated: false,
        user: {
          type: '',
          profile: {},
        },
      };
    },
  },
});

export const getUserStateReducer = (state: { authentication: IUserState }) =>
  state.authentication.isAuthenticated;

export const getUserTypeReducer = (state: { authentication: IUserState }) =>
  state.authentication.user.type;

export const getUserProfileReducer = (state: { authentication: IUserState }) =>
  state.authentication.user.profile;

export const { LOGIN, LOGOUT } = authenticationSlice.actions;
export default authenticationSlice.reducer;
