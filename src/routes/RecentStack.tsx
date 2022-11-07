/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeToggle } from '../components/ThemeToggle';
import { Recent } from "../screens/recent";
import {RecentTabs} from "./RecentTabs";
// import { PointsTable } from "../screens/recent/PointsTable";
// import { ScoreCard } from "../screens/recent/ScoreCard";

const Stack = createNativeStackNavigator<any>();

export const RecentStack: FC = () => (
    <Stack.Navigator
        initialRouteName="RecentStack_Recent"
        screenOptions={({ route }) => {
            return {
                title: nameMap[route.name],
                headerStyle: {
                    backgroundColor: '#731182',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }
        }}
    >
        <Stack.Screen name="RecentStack_Recent" component={Recent}
            options={({ navigation }) => {
                return {
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
                }
            }}
        />
        <Stack.Screen name="RecentStack_RecentTabs" component={RecentTabs} />
        {/* <Stack.Screen name="RecentStack_PointsTable" component={PointsTable} /> */}
        {/* <Stack.Screen name="RecentStack_ScoreCard" component={ScoreCard} /> */}
    </Stack.Navigator>
);

const nameMap: Record<string, string> = {
    RecentStack_Recent: "Recent",
    RecentStack_RecentTabs: "Recent"
}