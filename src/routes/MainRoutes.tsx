/* eslint-disable prettier/prettier */
import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainStackParamList } from "../types";
// Screens
import Landing from '../screens/AuthScreens/Landing';
import Login from '../screens/AuthScreens/Login';
import Otp from '../screens/AuthScreens/Otp';
import DrawerRoutes from "./DrawerRoutes";

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainRoutes: FC = () => {
    return (
        <MainStack.Navigator initialRouteName="Drawer">
            <MainStack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
            <MainStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <MainStack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
            <MainStack.Screen name="Drawer" component={DrawerRoutes} options={{ headerShown: false }} />
        </MainStack.Navigator>
    )
}

export default MainRoutes;