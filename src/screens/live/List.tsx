/* eslint-disable prettier/prettier */
import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";
import Animated, {
    useAnimatedRef,
    measure,
    useSharedValue,
    useAnimatedStyle,
    useDerivedValue,
    withSpring,
    withTiming,
    runOnUI,
} from "react-native-reanimated";

import Chevron from "./Chevron";
import Item, { ListItem } from "./ListItem";

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        backgroundColor: "white",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        overflow: "hidden"
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff"
    },
    items: {
        overflow: "hidden",
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
});

export interface List {
    name: string;
    items: ListItem[];
}

interface ListProps {
    list: List;
}

const List = ({ list }: ListProps) => {
    const aref = useAnimatedRef<View>();
    const open = useSharedValue(false);
    const progress = useDerivedValue(() =>
        open.value ? withSpring(1) : withTiming(0)
    );
    const height = useSharedValue(0);
    const headerStyle = useAnimatedStyle(() => ({
        borderBottomLeftRadius: progress.value === 0 ? 16 : 0,
        borderBottomRightRadius: progress.value === 0 ? 16 : 0,
    }));
    const style = useAnimatedStyle(() => ({
        height: height.value * progress.value + 1,
        opacity: progress.value === 0 ? 0 : 1,
    }));
    return (
        <>
            <TouchableWithoutFeedback
                onPress={() => {
                    if (height.value === 0) {
                        runOnUI(() => {
                            "worklet";
                            height.value = measure(aref).height;
                        })();
                    }
                    open.value = !open.value;
                }}
            >
                <Animated.View style={[styles.container, headerStyle]}>
                    <LinearGradient colors={['#33014a', '#07000a']} style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: 8,
                    }}>
                        <Text style={styles.title}>Total Points</Text>
                        <Chevron {...{ progress }} />
                    </LinearGradient>
                </Animated.View>
            </TouchableWithoutFeedback>
            <Animated.View style={[styles.items, style]}>
                {/* <LinearGradient colors={['#33014a', '#07000a']}> */}
                    <View
                        ref={aref}
                        onLayout={({
                            nativeEvent: {
                                layout: { height: h },
                            },
                        }) => console.log({ h })}
                    >
                        {list.items.map((item, key) => (
                            <Item
                                key={key}
                                isLast={key === list.items.length - 1}
                                {...{ item }}
                            />
                        ))}
                    </View>
                {/* </LinearGradient> */}
            </Animated.View>
        </>
    );
};

export default List;