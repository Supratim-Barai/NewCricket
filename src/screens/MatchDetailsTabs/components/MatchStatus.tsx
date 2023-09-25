import React from "react";
import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";
import { GradientContainer } from "../../../styles";

export const MatchStatus = () => (
    <Container>
        <TeamContainer>
            <TeamNameContainer colors={['#5f026e', '#43045e', '#5f026e']}>
                <TeamName>CSK</TeamName>
                <VsContainer>
                    <VsText>VS</VsText>
                </VsContainer>
                <TeamName>MI</TeamName>
            </TeamNameContainer>
            <Logo source={require("../../assets/images/csk.png")} style={{ left: -2.5 }} />
            <Logo source={require("../../assets/images/mi.jpeg")} style={{ right: -2.5 }} />
        </TeamContainer>
        <Caption>CSK WON THE TOSS & OPTED TO BAT</Caption>
    </Container>
)

const Container = styled(GradientContainer)`
    margin-top: 15px;
    height: 80px;
    padding: 10px 20px;
    justify-content: center;
`;

const Caption = styled.Text`
    color: #fff;
    font-size: 10px;
    font-family: "Roboto-Bold";
    align-self: center;
    margin-top: -10px;
`;

const Logo = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 25px;
    border-color: #f0f0f0e2;
    border-width: 4px;
    position: absolute;
`;


const TeamContainer = styled.View`
    flex-direction: row;
    align-items: center;
    flex: 1;
`;
const TeamNameContainer = styled(LinearGradient)`
    flex-direction: row;
    align-items: center;
    flex: 1;
    background-color:#5f026e;
    height: 24px;
    justify-content: space-evenly;
    padding: 0 40px;
`;
const TeamName = styled.Text`
    color: #fff;
    font-family: 'Roboto-Black';
`;
const VsContainer = styled.View`
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background-color: #07000a;
    justify-content: center;
    align-items: center;
`;
const VsText = styled.Text`
    font-size: 10px;
    color: #fff;
    font-family: 'Roboto-Black';
`;
