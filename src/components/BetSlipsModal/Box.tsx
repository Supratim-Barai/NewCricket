import React, { FC } from "react";
import { TextProps } from "react-native";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const Box: FC<TextProps> = (props) => (
    <Container>
        <Text {...props} />
    </Container>
)

export const BoxContainer = styled.View`
    flex-direction: row;
`;

const Container = styled.View`
    background-color: #60026e;
    flex: 1;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin: 2px;
`;

const Text = styled.Text`
    color: #fff;
    font-size: ${hp(2)}px;
    font-family: 'Roboto-Bold';
`;