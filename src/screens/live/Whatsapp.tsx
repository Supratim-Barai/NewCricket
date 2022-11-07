import React from "react";
import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";
import {
    widthPercentageToDP as wp
} from "react-native-responsive-screen";

export const Whatsapp = () => (
    <TeamNameContainer colors={['#5f026e', '#33014a', '#5f026e']}>
        <Text>GET GENUINE ID WHATSAPP @1234567890</Text>
    </TeamNameContainer>
)

const TeamNameContainer = styled(LinearGradient)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 100%;
    border-radius: 30;
    margin-top: 15px;
`;

const Text = styled.Text`
    color: #fff;
    font-size: ${wp(3)}px;
    font-family: "Roboto-Bold";
`;