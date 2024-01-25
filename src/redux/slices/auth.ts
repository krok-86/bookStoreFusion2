import { RootState } from "../store";

import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";

import { postUserAuth, getUserAuthMe, postUserReg, putUserById } from "../../api/urlApi";

import {
  IEditUser,
  IRegistrationForm,
  IRegistrationFormData,
  IRejectValue,
  UserData,
} from "./../../types";


export const fetchReg = createAsyncThunk<
  IRegistrationFormData,
  IRegistrationForm,
  { rejectValue: IRejectValue }
>("registration/fetchReg", async (params, { rejectWithValue }) => {
  try {
    const { data } = await postUserReg(params);
    return data;
  } catch (err: any) {
    return rejectWithValue({ data: err.response.data.message });
  }
});

export const fetchAuth = createAsyncThunk<
  IRegistrationFormData,
  IRegistrationForm,
  { rejectValue: IRejectValue }
>("authorization/fetchAuth", async (params, { rejectWithValue }) => {
  try {
    const { data } = await postUserAuth(params);
    return data;
  } catch (err: any) {
    return rejectWithValue({ data: err.response.data.message });
  }
});

export const fetchAuthMe = createAsyncThunk(
  "authorization/fetchAuthMe",
  async () => {
    const { data } = await getUserAuthMe();
    return data;
  }
);

export const sendUpdatedUser = createAsyncThunk<
UserData,
  IEditUser,
  { rejectValue: IRejectValue }
>("users/updateUser", async (params, { rejectWithValue }) => {
  try {
    return await putUserById(params);
  } catch (err: any) {
    return rejectWithValue({ data: err.response.data.message });
  }
});

type initialAuthState = {
  data: IRegistrationForm | null;
  status: "loading" | "loaded" | "error";
};

const initialState: initialAuthState = {
  data: null,
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase((fetchAuthMe.fulfilled), (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    });
    builder.addMatcher(
      isAnyOf(fetchReg.pending, fetchAuth.pending, fetchAuthMe.pending),
      (state) => {
        state.status = "loading";
        state.data = null;
      }
    );
    builder.addMatcher(
      isAnyOf(fetchReg.rejected, fetchAuth.rejected, fetchAuthMe.rejected),
      (state) => {
        state.status = "error";
        state.data = null;
      }
    );
    builder.addMatcher(
      isAnyOf(fetchReg.fulfilled, fetchAuth.fulfilled),
      (state, action) => {
        state.status = "loaded";
        state.data = action.payload.userData;
      }
    );
    builder.addMatcher(
      isAnyOf(sendUpdatedUser.fulfilled),
      (state, action) => {
        console.log(action.payload)
        state.status = "loaded";
        state.data = action.payload.data;
      }
    );
  },
});

export const selectIsAuth = (state: RootState) => Boolean(state.auth.data);//fix this is not use

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;