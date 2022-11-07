import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import Toast from 'react-native-simple-toast';
import axios from '../../config/axios';


export const getAllVideos = createAsyncThunk('videos/getAllVideos', async () => {
  try {
    const { data } = await axios.get('/video/get-all-video');
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
  url: string;
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
  name: 'videos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // getAllVideos
    builder.addCase(getAllVideos.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllVideos.fulfilled, (state, action) => {
      console.log('PAYLOAD', action.payload);
      state.data = action.payload.data;
      state.loading = false;
    });
    builder.addCase(getAllVideos.rejected, state => {
      state.loading = false;
    });
  },
});

export const { } = newsSlice.actions;
export default newsSlice.reducer;
