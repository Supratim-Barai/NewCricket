/* eslint-disable prettier/prettier */
import React, { FC } from "react";
import { Container, GradientContainer } from "../../styles";
import { CurrentScoreCard } from "./CurrentScoreCard";
import { CurrentPartnership } from "./CurrentPartnership";
// import { RecentOvers } from "./RecentOvers";
import { Whatsapp } from "./Whatsapp";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../store";
import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import { SOCKET_URL } from "../../constants";
import { useFocusEffect } from "@react-navigation/native";
import { io } from "socket.io-client";
import { setLiveMatch } from "../../store/features/live.slice";

export const LiveMatch: FC<{ matchId: string }> = ({ matchId }) => {
    const { liveMatch } = useAppSelector(state => state.live);
    const dispatch = useAppDispatch();
    console.log("resssss....123");
    useFocusEffect(React.useCallback(() => {
        const socket = io(SOCKET_URL);
        dispatch(setLiveMatch(undefined));
        socket.on("ballByballDataScore", (res: any) => {
            console.log("resssss....",res);
            dispatch(setLiveMatch(res));
        })
        socket.emit("ballByballData", { "match_id": `${matchId}` })
        return () => socket.disconnect();
    }, [matchId, dispatch]))

    if (!liveMatch) return (
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
                                <Score>{liveMatch?.team_a_scores}</Score>
                                <Over>{liveMatch?.team_a_over} OVER</Over>
                            </ScoreContainer>
                            <TeamContainer>
                                <TeamNameContainer colors={['#5f026e', '#43045e', '#5f026e']}>
                                    <TeamName>{liveMatch?.team_a_short}</TeamName>
                                    <VsContainer>
                                        <VsText>VS</VsText>
                                    </VsContainer>
                                    <TeamName>{liveMatch?.team_b_short}</TeamName>
                                </TeamNameContainer>
                                <Logo source={{ uri: liveMatch?.team_a_img }} style={{ left: -2.5 }} />
                                <Logo source={{ uri: liveMatch?.team_b_img }} style={{ right: -2.5 }} />
                            </TeamContainer>
                            <ScoreContainer>
                                <Score>{liveMatch?.team_b_scores}</Score>
                                <Over>{liveMatch?.team_b_over} OVER</Over>
                            </ScoreContainer>
                        </TeamScoreContainer>
                    </Body>
                    <View style={{ flex: 1 }}></View>
                    <RunRateContainer>
                        <RunRateText>CRR:{liveMatch?.curr_rate}</RunRateText>
                        <RunRateText>RR:{liveMatch?.rr_rate}</RunRateText>
                    </RunRateContainer>
                </Card>
                <Whatsapp />
                {/* <RecentOvers last36ball={liveMatch?.last36ball || []} /> */}
                <CurrentPartnership partnership={liveMatch?.partnership} />
                <CurrentScoreCard batsman={liveMatch?.batsman} bolwer={liveMatch?.bolwer} />
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
