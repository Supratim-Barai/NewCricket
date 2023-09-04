/* eslint-disable prettier/prettier */
import React, { FC, useCallback, useEffect, useState } from "react";
import { Container, GradientContainer } from "../../styles";
import { CurrentScoreCard } from "./CurrentScoreCard";
import { CurrentPartnership } from "./CurrentPartnership";
import { Whatsapp } from "./Whatsapp";
import { Session } from "./Session";
import { Exchnage } from "./Exchange";
import { ActivityIndicator, Alert, ScrollView, View } from "react-native";
import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import { useSocket, EVENTS } from "../../context/socket";
import { RecentOvers } from "./RecentOvers";

export const LiveMatch: FC<{ matchId: string }> = ({ matchId }) => {
    const socket = useSocket();
    const [match, setMatch] = useState<any>();

    const handleGetLiveMatches = useCallback((data: any) => {
        setMatch(data?.result)
    }, [setMatch])

    useEffect(() => {
        socket.emit(EVENTS.GET_LIVE_SCORE_API, JSON.stringify({
            matchId
        }));

        socket.on(EVENTS.GET_LIVE_SCORE_API_EMIT, handleGetLiveMatches);

        return () => {
            console.log("soket off for", matchId);
            socket.off(EVENTS.GET_LIVE_SCORE_API_EMIT, handleGetLiveMatches);
        }
    }, [socket, matchId, handleGetLiveMatches])

    if (!match) return (
        <Container style={{
            flex: 1,
            justifyContent: "center"
        }}>
            <ActivityIndicator color={"#fff"} />
        </Container>
    )
    return (
        <Container>
            <ScrollView>
                <Card>
                    <Body>
                        <TeamScoreContainer>
                            <ScoreContainer>
                                <Score>{match?.team_a_scores}</Score>
                                <Over>{match?.team_a_over} OVER</Over>
                            </ScoreContainer>
                            <TeamContainer>
                                <TeamNameContainer colors={['#5f026e', '#43045e', '#5f026e']}>
                                    <TeamName>{match?.team_a_short}</TeamName>
                                    <VsContainer>
                                        <VsText>VS</VsText>
                                    </VsContainer>
                                    <TeamName>{match?.team_b_short}</TeamName>
                                </TeamNameContainer>
                                <Logo source={{ uri: match?.team_a_img }} style={{ left: -2.5 }} />
                                <Logo source={{ uri: match?.team_b_img }} style={{ right: -2.5 }} />
                            </TeamContainer>
                            <ScoreContainer>
                                <Score>{match?.team_b_scores}</Score>
                                <Over>{match?.team_b_over} OVER</Over>
                            </ScoreContainer>
                        </TeamScoreContainer>
                    </Body>
                    <View style={{ flex: 1 }}></View>
                    <RunRateContainer>
                        <RunRateText>CRR: {match?.curr_rate}</RunRateText>
                        <RunRateText>RR: {match?.rr_rate}</RunRateText>
                    </RunRateContainer>
                </Card>
                <Exchnage />
                <Session />
                <Whatsapp />
                <RecentOvers last36ball={match?.last36ball || []} />
                <CurrentPartnership partnership={match?.partnership} />
                <CurrentScoreCard batsman={match?.batsman} bolwer={match?.bolwer} />
            </ScrollView>
        </Container>
    )
}


const Card = styled(GradientContainer)`
    margin-top: 15px;
    height: 150px;
    padding: 10px 20px;
`;

const RunRateContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const RunRateText = styled.Text`
    color: #fff;
    font-size: 10px;
    font-family: "Roboto-Bold";
`;

const Body = styled.View`
    margin-top: 10px;
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

const TeamScoreContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content:center;
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
