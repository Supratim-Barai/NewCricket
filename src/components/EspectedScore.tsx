import React, { FC } from "react";
import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";

interface EspectedScoreProps {
    score: string;
    over: number;
}

export const LeftEspectedScore: FC<EspectedScoreProps> = ({ over, score }) => (
    <LeftEspectedScoreContiner>
        <LeftOverContainer colors={['#5f026e', '#43045e']}>
            <Over>{over} Over</Over>
            <ArrowRight>
                {/* <Arrow source={require("../assets/images/arrow-right.png")} resizeMode="cover" /> */}
            </ArrowRight>
        </LeftOverContainer>
        <EspectedScore>{score}</EspectedScore>
    </LeftEspectedScoreContiner>
)

export const RightEspectedScore: FC<EspectedScoreProps> = ({ over, score }) => (
    <RightEspectedScoreContiner>
        <EspectedScore>
            {score}
        </EspectedScore>
        <RightOverContainer colors={['#5f026e', '#43045e']}>
            <ArrowLeft>
                {/* <Arrow source={require("../assets/images/arrow-left.png")} resizeMode="cover" /> */}
            </ArrowLeft>
            <Over>{over} Over</Over>
        </RightOverContainer>
    </RightEspectedScoreContiner>
)

const LeftEspectedScoreContiner = styled.View`
    position: absolute;
    left: 0;
    bottom: 10px;
    flex-direction: row;
    align-items: center;
`;
const RightEspectedScoreContiner = styled.View`
    position: absolute;
    right: 0;
    bottom: 10px;
    flex-direction: row;
    align-items: center;
`;

const LeftOverContainer = styled(LinearGradient)`
    background-color: #5f026e;
    padding: 2px 15px 2px 10px;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
    align-items: center;
    flex-direction: row;
`

const RightOverContainer = styled(LinearGradient)`
    background-color: #5f026e;
    padding: 2px 10px 2px 15px;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    align-items: center;
    flex-direction: row;
`

const EspectedScore = styled.Text`
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    margin: 0 8px;
`
const Over = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #fff;
`;

const Arrow = styled.Image`
    height: 12px;
    width: 12px;
`;

const ArrowRight = styled.View`
    position: absolute;
    right: -6px;
`;
const ArrowLeft = styled.View`
    position: absolute;
    left: -6px;
`;