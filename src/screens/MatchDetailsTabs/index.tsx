/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { PointsTable } from "./components/PointsTable";
import { MyEntry } from "./components/MyEntry";
import { ScoreCard } from "./components/ScoreCard";
import { Commentry } from "./components/Commentry";
import { BallByBall } from "./components/BallByBall";
import { LiveMatch } from "./components/LiveMatch";
import { MatchInfo } from "./components/MatchInfo";
import { OddHistory } from "./components/OddHistory";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { getMatchInfo, MatchInfo as MatchInfoData } from "../../config/axios";
import { ActivityIndicator, View } from "react-native";

const Tab = createMaterialTopTabNavigator();

const MatchDetailsTabs = (props: any) => {
    const matchId = props?.route?.params?.match_id;
    const [info, setInfo] = useState<MatchInfoData>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getMatchInfo(matchId).then(({ data }) => {
            setInfo(data?.data?.result)
        }).finally(() => {
            setLoading(false);
        })
    }, [matchId, setInfo, setLoading])

    if (loading) return <View style={{
        alignItems: "center",
        justifyContent: "center",
        padding: 8
    }}>
        <ActivityIndicator />
    </View>
    console.log(info)
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
            <Tab.Screen name="Live_LiveMatch" options={{
                lazy: true
            }}>
                {(props) => <LiveMatch  {...props} matchId={matchId} />}
            </Tab.Screen>
            <Tab.Screen name="Live_MatchInfo" options={{
                lazy: true
            }}>
                {(props) => <MatchInfo  {...props} matchId={matchId} />}
            </Tab.Screen>
            <Tab.Screen name="Live_ScoreCard" options={{
                lazy: true
            }}>
                {(props) => <ScoreCard  {...props} matchId={matchId} />}
            </Tab.Screen>
            <Tab.Screen name="Live_PointTable" options={{
                lazy: true
            }}>
                {(props) => <PointsTable  {...props} seriesId={`${info?.series_id}`} />}
            </Tab.Screen>
            <Tab.Screen name="Live_OddHistory" options={{
                lazy: true
            }}>
                {(props) => <OddHistory  {...props} seriesId={`${info?.series_id}`} />}
            </Tab.Screen>
            <Tab.Screen name="Live_Commentry" options={{
                lazy: true
            }}>
                {(props) => <Commentry  {...props} matchId={matchId} />}
            </Tab.Screen>
            <Tab.Screen name="Live_BallByBall" component={BallByBall} options={{
                lazy: true
            }} />
            <Tab.Screen name="Live_MyEntry" component={MyEntry} options={{
                lazy: true
            }} />
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
