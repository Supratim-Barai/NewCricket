/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../config/axios';


export const getAllUpcomingGames = createAsyncThunk('game/getAllUpcomingGames', async () => {
  try {
    const { data } = await axios.get('game/list-upcomming-game');
    return data?.data?.list || [];
  } catch (error: any) {
    console.log(error?.response?.data);
    throw error;
  }
},
);

export interface Match {
  date_wise: string,
  fav_team: string,
  match_date: string,
  match_id: number,
  match_time: string,
  match_type: string,
  matchs: string,
  max_rate: string,
  min_rate: string,
  series: string,
  series_id: number,
  team_a: string,
  team_a_id: number,
  team_a_img: string,
  team_a_short: string,
  team_b: string,
  team_b_id: number,
  team_b_img: string,
  team_b_short: string,
  venue: string;
}

interface InitialState {
  data: Array<Match>,
  loading: boolean,
}

const initialState: InitialState = {
  data: [],
  loading: false,
}

const upcomingSlice = createSlice({
  name: 'upcoming',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllUpcomingGames.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllUpcomingGames.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    });
    builder.addCase(getAllUpcomingGames.rejected, state => {
      state.loading = false;
    });
  },
});

export const { } = upcomingSlice.actions;
export default upcomingSlice.reducer;
