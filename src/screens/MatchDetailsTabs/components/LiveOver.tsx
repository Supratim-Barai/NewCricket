import React, { FC } from "react";
import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const LiveOver: FC = () => (
    <GradientContainer colors={['#33014a', '#07000a']}>
        <Text>OVER 9 -</Text>
        <Circle bgColor="#000">
            <CircleText color="#fff">2</CircleText>
        </Circle>
        <Circle bgColor="red">
            <CircleText>W</CircleText>
        </Circle>
        <Circle>
            <CircleText>WD</CircleText>
        </Circle>
        <Circle bgColor="#000">
            <CircleText color="#fff">1</CircleText>
        </Circle>
        <Circle bgColor="green">
            <CircleText>4</CircleText>
        </Circle>
        <Circle bgColor="yellow">
            <CircleText>6</CircleText>
        </Circle>
        <Text>= 14</Text>
    </GradientContainer>
)

const GradientContainer = styled(LinearGradient)`
    border-radius: 30px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 2px 0;
    padding: 8px 0;
`;

const Text = styled.Text`
    color: #fff;
    font-size: ${hp(1.25)}px;
    font-family: 'Roboto-Bold';
`;

const Circle = styled.View<{ bgColor?: string }>`
    width: ${wp(5.6)}px;
    height: ${wp(5.6)}px;
    background-color: ${({ bgColor }) => bgColor ?? "#fff"};
    border-radius: ${wp(3)}px;
    justify-content: center;
    align-items: center;
    margin: 0 2px;
    border: 1px solid #fff;
`;

const CircleText = styled.Text<{ color?: string }>`
    color: ${({ color }) => color ?? "#000"};
    font-size: ${hp(1.75)}px;
    font-family: 'Roboto-Bold';
    text-align: center;
`;