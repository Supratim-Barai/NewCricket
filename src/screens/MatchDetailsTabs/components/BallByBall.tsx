import { useFocusEffect } from "@react-navigation/native";
import React, { FC, Fragment, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Container } from "../../../styles";
import { OverDetails } from "./OverDetails";
import io from "socket.io-client";
import mockdata from "../../../mockdata/ballbyball";

const SOCKET_URL = "http://52.66.245.248:3001";

const Tab = createMaterialTopTabNavigator();

export const BallByBall: any = () => {
    const [res, setRes] = useState(mockdata.data);

    // useFocusEffect(React.useCallback(() => {
    //     const socket = io(SOCKET_URL);
    //     setRes(null);
    //     socket.on("ballByballDataScore", (res: any) => {
    //         setRes(res);
    //     })
    //     socket.emit("ballByballData", {});
    //     return () => socket.disconnect();
    // }, []))
    // console.log("bo",res?.perOver);

    const innings = Object.keys(res);
    console.log(innings);
    return (
        <Fragment>
            <Tab.Navigator
                initialRouteName={innings[0]}
                screenOptions={({ route }) => ({
                    tabBarScrollEnabled: true,
                    tabBarLabelStyle: {
                        fontSize: 10,
                        fontWeight: 'bold',
                        color: "#fff"
                    },
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
                {Object.entries(res).map(([key, data]) => (
                    <Tab.Screen name={key} options={{
                        lazy: true
                    }}>
                        {(props) => <BallByBallComponent data={data} />}
                    </Tab.Screen>
                ))}
            </Tab.Navigator>
        </Fragment>
    )
}

const BallByBallComponent: FC<{ data: any }> = ({ data }) => {
    return (
        <Container>
            <ScrollView>
                {Object.entries(data).map(([title, ballbyball]: [string, any]) => <OverDetails key={title} title={title} ballByBall={ballbyball} />)}
                {/* {res?.perOver?.map((ballByBall: any, k: number) => {
                    return (
                        <OverDetails key={k} ballByBall={ballByBall}/>
                    )
                })} */}
            </ScrollView>
        </Container>
    )
}
