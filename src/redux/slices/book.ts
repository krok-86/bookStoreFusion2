/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type {
  BookDataType,
  BooksDataType,
  IBook,
  IEditBook,
  IRejectValue,
} from '../../types/types';
import {
  getBookById,
  getBooks,
  getRecomBooks,
  putBookById,
} from '../../api/urlApi';

type PaginationBooksType = {
  currentPage: number;
  totalItems: number;
  perPage: number;
  maxPage: number;
};
type BookResType = {
  pagination: PaginationBooksType;
  data: IBook[];
};
type BookStateType = {
  data?: IBook;
  books?: IBook[];
  book?: IBook;
  status?: string | null;
  error?: string | null;
  recommended?: IBook[];
  pagination: PaginationBooksType;
};

export type ErrorWithMessageType = {
  response: {
    data: {
    message: string;
    };
  };
};

export const getBooksList = createAsyncThunk<BookResType, string>(
  'books/getBooksList',
  async (params) => {
    const { data } = await getBooks(params);
    return data as BookResType;
  },
);

export const getBookListById = createAsyncThunk<
  BookDataType,
  number,
  { rejectValue: IRejectValue }
>('books/getBooksListById', async (id, { rejectWithValue }) => {
  try {
    return await getBookById(id);
  } catch (err: unknown) {
    return rejectWithValue({ data: (err as ErrorWithMessageType).response.data.message });
  }
});

export const sendUpdatedBook = createAsyncThunk<
  BookDataType,
  IEditBook,
  { rejectValue: IRejectValue }
>('books/updateBooks', async (params, { rejectWithValue }) => {
  try {
    return await putBookById(params);
  } catch (err: unknown) {
    return rejectWithValue({ data: (err as ErrorWithMessageType).response.data.message });
  }
});

export const getRecommededListBook = createAsyncThunk<
  BooksDataType,
  string,
  { rejectValue: IRejectValue }
>('books/RecommededListBook', async (arg, { rejectWithValue }) => {
  try {
    return await getRecomBooks();
  } catch (err: unknown) {
    return rejectWithValue({ data: (err as ErrorWithMessageType).response.data.message });
  }
});

const initialState: BookStateType = {
  books: [],
  book: {},
  recommended: [],
  pagination: {
    currentPage: 1,
    totalItems: 3,
    perPage: 3,
    maxPage: 3,
  },
  status: 'loading',
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get books
    builder.addCase(getBooksList.pending, (state) => {
      state.books = [];
      state.status = 'loading';
    });
    builder.addCase(getBooksList.fulfilled, (state, action) => {
      state.books = action.payload.data;
      state.pagination = action.payload.pagination;
      state.status = 'loaded';
    });
    builder.addCase(getBooksList.rejected, (state) => {
      state.books = [];
      state.status = 'error';
    });
    // add one book
    //   dispatch(getBookById(bookId))
    builder.addCase(getBookListById.fulfilled, (state, action) => {
      state.book = action.payload.data;
      state.status = 'loaded';
    });
    // update book data
    builder.addCase(sendUpdatedBook.fulfilled, (state, action) => {
      state.books = state.books?.map((item: IBook) => {
        if (item.id === action.payload.data.id) {
          return action.payload.data;
        }
        return item;
      });

      state.book = action.payload.data;
    });
    // get book recommended
    builder.addCase(getRecommededListBook.fulfilled, (state, action) => {
      // const newState = { ...state };
      state.recommended = action.payload.data;
      state.status = 'loaded';
    });
  },
});

export const booksReducer = booksSlice.reducer;
