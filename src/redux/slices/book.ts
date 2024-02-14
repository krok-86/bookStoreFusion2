import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BookData, IBook, IEditBook, IRejectValue } from "../../types";
import { getBookById, getBooks, putBookById } from "../../api/urlApi";


type BookState = {
    data?: IBook;
    books?:IBook[];
    book?: IBook;
    status?: string | null;
    error?: string | null;
  };

  export const getBooksList = createAsyncThunk<IBook[]>(
    "books/getBooksList",
    async () => {
      const { data } = await getBooks();
      return data as IBook[];
    }
  );

  export const getBookListById = createAsyncThunk<
  BookData,
  number,
  { rejectValue: IRejectValue }
>("books/getBooksListById", async (id, { rejectWithValue }) => {
  try {
    return await getBookById(id);
  } catch (err: any) {
    return rejectWithValue({ data: err.response.data.message });
  }
});

export const sendUpdatedBook = createAsyncThunk<
  BookData,
  IEditBook,
  { rejectValue: IRejectValue }
>("books/updateBooks", async (params, { rejectWithValue }) => {
  try {
    return await putBookById(params);
  } catch (err: any) {
    return rejectWithValue({ data: err.response.data.message });
  }
});

const initialState: BookState = {
    books: [],
    book:{},
    status: "loading",
  };

  const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      //get books
      builder.addCase(getBooksList.pending, (state) => {
        state.books = [];
        state.status = "loading";
      });
      builder.addCase(getBooksList.fulfilled, (state, action) => {
        state.books = action.payload;
        state.status = "loaded";
      });
      builder.addCase(getBooksList.rejected, (state) => {
        state.books = [];
        state.status = "error";
      });
      //add one book
      //   dispatch(getBookById(bookId))
      builder.addCase(getBookListById.fulfilled, (state, action) => {
        state.book = action.payload.data;
        state.status = "loaded";
      })
      //update book data
      builder.addCase(sendUpdatedBook.fulfilled, (state, action) => {
        state.books = state.books?.map((item: IBook) => {
          if (item.id === action.payload.data.id) {
            return action.payload.data;
          }
          return item;
        });
      });
    }
  });

  export const booksReducer = booksSlice.reducer;
