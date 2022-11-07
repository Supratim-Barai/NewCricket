/* eslint-disable prettier/prettier */
import React, { FC, useState } from "react";
import { ScrollView } from "react-native";
import { Container, GradientContainer } from "../../styles";
import { PlayerList } from "./PlayerList";
import { TeamForm } from "./TeamForm";
import { VenueScoringPattern } from "./VenueScoringPattern";
import { VenueDetails } from "./VenueDetails";
import { InningDetails } from "./InningDetails";
import { useFocusEffect } from "@react-navigation/native";
import { io } from "socket.io-client";
import { SOCKET_URL } from "../../constants";
import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

interface MatchInfo {
    match_date: string;
    match_time: string;
    match_type: string;
    matchs: string;
    series: string;
    team_a: string;
    team_a_id: number;
    team_a_img: string;
    team_a_short: string;
    team_b: string;
    team_b_id: number;
    team_b_img: string;
    team_b_short: string;
    toss: string;
    venue: string;
}

interface Player {
    image: string;
    name: string;
    play_role: string;
    player_id: number;
}

export interface Squad {
    flag: string;
    name: string;
    short_name: string;
    player: Array<Player>
}

interface Squads {
    team_a: Squad;
    team_b: Squad;
}

export const MatchInfo: FC<{ matchId: string }> = ({ matchId }) => {
    const [info, setInfo] = useState<MatchInfo | undefined>(undefined);
    const [squads, setSquads] = useState<Squads>({} as Squads);
    
    useFocusEffect(React.useCallback(() => {
        const socket = io(SOCKET_URL);
        socket.on("pullInfo", setInfo);
        socket.on("pullSquads", setSquads);
        socket.emit("getInfo", { "match_id": `${matchId}` });
        socket.emit("getSquads", { "match_id": `${matchId}` });
        return () => socket.disconnect();
    }, [matchId]))

    if (!info) return null;
    return (
        <Container>
            <ScrollView>
                <MatchStatus>
                    <TeamContainer>
                        <TeamNameContainer colors={['#5f026e', '#43045e', '#5f026e']}>
                            <TeamName>{info?.team_a_short}</TeamName>
                            <VsContainer>
                                <VsText>VS</VsText>
                            </VsContainer>
                            <TeamName>{info.team_b_short}</TeamName>
                        </TeamNameContainer>
                        <Logo source={{ uri: info?.team_a_img }} style={{ left: -2.5 }} />
                        <Logo source={{ uri: info?.team_b_img }} style={{ right: -2.5 }} />
                    </TeamContainer>
                    <Caption>{info.toss}</Caption>
                </MatchStatus>
                {Object.values(squads).map((squad: Squad) => <PlayerList key={squad.short_name} squad={squad} />)}
                <VenueDetails />
                <InningDetails />
                <TeamForm />
                <VenueScoringPattern />
            </ScrollView>
        </Container>
    )
}

const MatchStatus = styled(GradientContainer)`
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
