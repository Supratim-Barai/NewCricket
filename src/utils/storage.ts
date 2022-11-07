import AsyncStorage from '@react-native-async-storage/async-storage';
import {USER_DETAILS} from '../constants';

export const setUsers = (data: any) =>
  AsyncStorage.setItem(USER_DETAILS, JSON.stringify(data));

export const getUsers = () => AsyncStorage.getItem(USER_DETAILS);

export const removeUser = () => AsyncStorage.removeItem(USER_DETAILS);
