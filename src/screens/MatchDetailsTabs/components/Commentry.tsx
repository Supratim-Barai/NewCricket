import React, { FC, useState, useCallback, useEffect } from "react";
import styled from "styled-components/native";
import { Commentries } from "../../../components/Commentries";
import { LiveRun } from "./LiveRun";
import { CurrentScoreCard } from "./CurrentScoreCard";
import { RecentOvers } from "./RecentOvers";
import { getCommentries, CommentryData, getMatchLiveInfo, MatchLiveInfoResult } from "../../../config/axios";
import LinearGradient from "react-native-linear-gradient";
import { GradientContainer } from "../../../styles";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export const Commentry: FC<{ matchId: string }> = ({ matchId }) => {
    const [match, setMatch] = useState<MatchLiveInfoResult>();
    const [comentries, setComentries] = useState<{ [key: string]: Record<string, Array<CommentryData>> }>();

    const handleGetCommentries = useCallback(async () => {
        try {
            const { data } = await getCommentries(matchId);
            if (!data?.error) {
                setComentries(data.data.result)
            }
        } catch (e) {

        } finally {

        }
    }, [matchId, setComentries])

    const handleGetMatchLiveInfo = useCallback(async () => {
        try {
            const { data } = await getMatchLiveInfo(matchId);
            setMatch(data?.data?.result);
        } catch (e) {

        } finally {

        }
    }, [matchId, setMatch])

    useEffect(() => {
        handleGetMatchLiveInfo();
        handleGetCommentries();
    }, [])

    return (
        <Container>
            {Boolean(match) && <Card>
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
                            <View style={{
                                position: "absolute",
                                bottom: -30,
                                width: "60%",
                                marginLeft: "18%",
                                alignItems: "center"
                            }}>
                                <Text style={{ color: "#fff", fontSize: 10, textAlign: "center" }}>{match?.toss}</Text>
                            </View>
                        </TeamContainer>
                        <ScoreContainer>
                            <Score>{match?.team_b_scores}</Score>
                            <Over>{match?.team_b_over} OVER</Over>
                        </ScoreContainer>
                    </TeamScoreContainer>
                </Body>
                <RunRateContainer>
                    <RunRateText>CRR: {match?.curr_rate}</RunRateText>
                    <RunRateText>RR: {match?.rr_rate}</RunRateText>
                </RunRateContainer>
            </Card>}
            <ScrollView>
                {Boolean(match) && <CurrentScoreCard batsman={match?.batsman} bolwer={match?.bolwer} />}
                {Boolean(match) && <LiveRun batsman={match?.batsman} bolwer={match?.bolwer} />}
                {Boolean(match) && <RecentOvers last36ball={match?.last36ball || []} />}
                <Commentries comentries={comentries} currentInnings={match?.current_inning}/>
            </ScrollView>
        </Container>
    )
}

const Container = styled.View`
    background: #3f0248;
    flex:1;
`;


const Card = styled(GradientContainer)`
    margin-top: 15px;
    height: 90px;
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
