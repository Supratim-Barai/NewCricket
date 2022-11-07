import React, { FC, useEffect, useState } from "react";
import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LeftMatchTitle, RightMatchTitle } from "../../components/MatchTitle";
import { MatchType } from "../../components/MatchType";
import { MatchPoint } from "../../components/MatchPoint";
import { LeftEspectedScore, RightEspectedScore } from "../../components/EspectedScore";
import { IMatch } from "./UpcomingSlider";
import {RemainingTime} from "../../components/RemainingTime";
import moment from "moment";

const dateFormat = (date:string, time:string) => {
    return `${date} 08:00:00`;
}

export const Upcoming: FC<any> = ({ match }) => {
    console.log(moment())

    return (
        <Container>
            <GradientContainer colors={['#33014a', '#07000a']}>
                <Header>
                    <LeftMatchTitle title={match?.tournamentName} />
                    <MatchType name="UPCOMING" />
                    <RightMatchTitle title={`${match.categoryName} ${match.startTime} ${match.match_time}`} />
                </Header>
                <Body>
                    <TeamScoreContainer>
                        <RemainingTime.Container>
                            <RemainingTime date={`${match.startTime} ${match.match_time}`}/>
                        </RemainingTime.Container>
                        {/* <MatchRemainingTimeContainer>
                            <RemainingTime>{timer}</RemainingTime>
                        </MatchRemainingTimeContainer> */}
                        <ScoreContainer>
                            <Score>00-0</Score>
                            <Over>00.0 OVER</Over>
                        </ScoreContainer>
                        <TeamContainer>
                            <TeamNameContainer colors={['#5f026e', '#43045e']}>
                                <TeamName>{match.teamAName}</TeamName>
                                <VsContainer>
                                    <VsText>VS</VsText>
                                </VsContainer>
                                <TeamName>{match.teamBName}</TeamName>
                            </TeamNameContainer>
                            <Logo source={{ uri: match.teamALogo }} style={{ left: -2.5 }} />
                            <Logo source={{ uri: match.teamBLogo }} style={{ right: -2.5 }} />
                        </TeamContainer>
                        <ScoreContainer>
                            <Score>00-0</Score>
                            <Over>00.0 OVER</Over>
                        </ScoreContainer>
                    </TeamScoreContainer>
                    <LeftEspectedScore over={20} score={`${match.teamAscore1}-${match.teamAscore2}`} />
                    <MatchPoint leftValue={match?.teamRate1} title={match?.favouriteTeamName} rightValue={match?.teamRate2} />
                    <RightEspectedScore over={20} score={`${match.teamBscore1}-${match.teamBscore2}`} />
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
    justify-content: space-between;
`;

const Logo = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 25px;
    border-color: #f0f0f0e2;
    border-width: 4px;
    position: absolute;
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
    justify-content: center;
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
    height: 25px;
    justify-content: space-evenly;
    padding: 0 40px;
`;
const TeamName = styled.Text`
    color: #fff;
    font-weight: bold;
`;
const VsContainer = styled.View`
    height: 25px;
    width: 25px;
    border-radius: 12.5px;
    background-color: #07000a;
    justify-content: center;
    align-items: center;
`;
const VsText = styled.Text`
    font-size: 12px;
    color: #fff;
    font-weight: bold;
`;

// const MatchRemainingTimeContainer = styled.View`
//     position: absolute;
//     border-radius: 10px;
//     border-width: 1px;
//     border-color: #fff;
//     top: -15px;
//     padding: 2px 20px;
//     background-color:#5f026e;
// `;

// const RemainingTime = styled.Text`
//     color: #fff;
//     font-size: 8px;
//     font-family: 'Roboto-Regular';
// `;
