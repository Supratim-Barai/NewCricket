import React, { FC, useEffect, useState } from "react";
import styled from "styled-components/native";
import { MatchType } from "../../components/MatchType";
import { getRecentMatches } from "../../services";
import { Card } from "../../ui";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { io } from "socket.io-client";
import { View } from "react-native";
import Swiper from "react-native-swiper";
import { Recent } from "./Recent";

const SOCKET_URL = "http://52.66.245.248:3001";
export interface IMatch {
    date_wise: string,
    match_date: string,
    match_id: number,
    match_time: string,
    match_type: string,
    matchs: string,
    result: string,
    series: string,
    team_a: string,
    team_a_id: number,
    team_a_img: string,
    team_a_over: string,
    team_a_scores: string,
    team_a_short: string,
    team_b: string,
    team_b_id: number,
    team_b_img: string,
    team_b_over: string,
    team_b_scores: string,
    team_b_short: string,
    venue: string
};

export const RecentSlider: FC = () => {

    const [loading, setLoading] = useState(true);
    const [recent, setRecent] =  useState<any>([]);

    const getMatche = async () => {
        try {
            const { data } = await getRecentMatches();
            setRecent(data?.data?.list?.[0])
        } catch (e) {

        } finally {
            setLoading(false);
        }
    }

    useFocusEffect(React.useCallback(() => {
        const socket = io(SOCKET_URL);
        setRecent([]);
        socket.on("connect", () => {
            console.log("socket connect");
        });

        socket.on("disconnect", () => {
            console.log("socket disconnect");
        });

        socket.on("getAllMatchList", (res: any) => {
            setRecent(res);
            console.log("dataa recent.............", res);
        })
        socket.emit("getMatchList", JSON.stringify({ status: "complete" }));
        return () => socket.disconnect();
    }, []))
    useEffect(() => {
        getMatche();
    }, [getMatche])

    if (loading || recent?.length === 0) return null;
    return (
        <View style={{ marginBottom: 10 }}>
        <Swiper style={{ height: 170 }} paginationStyle={{
            bottom: -10
        }}
            activeDotColor="#fff"
        >
            {recent?.map((d:any) => <Recent key={d._id} recent={d} />)}
        </Swiper>
    </View>
    )
}


const MatchContainer = styled.View`
    flex: 1;
    justify-content: center;
`;
const ManOfMatchContainer = styled.View`
    flex: 1;
    align-items: flex-end;
`;

const ManOfMatchContainerTitle = styled.Text`
    color: #fff;
    font-size: 8px;
    font-family: 'Roboto-Black';
`;

const Player = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
`;

const Button = styled.TouchableOpacity`
    background-color: #5f026e;
    height: 16px;
    padding: 0 6px;
    border-radius: 7.5px;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
`;

const ButtonText = styled.Text`
    color: #fff;
    font-size: 8px;
    font-family: 'Roboto-Black';
`;

const Row = styled.View`
    flex-direction: row;
    align-items: center;
`;

const Caption = styled.Text`
    color: #fff;
    font-size: 9px;
    font-family: 'Roboto-Regular';
`;

const Container1 = styled.View`
    align-items:center;
    margin-right: 15px;
`;

const Triangle = styled.View`
    border-top-width: 20px;
    border-right-width: 30px;
    border-bottom-width: 0;
    border-left-width: 30px;
    border-top-color: #5f026e;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
`;

const Text1 = styled.Text`
    color: #fff;
    font-size: 10px;
    font-family: 'Roboto-Black';
    position: absolute;
`;

const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const Left = styled.View`
    background-color: #5f026e;
    flex-direction: row;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 4px 15px;
`;

const Title = styled.Text`
    color: #fff;
    font-size: 10px;
    font-family: 'Roboto-Black';
`;

const Body = styled.View`
    flex: 1;
    flex-direction: row;
    padding: 10px;
`;

const Logo = styled.Image`
    height: 32px;
    width: 32px;
    border-radius: 16px;
    border-color: #f0f0f0e2;
    border-width: 4px;
    margin-right: 10px;
`;

const ScoreContainer = styled.View`
    background-color: #33014a;
    height: 24px;
    padding: 0 5px;
    border-radius: 12px;
    justify-content: center;
    margin-left: 10px;
`;

const Score = styled.Text`
    color: #fff;
    font-family: 'Roboto-Black';
    font-size: 12px;
`;

const TeamName = styled.Text`
    color: #fff;
    font-family: 'Roboto-Black';
    flex: 1;
`;


const Footer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #5f026e;
    height: 18px;
`;

const Text = styled.Text`
    color: #fff;
    font-size: 10px;
    font-family: 'Roboto-Black';
`;
