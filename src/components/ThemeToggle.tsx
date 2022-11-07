import React, { FC, useEffect, useState } from "react";
import { Animated, TouchableOpacity, Easing } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Entypo";

export const ThemeToggle = () => {
    const [isOn, setIsOn] = useState(false);
    const [value] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(value, {
            toValue: isOn ? 1 : 0,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: false
        }).start();
    }, [isOn,value]);

    useEffect(() => {
        value.setValue(isOn ? 0 : 1);
    }, [value, isOn])

    const marginLeft = value.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 33]
    })
    return (
        <Container>
            <TouchableOpacity onPress={() => setIsOn(x => !x)}>
                <ToggleContainer>
                    <Wheel style={{ marginLeft }}>
                        <Icon name="adjust" size={16} />
                    </Wheel>
                </ToggleContainer>
            </TouchableOpacity>
        </Container>
    )
}

const Container = styled.View`
    flex-direction: row;
    align-items: center;
`;

const ToggleContainer = styled.View`
    width: 64px;
    height: 30px;
    margin-left: 3px;
    border-radius: 15px;
    justify-content: center;
    border-width: 1.2px;
    border-color: #fff;
    border-radius: 15px;
    padding: 0px 1.2px 0px 1.2px;
`;

const Wheel = styled(Animated.View)`
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 12.5px;
    align-items: center;
    justify-content: center;
`;