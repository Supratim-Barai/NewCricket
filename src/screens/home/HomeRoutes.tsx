/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from "./Home";
import { PointsTable } from "./PointsTable";
import { ScoreCard } from "./ScoreCard";

type ParamList = {
    Home: undefined;
    HomePointTable: undefined;
    HomeScoreCard: undefined;
}

const HomeStack = createNativeStackNavigator<ParamList>();

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
                // headerRight: () => <ThemeToggle />
            })}
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