import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPost, IRejectValue, PostData, PostType } from "../../types";
import { getPostById, getPosts, createPost } from "../../api/urlApi";

type PostRes = {
  data: IPost[]
}
type PostState = {
    data?: IPost;
    posts?:IPost[];
    post?: PostType;
    status?: string | null;
    error?: string | null;
  };

  export const getPostsList = createAsyncThunk<PostRes,  string>(
    "posts/getPostsList",
    async (params) => {
      const { data } = await getPosts(params);
      return data as PostRes;
    }
  );

  export const getPostListById = createAsyncThunk<
  PostData,
  number,
  { rejectValue: IRejectValue }
>("posts/getPostsListById", async (id, { rejectWithValue }) => {
  try {
    return await getPostById(id);
  } catch (err: any) {
    return rejectWithValue({ data: err.response.data.message });
  }
});

export const addPost = createAsyncThunk<
  PostData,
  PostType,
  { rejectValue: IRejectValue }
>("posts/addPost", async (data, { rejectWithValue }) => {
  try {
    return await createPost(data);
  } catch (err: any) {
    return rejectWithValue({ data: err.response.data.message });
  }
});

const initialState: PostState = {
    posts: [],
    post:{},
    status: "loading",
  };

  const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      //get posts
      builder.addCase(getPostsList.pending, (state) => {
        state.posts = [];
        state.status = "loading";
      });
      builder.addCase(getPostsList.fulfilled, (state, action) => {
        state.posts = action.payload.data;
        state.status = "loaded";
      });
      builder.addCase(getPostsList.rejected, (state) => {
        state.posts = [];
        state.status = "error";
      });
      //add one post
      //   dispatch(getPostById(bookId))
      builder.addCase(getPostListById.fulfilled, (state, action) => {
        state.post = action.payload.data;
        state.status = "loaded";
      })
      builder.addCase(addPost.fulfilled, (state, action) => {
        
        state.posts = [...state.posts  || [], action.payload.data];
        state.status = "loaded";
        console.log(state.posts);
      });
    }
  });

  export const postsReducer = postsSlice.reducer;
