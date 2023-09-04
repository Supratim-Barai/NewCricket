import React, { useEffect } from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { getMatchDetails } from "../../config/axios";

import { MyEntry } from "./MyEntry";
import { ScoreCard } from "./ScoreCard";
import { Commentry } from "./Commentry";
import { BallByBall } from "./BallByBall";
import { LiveMatch } from "./LiveMatch";
import { MatchInfo } from "./MatchInfo";

const Tab = createMaterialTopTabNavigator();

const MatchDetails = (props: any) => {
    const { match_id: matchId } = props?.route?.params;



    useEffect(() => {
        getMatchDetails(matchId).then(console.log).catch(console.error)
    }, [matchId])

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
            }} />
            <Tab.Screen name="Live_MatchInfo" component={MatchInfo} options={{
                lazy: true
            }} />
            <Tab.Screen name="Live_ScoreCard" component={ScoreCard} options={{
                lazy: true
            }} />
            {/* <Tab.Screen name="Live_PointTable" component={PointsTable} /> */}
            <Tab.Screen name="Live_Commentry" component={Commentry} options={{
                lazy: true
            }} />
            <Tab.Screen name="Live_BallByBall" component={BallByBall} options={{
                lazy: true
            }} />
            <Tab.Screen name="Live_MyEntry" component={MyEntry} options={{
                lazy: true
            }} />
        </Tab.Navigator>
    )
}

export default MatchDetails;

const nameMap: Record<string, string> = {
    Live_LiveMatch: "Live Match",
    Live_MatchInfo: "Match Info",
    Live_ScoreCard: "Score Card",
    // Live_PointTable: "Point Table",
    Live_Commentry: "Commentry",
    Live_BallByBall: "Ball By Ball",
    Live_MyEntry: "My Entry"
}