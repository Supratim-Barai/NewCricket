/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeToggle } from '../components/ThemeToggle';
import { Live } from "./LiveTabs";
import { LiveMatches } from "../screens/live/LiveMatches";

const Stack = createNativeStackNavigator<any>();

export const LiveStack: FC = () => (
    <Stack.Navigator
        initialRouteName="LiveStack_LiveMatches"
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
        <Stack.Screen name="LiveStack_LiveMatches" component={LiveMatches}
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
        <Stack.Screen name="LiveStack_Live" component={Live} />
    </Stack.Navigator>
);

const nameMap: Record<string, string> = {
    LiveStack_LiveMatches: "Live",
    LiveStack_Live: "Live Match"
}