import React, { FC } from "react";
import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient';
import { MatchType } from "../../components/MatchType";
import { T20 } from "../../components/T20";
import { LeftMatchTitle } from "../../components/MatchTitle";
import { MatchPoint } from "../../components/MatchPoint";

export const MostLive: FC<{ match: any }> = ({ match }) => {
    console.warn(match);
    return (
        <Container>
            <GradientContainer colors={['#33014a', '#07000a']}>
                <Header>
                    <LeftMatchTitle title="Indian Premier League 2021" />
                    <MatchType name="MOST LIVE" />
                    <T20 />
                </Header>
                <Body>
                    <TeamScoreContainer>
                        <MatchUpdateText>CSK WON THE TOSS & OPTED TO BAT</MatchUpdateText>
                        <ScoreContainer>
                            <Score>110-5</Score>
                            <Over>16.5 OVER</Over>
                        </ScoreContainer>
                        <TeamContainer>
                            <TeamNameContainer colors={['#5f026e', '#43045e', '#5f026e']}>
                                <TeamName>CSK</TeamName>
                                <VsContainer>
                                    <VsText>VS</VsText>
                                </VsContainer>
                                <TeamName>MI</TeamName>
                            </TeamNameContainer>
                            <Logo source={{ uri: "https://picsum.photos/id/1011/200" }} style={{ left: -2.5 }} />
                            <Logo source={{ uri: "https://picsum.photos/id/1011/200" }} style={{ right: -2.5 }} />
                        </TeamContainer>
                        <ScoreContainer>
                            <Score>00-0</Score>
                            <Over>00.0 OVER</Over>
                        </ScoreContainer>
                    </TeamScoreContainer>
                    <MatchPoint leftValue={60} title="CHENNAI" rightValue={66} />
                </Body>
            </GradientContainer>
        </Container>
    )
}

const Container = styled.View`
    background-color: #5f026e;
    flex: 1;
    height: 150px;
    margin: 8px 4px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    justify-content: center;
    overflow: hidden;
`;

const GradientContainer = styled(LinearGradient)`
    height: 130px;
    flex: 1;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    margin: 4px 0 0 0;
    overflow: hidden;
`;


const Header = styled.View`
    flex-direction: row;
`;

const Logo = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 25px;
    border-color: #f0f0f0e2;
    border-width: 4px;
    position: absolute;
`;

const Name = styled.Text`
    color: #fff;
    width: 40px;
    font-size: 16px;
    font-weight: 500;
`;

const ScoreContainer = styled.View`
    align-items: flex-end;
    padding: 5px;
`;

const Score = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 14px;
`;

const Body = styled.View`
    flex: 1;
    justify-content: center;
`;

const TeamScoreContainer = styled.View`
flex-direction: row;
align-items: center;
justify-content:center;
margin: 0 5px;
margin-top: -20px;
`;
const TeamContainer = styled.View`
flex-direction: row;
align-items: center;
flex: 1;
`;
const Over = styled.Text`
font-size: 8px;
color: #fff;
`;
const TeamNameContainer = styled(LinearGradient)`
flex-direction: row;
align-items: center;
flex: 1;
background-color:#5f026e;
height: 20px;
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

const MatchUpdateText = styled.Text`
    color: #fff;
    font-size: 8px;
    font-weight: bold;
    align-self: center;
    position: absolute;
    top: -12px;
`;