/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../types';
import { TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home } from '../screens/home';
import ViewNews from '../screens/news/ViewNews';
import VideoPlay from '../screens/video/VideoPlay';
import { ThemeToggle } from '../components/ThemeToggle';
import {PointsTable} from "../screens/home/PointsTable";
import {ScoreCard} from "../screens/home/ScoreCard";

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export const HomeRoutes: FC = () => (
    <HomeStack.Navigator initialRouteName="Home">
        <HomeStack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
                title: 'Home',
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
        <HomeStack.Screen
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
        />
        <HomeStack.Screen
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
        />

        <HomeStack.Screen
            name="HomePointTable"
            component={PointsTable}
            options={{
                title: 'Point Table',
                headerStyle: {
                    backgroundColor: '#731182',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        />
        <HomeStack.Screen
            name="HomeScoreCard"
            component={ScoreCard}
            options={{
                title: 'Score Card',
                headerStyle: {
                    backgroundColor: '#731182',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        />

    </HomeStack.Navigator>
);