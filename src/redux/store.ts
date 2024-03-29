import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import { booksReducer } from './slices/book';
import { postsReducer } from './slices/post';
import { cartReducer } from './slices/cart';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    books: booksReducer,
    posts: postsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootStateType = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatchType = typeof store.dispatch;
