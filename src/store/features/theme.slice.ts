import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ThemeState {
  value: number
}

// Define the initial state using that type
const initialState = {
  value: 0,
} as ThemeState;

export const themeSlice = createSlice({
  name: 'theme',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = themeSlice.actions

export default themeSlice.reducer