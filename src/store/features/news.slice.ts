/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../config/axios';


export const getAllNews = createAsyncThunk('news/getAllNews', async () => {
  try {
    const { data } = await axios.get('/news/get-all-news');
    return data?.data || [];
  } catch (error: any) {
    console.log(error?.response?.data);
    throw error;
  }
},
);

interface NewsData {
  _id: string;
  status: string;
  title: string;
  date: string;
  description: string;
  image_source_url: string;
  image_source_name: string;
  image_link: string;
  seo_link: string;
  createdAt: string;
}

interface InitialState {
  data: NewsData[],
  loading: boolean,
}

const initialState: InitialState = {
  data: [],
  loading: false,
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // getAllNews
    builder.addCase(getAllNews.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllNews.fulfilled, (state, { payload }) => {
      console.log('PAYLOAD', payload);
      state.data = payload.data;
      state.loading = false;
    });
    builder.addCase(getAllNews.rejected, state => {
      state.loading = false;
    });
  },
});

export const { } = newsSlice.actions;
export default newsSlice.reducer;
