/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';

import type { RootStateType } from '../store';

import {
  postUserAuth,
  getUserAuthMe,
  postUserReg,
  putUserById,
  addBookToCart,
  getBooksFavorite,
  addBookToFavorite,
  getBooksCart,
  delBooksCart,
} from '../../api/urlApi';

import type {
  BookDataType,
  BooksDataType,
  CartDataType,
  IEditUser,
  IRegistrationForm,
  IRegistrationFormData,
  IRejectValue,
  InitialAuthStateType,
  UserDataType,
} from '../../types/types';
import type { ErrorWithMessageType } from './book';

export const fetchReg = createAsyncThunk<
  IRegistrationFormData,
  IRegistrationForm,
  { rejectValue: IRejectValue }
>('registration/fetchReg', async (params, { rejectWithValue }) => {
  try {
    const { data } = await postUserReg(params);
    return data;
  } catch (err: unknown) {
    return rejectWithValue({
      data: (err as ErrorWithMessageType).response.data.message,
    });
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
  } catch (err: unknown) {
    return rejectWithValue({
      data: (err as ErrorWithMessageType).response.data.message,
    });
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
  } catch (err: unknown) {
    return rejectWithValue({
      data: (err as ErrorWithMessageType).response.data.message,
    });
  }
});

export const bookToCart = createAsyncThunk<
  UserDataType,
  string,
  { rejectValue: IRejectValue }
>('users/addToCart', async (params, { rejectWithValue }) => {
  try {
    return await addBookToCart(params);
  } catch (err: unknown) {
    return rejectWithValue({
      data: (err as ErrorWithMessageType).response.data.message,
    });
  }
});
export const getBooksFromCart = createAsyncThunk<
  CartDataType,
  string,
  { rejectValue: IRejectValue }
>('users/getFromCart', async (params, { rejectWithValue }) => {
  try {
    return await getBooksCart(params);
  } catch (err: unknown) {
    return rejectWithValue({
      data: (err as ErrorWithMessageType).response.data.message,
    });
  }
});
export const removeBooksFromCart = createAsyncThunk<
  BookDataType,
  string,
  { rejectValue: IRejectValue }
>('users/removeFromCart', async (params, { rejectWithValue }) => {
  try {
    return await delBooksCart(params);
  } catch (err: unknown) {
    return rejectWithValue({
      data: (err as ErrorWithMessageType).response.data.message,
    });
  }
});
export const bookToFavorite = createAsyncThunk<
  UserDataType,
  string,
  { rejectValue: IRejectValue }
>('users/addToFavorite', async (params, { rejectWithValue }) => {
  try {
    return await addBookToFavorite(params);
  } catch (err: unknown) {
    return rejectWithValue({
      data: (err as ErrorWithMessageType).response.data.message,
    });
  }
});

export const getBooksFromFavorite = createAsyncThunk<
  BooksDataType,
  string,
  { rejectValue: IRejectValue }
>('users/getFromFavorite', async (params, { rejectWithValue }) => {
  try {
    return await getBooksFavorite(params);
  } catch (err: unknown) {
    return rejectWithValue({
      data: (err as ErrorWithMessageType).response.data.message,
    });
  }
});

const initialState: InitialAuthStateType = {
  data: null,
  status: 'loading',
  books: [], // fix booksFavorite
  booksCart: [],
  countBookCart: 0,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
    changeAvatar: (state, action) => {
      state.data = { ...state.data, avatarImg: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
    });
    // get books from favorite
    builder.addCase(getBooksFromFavorite.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.books = action.payload.data;
    });
    builder.addCase(getBooksFromFavorite.pending, (state) => {
      state.status = 'loading';
      state.books = [];
    });
    builder.addCase(getBooksFromFavorite.rejected, (state) => {
      state.status = 'error';
      state.books = [];
    });
    // get books from cart
    builder.addCase(getBooksFromCart.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.booksCart = action.payload.data.cartBooks;
      state.countBookCart = action.payload.data.bookCount;
    });
    builder.addCase(getBooksFromCart.pending, (state) => {
      state.status = 'loading';
      state.booksCart = [];
    });
    builder.addCase(getBooksFromCart.rejected, (state) => {
      state.status = 'error';
      state.booksCart = [];
    });
    // remove book from cart
    builder.addCase(removeBooksFromCart.fulfilled, (state, action) => {
      state.status = 'loaded';
      const index = state.booksCart.findIndex(
        (book) => book.id === action.payload.data.id,
      );
      state.booksCart.splice(index, 1);
      state.countBookCart -= 1;
    });
    // add/remove book favorite
    builder.addCase(bookToFavorite.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.books = action.payload.data.favorite || [];
    });

    // add book cart
    builder.addCase(bookToCart.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.booksCart = action.payload.data.cart || [];
      state.countBookCart += 1;
    });

    // registration authorization
    builder.addMatcher(
      isAnyOf(fetchReg.pending, fetchAuth.pending, fetchAuthMe.pending),
      (state) => {
        state.status = 'loading';
        state.data = null;
      },
    );
    builder.addMatcher(
      isAnyOf(fetchReg.rejected, fetchAuth.rejected, fetchAuthMe.rejected),
      (state) => {
        state.status = 'error';
        state.data = null;
      },
    );

    builder.addMatcher(
      isAnyOf(fetchReg.fulfilled, fetchAuth.fulfilled),
      (state, action) => {
        state.status = 'loaded';
        state.data = action.payload.userData;
      },
    );
    builder.addMatcher(isAnyOf(sendUpdatedUser.fulfilled), (state, action) => {
      state.status = 'loaded';
      state.data = action.payload.data;
    });
  },
});

export const selectIsAuth = (state: RootStateType) => Boolean(state.auth.data); // fix this is not use

export const authReducer = authSlice.reducer;

export const { logout, changeAvatar } = authSlice.actions;
