import React, { useEffect } from "react";
import All from "./All";
import T20 from "./T20";
import Odi from "./Odi";
import Test from "./Test";
import T10 from "./T10";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useAppDispatch } from "../../store";
import { getAllUpcomingGames } from "../../store/features/upcoming.slice";

const Tab = createMaterialTopTabNavigator();

export function Upcoming() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllUpcomingGames());
    }, [dispatch])

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
            <Tab.Screen name="Upcoming_All" component={All} />
            <Tab.Screen name="Upcoming_T20" component={T20} />
            <Tab.Screen name="Upcoming_Odi" component={Odi} />
            <Tab.Screen name="Upcoming_Test" component={Test} />
            <Tab.Screen name="Upcoming_T10" component={T10} />
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