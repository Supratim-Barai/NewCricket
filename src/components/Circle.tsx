import React, { FC } from "react";
import styled from "styled-components/native";
import { TextProps } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

export const Circle: FC<TextProps> = (props) => (
    <Container>
        <CircleText {...props} />
    </Container>
)

const Container = styled.View`
    width: ${wp(5.6)}px;
    height: ${wp(5.6)}px;
    background-color: #fff;
    border-radius: ${wp(3)}px;
    justify-content: center;
    align-items: center;
`;

const CircleText = styled.Text`
    color: #5f026e;
    font-size: ${hp(1.75)}px;
    font-family: 'Roboto-Bold';
    text-align: center;
`;