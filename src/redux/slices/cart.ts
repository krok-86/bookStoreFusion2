/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type {
  CartDataType,
  CartItemDataType,
  CartItemType,
  IRejectValue,
} from '../../types/types';
import { addBookToCart, delBooksCart, delStackBooksCart, getBooksCart } from '../../api/urlApi';
import type { ErrorWithMessageType } from './book';

type CartStateType = {
    books: CartItemType[];
    cartBookAmount: number;
    summ: number;
    status?: string | null;
    error?: string | null;
};

export const bookToCart = createAsyncThunk<
    CartItemDataType,
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
    CartItemDataType,
    string,
    { rejectValue: IRejectValue }
>('users/removeBooksFromCart', async (params, { rejectWithValue }) => {
  try {
    return await delBooksCart(params);
  } catch (err: unknown) {
    return rejectWithValue({
      data: (err as ErrorWithMessageType).response.data.message,
    });
  }
});

export const removeStackBooksFromCart = createAsyncThunk<
CartItemDataType,
    string,
    { rejectValue: IRejectValue }
>('users/removeStackBooksFromCart', async (params, { rejectWithValue }) => {
  try {
    return await delStackBooksCart(params);
  } catch (err: unknown) {
    return rejectWithValue({
      data: (err as ErrorWithMessageType).response.data.message,
    });
  }
});

const initialState: CartStateType = {
  books: [],
  cartBookAmount: 0,
  summ: 0,
  status: 'loading',
};

const postsSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get books from cart
    builder.addCase(getBooksFromCart.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.books = action.payload.data.books;
      state.cartBookAmount = action.payload.data.cartBookAmount;
      state.summ = action.payload.data.summ;
    });
    builder.addCase(getBooksFromCart.pending, (state) => {
      state.status = 'loading';
      state.books = [];
    });
    builder.addCase(getBooksFromCart.rejected, (state) => {
      state.status = 'error';
      state.books = [];
    });
    // remove book from cart
    builder.addCase(removeBooksFromCart.fulfilled, (state, action) => {
      state.status = 'loaded';
      if (action.payload.data.countBook === 0) {
        const filter = state.books.filter((book) => book?.book?.id !== action.payload.data.book.id);
        state.books = filter;
      } else {
        const index = state.books.findIndex(
          (book) => book?.book?.id === action.payload.data.book.id,
        );
        state.books.splice(index, 1, action.payload.data);
      }
      state.cartBookAmount -= 1;
      state.summ -= (action.payload.data?.book.price || 0);
    });
    // remove stack book from cart
    builder.addCase(removeStackBooksFromCart.fulfilled, (state, action) => {
      state.status = 'loaded';
      const filter = state.books.filter(
        (book) => book?.book?.id !== action.payload.data.book.id,
      );
      state.books = filter;
      state.cartBookAmount -= action.payload.data.countBook;
      state.summ -= (action.payload.data?.book.price || 0);
    });
    // add book cart
    builder.addCase(bookToCart.fulfilled, (state, action) => {
      state.status = 'loaded';
      const book = action.payload.data;
      const targetBookIndex = state.books.findIndex((el) => el.book.id === book.book.id);
      if (targetBookIndex === -1) {
        state.books.push(book);
      } else {
        state.books[targetBookIndex] = book;
      }
      state.cartBookAmount += 1;
      state.summ += (book?.book?.price || 0);
    });
  },
});

export const cartReducer = postsSlice.reducer;
