import React, { useEffect } from "react";
import All from "./All";
import T20 from "./T20";
import Odi from "./Odi";
import Test from "./Test";
import T10 from "./T10";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useAppDispatch } from "../../store";
import { getAllRecentGames } from "../../store/features/recent.slice";

const Tab = createMaterialTopTabNavigator();

export function Recent() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllRecentGames());
    }, [dispatch])

    return (
        <Tab.Navigator
            initialRouteName="Recent_All"
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
            <Tab.Screen name="Recent_All" component={All} />
            <Tab.Screen name="Recent_T20" component={T20} />
            <Tab.Screen name="Recent_Odi" component={Odi} />
            <Tab.Screen name="Recent_Test" component={Test} />
            <Tab.Screen name="Recent_T10" component={T10} />
        </Tab.Navigator>
    );
}

const nameMap: Record<string, string> = {
    Recent_All: "ALL",
    Recent_T20: "T20",
    Recent_Odi: "ODI",
    Recent_Test: "TEST",
    Recent_T10: "T10"
}