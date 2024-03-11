import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import {
  postUserAuth,
  getUserAuthMe,
  postUserReg,
  putUserById,
} from '../../api/urlApi';

import type {
  IEditUser,
  IRegistrationForm,
  IRegistrationFormData,
  IRejectValue,
  InitialAuthStateType,
  UserDataType,
} from '../../types/types';

export const fetchReg = createAsyncThunk<
  IRegistrationFormData,
  IRegistrationForm,
  { rejectValue: IRejectValue }
>('registration/fetchReg', async (params, { rejectWithValue }) => {
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
>('authorization/fetchAuth', async (params, { rejectWithValue }) => {
  try {
    const { data } = await postUserAuth(params);
    return data;
  } catch (err: any) {
    return rejectWithValue({ data: err.response.data.message });
  }
});

export const fetchAuthMe = createAsyncThunk(
  'authorization/fetchAuthMe',
  async () => {
    const { data } = await getUserAuthMe();
    return data;
  },
);

export const sendUpdatedUser = createAsyncThunk<
  UserDataType,
  IEditUser,
  { rejectValue: IRejectValue }
>('users/updateUser', async (params, { rejectWithValue }) => {
  try {
    return await putUserById(params);
  } catch (err: any) {
    return rejectWithValue({ data: err.response.data.message });
  }
});

const initialState: InitialAuthStateType = {
  data: null,
  status: 'loading',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      const newState = { ...state };
      newState.data = null;
    },
    changeAvatar: (state, action) => {
      const newState = { ...state };
      newState.data = { ...state.data, avatarImg: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.status = 'loaded';
      newState.data = action.payload;
    });
    builder.addMatcher(
      isAnyOf(fetchReg.pending, fetchAuth.pending, fetchAuthMe.pending),
      (state) => {
        const newState = { ...state };
        newState.status = 'loading';
        newState.data = null;
      },
    );
    builder.addMatcher(
      isAnyOf(fetchReg.rejected, fetchAuth.rejected, fetchAuthMe.rejected),
      (state) => {
        const newState = { ...state };
        newState.status = 'error';
        newState.data = null;
      },
    );
    builder.addMatcher(
      isAnyOf(fetchReg.fulfilled, fetchAuth.fulfilled),
      (state, action) => {
        const newState = { ...state };
        newState.status = 'loaded';
        newState.data = action.payload.userData;
      },
    );
    builder.addMatcher(isAnyOf(sendUpdatedUser.fulfilled), (state, action) => {
      const newState = { ...state };
      newState.status = 'loaded';
      newState.data = action.payload.data;
    });
  },
});

export const selectIsAuth = (state: RootState) => Boolean(state.auth.data); // fix this is not use

export const authReducer = authSlice.reducer;

export const { logout, changeAvatar } = authSlice.actions;
