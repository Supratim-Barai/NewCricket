import React, { useEffect, useState } from "react";
// import { PointsTable } from "./PointsTable";
// import { BetSlipsModal } from "../../components/BetSlipsModal";
import { MyEntry } from "./MyEntry";
import { ScoreCard } from "./ScoreCard";
import { Commentry } from "./Commentry";
import { BallByBall } from "./BallByBall";
import { LiveMatch } from "./LiveMatch";
import { MatchInfo } from "./MatchInfo";
// import { OddHistory } from "./OddHistory";
// import { LiveChat } from "./LiveChat";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useAppDispatch } from "../../store";
import { setLiveMatch } from "../../store/features/live.slice";
import { io } from "socket.io-client";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator();

const SOCKET_URL = "http://52.66.245.248:3001";

// const socket = io(SOCKET_URL);

// socket.on("connect", () => {
//     console.log("connect", socket.id); // x8WIv7-mJelg7on_ALbx
// });

// socket.on("disconnect", () => {
//     console.log("disconnect", socket.id); // undefined
// });


export function Live(props: any) {
    const matchId = props?.route?.params?.match_id;
    const dispatch = useAppDispatch();

    useFocusEffect(React.useCallback(() => {
        const socket = io(SOCKET_URL);
        dispatch(setLiveMatch(undefined));
        socket.on("pullLiveScore", (res: any) => {
            dispatch(setLiveMatch(res));
        })
        socket.emit("getLiveScore", { "match_id": `${matchId}` })
        return () => socket.disconnect();
      }, [matchId, dispatch]))

    return (
        <Tab.Navigator
            initialRouteName="Live_LiveMatch"
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
            <Tab.Screen name="Live_LiveMatch" component={LiveMatch} options={{
                    lazy: true
                }}/>
            <Tab.Screen name="Live_MatchInfo" component={MatchInfo} options={{
                    lazy: true
                }}/>
            <Tab.Screen name="Live_ScoreCard" component={ScoreCard} options={{
                    lazy: true
                }}/>
            {/* <Tab.Screen name="Live_PointTable" component={PointsTable} /> */}
            <Tab.Screen name="Live_Commentry" component={Commentry} options={{
                    lazy: true
                }}/>
            <Tab.Screen name="Live_BallByBall" component={BallByBall} options={{
                    lazy: true
                }}/>
            <Tab.Screen name="Live_MyEntry" component={MyEntry} options={{
                    lazy: true
                }}/>
        </Tab.Navigator>
    );
}

const nameMap: Record<string, string> = {
    Live_LiveMatch: "Live Match",
    Live_MatchInfo: "Match Info",
    Live_ScoreCard: "Score Card",
    // Live_PointTable: "Point Table",
    Live_Commentry: "Commentry",
    Live_BallByBall: "Ball By Ball",
    Live_MyEntry: "My Entry"
}
