import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import All from "./All";
import T20 from "./T20";
import Odi from "./Odi";
import Test from "./Test";
import T10 from "./T10";


const Tab = createMaterialTopTabNavigator();

export function Upcoming() {
    return (
        <Tab.Navigator
            initialRouteName="Upcoming_All"
            screenOptions={({ route }) => ({
                tabBarScrollEnabled: true,
                tabBarLabelStyle: {
                    fontSize: 10,
                    fontWeight: 'bold',
                    color: "#fff"
                },
                tabBarLabel: nameMap[route.name],
                tabBarIndicatorStyle: {
                    height: "50%",
                    width: 80,
                    left: 10,
                    top: "25%",
                    position: "relative",
                    borderRadius: 15,
                    backgroundColor: "#290533"
                },
                tabBarItemStyle: {
                    width: 100,
                },
                tabBarStyle: {
                    backgroundColor: '#3f0248'
                }
            })}
        >
            <Tab.Screen
                name="Upcoming_All"
                component={All}
                options={{
                    lazy: true
                }}
            />
            <Tab.Screen
                name="Upcoming_T20"
                component={T20}
                options={{
                    lazy: true
                }}
            />
            <Tab.Screen
                name="Upcoming_Odi"
                component={Odi}
                options={{
                    lazy: true
                }}
            />
            <Tab.Screen
                name="Upcoming_Test"
                component={Test}
                options={{
                    lazy: true
                }}
            />
            <Tab.Screen
                name="Upcoming_T10"
                component={T10}
                options={{
                    lazy: true
                }}
            />
        </Tab.Navigator>
    );
}

const nameMap: Record<string, string> = {
    Upcoming_All: "ALL",
    Upcoming_T20: "T20",
    Upcoming_Odi: "ODI",
    Upcoming_Test: "TEST",
    Upcoming_T10: "T10"
}