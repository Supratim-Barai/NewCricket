/* eslint-disable prettier/prettier */
import React, { FC } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabRoutes from "./BottomTabRoutes";
import SideBar from "../components/SideBar";
import { MyProfile } from "../screens/my-profile";
import { PasswordChange } from "../screens/password-change";
import { RateUs } from "../screens/rate-us";
import { ShareWithFriends } from "../screens/share-with-friends";
import { UpdateApp } from "../screens/update-app";
import { AboutUs } from "../screens/about-us";
import { TermsOfUs } from "../screens/terms-of-us";
import { PrivacyPolicy } from "../screens/privacy-policy";
import { FollowUs } from "../screens/follow-us";

const Drawer = createDrawerNavigator();

const DrawerRoutes: FC = () => {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false,
            drawerStyle: {
                backgroundColor: "rgba(0,0,0,0.8)"
            }
        }}
            drawerContent={props => <SideBar {...props} />}
        >
            <Drawer.Screen
                name="BottomTabRoutes"
                component={BottomTabRoutes}
            />
            {/* <Drawer.Screen
                name="MyProfile"
                component={MyProfile}
                options={() => ({
                    title: 'MyProfile',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#731182',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                })}
            /> */}
            {/* <Drawer.Screen
                name="PasswordChange"
                component={PasswordChange}
                options={() => ({
                    title: 'PasswordChange',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#731182',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                })} /> */}
            {/* <Drawer.Screen
                name="RateUs"
                component={RateUs}
                options={() => ({
                    title: 'RateUs',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#731182',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                })} /> */}
            {/* <Drawer.Screen
                name="ShareWithFriends"
                component={ShareWithFriends}
                options={() => ({
                    title: 'ShareWithFriends',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#731182',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                })} /> */}
            {/* <Drawer.Screen
                name="UpdateApp"
                component={UpdateApp}
                options={() => ({
                    title: 'UpdateApp',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#731182',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                })} /> */}
            {/* <Drawer.Screen
                name="AboutUs"
                component={AboutUs}
                options={() => ({
                    title: 'AboutUs',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#731182',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                })} /> */}
            {/* <Drawer.Screen
                name="TermsOfUs"
                component={TermsOfUs}
                options={() => ({
                    title: 'TermsOfUs',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#731182',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                })} /> */}
            {/* <Drawer.Screen
                name="PrivacyPolicy"
                component={PrivacyPolicy}
                options={() => ({
                    title: 'PrivacyPolicy',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#731182',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                })} /> */}
            {/* <Drawer.Screen
                name="FollowUs"
                component={FollowUs}
                options={() => ({
                    title: 'FollowUs',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#731182',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                })} /> */}
        </Drawer.Navigator>
    )
}

export default DrawerRoutes;