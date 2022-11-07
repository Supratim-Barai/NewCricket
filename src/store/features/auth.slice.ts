import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import Toast from 'react-native-simple-toast';
import axios, { setClientToken } from '../../config/axios';
import { removeUser, setUsers } from '../../utils/storage';

interface LoginParams {
  phone: string;
  password: string;
}

interface VerifyOTPParams {
  id: string;
  otp: string;
}

export const login = createAsyncThunk('auth/login', async (params: {
  phone: string,
  device_id: string
}) => {
  console.log('LOGIN', params);
  try {
    const { data } = await axios.post('/user/login', params);
    console.log(data);
    Toast.show(data.message);
    return data;
  } catch (error: any) {
    console.log(error?.response?.data);
    if (error?.response?.data) {
      const errData = error?.response?.data;
      if (errData.message === 'Auth error')
        Toast.show(error?.response?.data?.errors);
    }
    throw error;
  }
},
);

export const verifyOTP = createAsyncThunk('auth/verifyOTP', async (params: {
  id: string;
  otp: string;
}) => {
  console.log('OTP PARAMS', params);
  try {
    const { data } = await axios.post('/user/verify-otp', params);
    Toast.show(data.message);
    console.log(data);
    return data;
  } catch (error: any) {
    console.log(error?.response?.data);
    if (error?.response?.data) {
      const errData = error?.response?.data;
      if (errData.message === 'Auth error')
        Toast.show(error?.response?.data?.errors);
      if (errData.message === 'Validation Error')
        Toast.show(error?.response?.data?.errors?.otp?.message);
    }
    throw error;
  }
},
);


interface InitialState {
  data: any,
  params: any,
  loading: boolean,
  isLoggedIn: boolean,
  otpSent: boolean,
  id: string | undefined,
  tempOtp: string | undefined, // temporary variable
}

const initialState: InitialState = {
  data: null,
  params: null,
  loading: false,
  isLoggedIn: false,
  otpSent: false,
  id: undefined,
  tempOtp: undefined, // temporary variable
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      state.data = action.payload;
      setClientToken(action.payload.token);
      state.isLoggedIn = true;
    },
    resetUser(state) {
      state.data = null;
      state.isLoggedIn = false;
      removeUser();
    },
  },
  extraReducers: builder => {
    // login
    builder.addCase(login.pending, state => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log('PAYLOAD', action.payload);
      state.data = action.payload.data;
      state.params = action.meta.arg as any;
      state.loading = false;
      state.otpSent = true;
      state.tempOtp = action.payload.data.otp;
      state.id = action.payload.data.id;
    });
    builder.addCase(login.rejected, state => {
      state.loading = false;
    });
    // verify otp
    builder.addCase(verifyOTP.pending, state => {
      state.loading = true;
    });
    builder.addCase(verifyOTP.fulfilled, (state, action) => {
      setClientToken(action.payload.data.token);
      setUsers(action.payload.data);
      state.data = action.payload.data;
      state.isLoggedIn = true;
      state.params = null;
      state.loading = false;
      console.log(action.payload);
    });
    builder.addCase(verifyOTP.rejected, state => {
      state.loading = false;
    });
  },
});

export const { setUser, resetUser } = authSlice.actions;
export default authSlice.reducer;
