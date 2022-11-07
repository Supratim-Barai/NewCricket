/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from '../screens/AuthScreens/Landing';
import Login from '../screens/AuthScreens/Login';
import Otp from '../screens/AuthScreens/Otp';

const AuthRouteNavigator = createNativeStackNavigator();

export const AuthRoutes = () => (
    <AuthRouteNavigator.Navigator
        screenOptions={{
            headerShown: false,
        }}
        initialRouteName="Landing"
    >
        <AuthRouteNavigator.Screen name="Landing" component={Landing} />
        <AuthRouteNavigator.Screen name="Login" component={Login} />
        <AuthRouteNavigator.Screen name="Otp" component={Otp} />
    </AuthRouteNavigator.Navigator>
);