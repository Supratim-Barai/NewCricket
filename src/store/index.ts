import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authReducer from './features/auth.slice';
import themeReducer from './features/theme.slice';
import newsReducer from './features/news.slice';
import videosReducer from './features/videos.slice';
import upcomingReducer from "./features/upcoming.slice";
import recentReducer from './features/recent.slice';
import liveReducer from './features/live.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    news: newsReducer,
    videos: videosReducer,
    upcoming: upcomingReducer,
    recent: recentReducer,
    live: liveReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;