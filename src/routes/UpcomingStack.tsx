/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeToggle } from '../components/ThemeToggle';
import { Upcoming } from "../screens/upcoming";

const Stack = createNativeStackNavigator<any>();

export const UpcomingStack: FC = () => (
    <Stack.Navigator
        initialRouteName="UpcomingStack_Live"
        screenOptions={({ route, navigation }) => {
            return {
                title: nameMap[route.name],
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
            }
        }}
    >
        <Stack.Screen name="UpcomingStack_Live" component={Upcoming} />
    </Stack.Navigator>
);

const nameMap: Record<string, string> = {
    UpcomingStack_Live: "Upcoming"
}