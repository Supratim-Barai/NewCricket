/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Recent from "./Recent";
import { PointsTable } from "./PointsTable";
import { ScoreCard } from "./ScoreCard";

type ParamList = {
    Recent: undefined;
    RecentPointTable: undefined;
    RecentScoreCard: undefined;
}

const HomeStack = createNativeStackNavigator<ParamList>();

export const RecentRoutes: FC = () => (
    <HomeStack.Navigator initialRouteName="Recent">
        <HomeStack.Screen
            name="Recent"
            component={Recent}
            options={({ navigation }) => ({
                title: 'Recent',
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
            name="RecentPointTable"
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
            name="RecentScoreCard"
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