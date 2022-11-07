/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NewsStackParamList } from '../types';
import { TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home } from '../screens/home';
import { ThemeToggle } from '../components/ThemeToggle';
import {News} from "../screens/news";

const HomeStack = createNativeStackNavigator<NewsStackParamList>();

export const NewsRoutes: FC = () => (
    <HomeStack.Navigator initialRouteName="News">
        <HomeStack.Screen
            name="News"
            component={News}
            options={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: '#731182',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerLeft: () => (
                    <TouchableOpacity
                        onPress={() => navigation.openDrawer()}
                        style={{
                            marginRight: 10,
                        }}>
                        <Ionicons name="menu" size={24} color="#fff" />
                    </TouchableOpacity>
                ),
                headerRight: () => <ThemeToggle />
            })}
        />
        {/* <HomeStack.Screen
            name="ViewNews"
            component={ViewNews}
            options={{
                title: 'NewsDetails',
                headerStyle: {
                    backgroundColor: '#731182',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        /> */}
        {/* <HomeStack.Screen
            name="VideoPlay"
            component={VideoPlay}
            options={{
                title: 'Video',
                headerStyle: {
                    backgroundColor: '#731182',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        /> */}

    </HomeStack.Navigator>
);