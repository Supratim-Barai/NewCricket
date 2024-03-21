/* eslint-disable prettier/prettier */
import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainStackParamList } from "../types";
// Screens
import Landing from '../screens/AuthScreens/Landing';
import Login from '../screens/AuthScreens/Login';
import Otp from '../screens/AuthScreens/Otp';
import DrawerRoutes from "./DrawerRoutes";
import { MyProfile } from "../screens/my-profile";
import { PasswordChange } from "../screens/password-change";
import { RateUs } from "../screens/rate-us";
import { ShareWithFriends } from "../screens/share-with-friends";
import { UpdateApp } from "../screens/update-app";
import { AboutUs } from "../screens/about-us";
import { TermsOfUs } from "../screens/terms-of-us";
import { PrivacyPolicy } from "../screens/privacy-policy";
import { FollowUs } from "../screens/follow-us";
// import MatchDetails from "../screens/match-details";
import MatchDetailsTabs from "../screens/MatchDetailsTabs";

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainRoutes: FC = () => {
    return (
        <MainStack.Navigator initialRouteName="MatchDetails">
            <MainStack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
            <MainStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <MainStack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
            <MainStack.Screen name="Drawer" component={DrawerRoutes} options={{ headerShown: false }} />
            <MainStack.Screen
                name="MyProfile"
                component={MyProfile}
                options={() => ({
                    title: 'My Profile',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#731182',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                })}
            />
            <MainStack.Screen
                name="PasswordChange"
                component={PasswordChange}
                options={() => ({
                    title: 'Password Change',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#731182',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                })} />
            <MainStack.Screen
                name="RateUs"
                component={RateUs}
                options={() => ({
                    title: 'Rate Us',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#731182',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                })} />
            <MainStack.Screen
                name="ShareWithFriends"
                component={ShareWithFriends}
                options={() => ({
                    title: 'Share With Friends',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#731182',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                })} />
            <MainStack.Screen
                name="UpdateApp"
                component={UpdateApp}
                options={() => ({
                    title: 'Update App',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#731182',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                })} />
            <MainStack.Screen
                name="AboutUs"
                component={AboutUs}
                options={() => ({
                    title: 'About Us',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#731182',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                })} />
            <MainStack.Screen
                name="TermsOfUs"
                component={TermsOfUs}
                options={() => ({
                    title: 'Terms Of Us',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#731182',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                })} />
            <MainStack.Screen
                name="PrivacyPolicy"
                component={PrivacyPolicy}
                options={() => ({
                    title: 'Privacy Policy',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#731182',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                })} />
            <MainStack.Screen
                name="FollowUs"
                component={FollowUs}
                options={() => ({
                    title: 'Follow Us',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#731182',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                })} />
            <MainStack.Screen
                name="MatchDetails"
                component={MatchDetailsTabs}
                options={({ route }: any) => ({
                    title: '',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#731182',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                })} />
        </MainStack.Navigator>
    )
}

export default MainRoutes;