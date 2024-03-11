import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type {
  IPost,
  IRejectValue,
  PostDataType,
  PostType,
} from '../../types/types';
import { getPostById, getPosts, createPost } from '../../api/urlApi';

export type PostResType = {
  data: IPost[];
};
type PostStateType = {
  data?: IPost;
  posts?: IPost[];
  post?: PostType;
  status?: string | null;
  error?: string | null;
};

export const getPostsList = createAsyncThunk<IPost[], string>(
  'posts/getPostsList',
  async (params) => {
    const { data } = await getPosts(params);
    return data;
  },
);

export const getPostListById = createAsyncThunk<
  PostDataType,
  number,
  { rejectValue: IRejectValue }
>('posts/getPostsListById', async (id, { rejectWithValue }) => {
  try {
    return await getPostById(id);
  } catch (err: any) {
    return rejectWithValue({ data: err.response.data.message });
  }
});

export const addPost = createAsyncThunk<
  PostDataType,
  PostType,
  { rejectValue: IRejectValue }
>('posts/addPost', async (data, { rejectWithValue }) => {
  try {
    return await createPost(data);
  } catch (err: any) {
    return rejectWithValue({ data: err.response.data.message });
  }
});

const initialState: PostStateType = {
  posts: [],
  post: {},
  status: 'loading',
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get posts
    builder.addCase(getPostsList.pending, (state) => {
      const newState = { ...state };
      newState.posts = [];
      newState.status = 'loading';
    });
    builder.addCase(getPostsList.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.posts = action.payload;
      newState.status = 'loaded';
    });
    builder.addCase(getPostsList.rejected, (state) => {
      const newState = { ...state };
      newState.posts = [];
      newState.status = 'error';
    });
    // get one posts
    builder.addCase(getPostListById.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.post = action.payload.data;
      newState.status = 'loaded';
    });
    // add one post
    builder.addCase(addPost.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.posts = [...(state.posts || []), action.payload.data];
      newState.status = 'loaded';
    });
  },
});

export const postsReducer = postsSlice.reducer;
