/* eslint-disable prettier/prettier */
import React from "react";
import { PointsTable } from "./components/PointsTable";
import { MyEntry } from "./components/MyEntry";
import { ScoreCard } from "./components/ScoreCard";
import { Commentry } from "./components/Commentry";
import { BallByBall } from "./components/BallByBall";
import { LiveMatch } from "./components/LiveMatch";
import { MatchInfo } from "./components/MatchInfo";
import { OddHistory } from "./components/OddHistory";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const MatchDetailsTabs = (props: any) => {
    const matchId = props?.route?.params?.match_id;
    const seriesId = props?.route?.params?.series_id;
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
            {/* <Tab.Screen name="Live_LiveMatch" component={LiveMatch} /> */}
            <Tab.Screen name="Live_LiveMatch">
                {(props) => <LiveMatch  {...props} matchId={matchId} />}
            </Tab.Screen>
            <Tab.Screen name="Live_MatchInfo">
                {(props) => <MatchInfo  {...props} matchId={matchId} />}
            </Tab.Screen>
            <Tab.Screen name="Live_ScoreCard">
                {(props) => <ScoreCard  {...props} matchId={matchId} />}
            </Tab.Screen>
            <Tab.Screen name="Live_PointTable">
                {(props) => <PointsTable  {...props} seriesId={seriesId} />}
            </Tab.Screen>
            <Tab.Screen name="Live_OddHistory">
                {(props) => <OddHistory  {...props} seriesId={seriesId} />}
            </Tab.Screen>
            <Tab.Screen name="Live_Commentry">
                {(props) => <Commentry  {...props} matchId={matchId} />}
            </Tab.Screen>
            <Tab.Screen name="Live_BallByBall" component={BallByBall} />
            <Tab.Screen name="Live_MyEntry" component={MyEntry} />
        </Tab.Navigator>
    );
}

export default MatchDetailsTabs;

const nameMap: Record<string, string> = {
    Live_LiveMatch: "Live Match",
    Live_MatchInfo: "Match Info",
    Live_ScoreCard: "Score Card",
    Live_PointTable: "Point Table",
    Live_OddHistory: "Odd History",
    Live_Commentry: "Commentry",
    Live_BallByBall: "Ball By Ball",
    Live_MyEntry: "My Entry"
}
