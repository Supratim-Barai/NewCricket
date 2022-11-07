import React, { FC, ReactNode } from "react";
import styled from "styled-components/native";
import { View, useWindowDimensions, TouchableOpacity, Animated } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

interface TabItem {
    key: string;
    title: string;
    component: ReactNode
}

interface TopTabProps {
    items: Array<TabItem>
}

const TopTab: FC<TopTabProps> = ({ items }) => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);

    const renderTabBar = (props: any) => {
        const inputRange = props.navigationState.routes.map((x: any, i: any) => i);

        return (
            <View style={{
                flexDirection: 'row',
                backgroundColor: "#3f0248;"
            }}>
                {props.navigationState.routes.map((route: any, i: any) => {
                    const opacity = props.position.interpolate({
                        inputRange,
                        outputRange: inputRange.map((inputIndex: number) =>
                            inputIndex === i ? 1 : 0.5
                        ),
                    });
                    return (
                        <TouchableOpacity
                            key={i}
                            activeOpacity={1}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: "#3f0248",
                                height: 36
                            }}
                            onPress={() => setIndex(i)}>
                            <Animated.View style={{
                                backgroundColor: i === index ? "#33014a" : "transparent",
                                height: 24,
                                width: 60,
                                borderRadius: 20,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Animated.Text style={{
                                    opacity,
                                    color: "#fff",
                                    textAlign: "center",
                                    fontSize: 12,
                                    fontFamily: "Roboto-Bold"
                                }}>{route.title}</Animated.Text>
                            </Animated.View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    return (
        <TabView
            navigationState={{ index, routes: getRoutes(items) }}
            renderScene={getSceneMap(items)}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    )
}

export default TopTab;

const getSceneMap = (items: TabItem[]) => {
    return SceneMap(items.reduce((previous, { key, component }) => ({ ...previous, [key]: component }), {}))
}

const getRoutes = (items: TabItem[]) => {
    return items.map(({ key, title }) => ({ key, title }));
}