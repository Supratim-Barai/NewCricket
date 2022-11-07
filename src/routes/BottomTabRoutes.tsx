/* eslint-disable prettier/prettier */
import React, { FC } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styled from "styled-components/native";
import { HomeRoutes } from "./HomeStack";
import { NewsRoutes } from "./NewsStack";
import { LiveStack } from "./LiveStack";
import { RecentStack } from "./RecentStack";
import { UpcomingStack } from "./UpcomingStack";

const BottomTab = createBottomTabNavigator<any>();

const BottomTabRoutes: FC = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="BottomTab_Home"
            screenOptions={({ route }) => {
                return {
                    headerShown: false,
                    tabBarButton: ({ onPress, accessibilityState }) => (
                        <TouchableWithoutFeedback onPress={onPress}>
                            <Background>
                                <Oval focused={accessibilityState?.selected}>
                                    <Image source={nameMap[route.name].icon} />
                                    <Label focused={accessibilityState?.selected}>{nameMap[route.name].label}</Label>
                                </Oval>
                            </Background>
                        </TouchableWithoutFeedback>
                    ),
                    tabBarStyle: {
                        backgroundColor: '#1b0021'
                    }
                }
            }}
        >
            <BottomTab.Screen
                name="BottomTab_Home"
                component={HomeRoutes}
            />
            <BottomTab.Screen
                name="BottomTab_News"
                component={NewsRoutes}
            />
            <BottomTab.Screen
                name="BottomTab_Live"
                component={LiveStack}
            />
            <BottomTab.Screen
                name="BottomTab_Recent"
                component={RecentStack}
            />
            <BottomTab.Screen
                name="BottomTab_Upcoming"
                component={UpcomingStack}
            />
        </BottomTab.Navigator>
    )
}

export default BottomTabRoutes;

const nameMap: Record<string, { label: string, icon: any }> = {
    BottomTab_Home: {
        label: "HOME",
        icon: require("../assets/images/home.png")
    },
    BottomTab_News: {
        label: "NEWS",
        icon: require("../assets/images/news.png")
    },
    BottomTab_Live: {
        label: "LIVE",
        icon: require("../assets/images/live.png")
    },
    BottomTab_Recent: {
        label: "RECENT",
        icon: require("../assets/images/recent.png")
    },
    BottomTab_Upcoming: {
        label: "UPCOMING",
        icon: require("../assets/images/upcoming.png")
    }
}


const Background = styled.View`
    flex: auto;
    align-items: center;
    justify-content: center;
`;

const Oval = styled.View<{ focused: boolean | undefined }>`
    align-items: center;
    justify-content: center;
    padding: 6px 8px;
    ${({ focused }) => focused && `
        flex-direction: row;
        background-color: #5f026e;
        align-self: center;
        border-radius: 12px;
    `}
`;

const Label = styled.Text<{ focused: boolean | undefined }>`
    font-size: 8px;
    margin-top: 5px;
    font-weight: bold;
    color: #949394;
    ${({ focused }) => focused && `
        color: #ffffff;
        margin-left: 5px;
        margin-top: 0;
    `}
`;

const Image = styled.Image`
    height: 16px;
    width: 16px;
    resize-mode:cover;
`;
