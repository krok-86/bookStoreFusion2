import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./slices/auth";
import { booksReducer } from "./slices/book";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    book: booksReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({serializableCheck: false,}),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;