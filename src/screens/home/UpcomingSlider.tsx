/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components/native";
import Swiper from 'react-native-swiper';
import { View } from "react-native";
import { Upcoming } from "./Upcoming";
import axios from '../../config/axios';
import { useFocusEffect } from "@react-navigation/native";
import io from "socket.io-client";

const SOCKET_URL = "http://52.66.245.248:3001";
export interface IMatch {
    date_wise: string,
    fav_team: string,
    match_date: string,
    match_id: number,
    match_time: string,
    match_type: string,
    matchs: string,
    max_rate: number,
    min_rate: number,
    series: string,
    series_id: number,
    team_a: string,
    team_a_id: number,
    team_a_img: string,
    team_a_short: string,
    team_b: string,
    team_b_id: number,
    team_b_img: string,
    team_b_short: string,
    venue: string;
}

const UpcomingSlider = () => {
    const [list, setList] = useState([]);
    
    const getUpcommingMatches = useCallback(async () => {
        const { data } = await axios.get('game/list-upcomming-game');
        setList(data?.data?.list || [])
    }, [setList])

    const [res, setRes] = useState<any>(null);

    useFocusEffect(React.useCallback(() => {
        const socket = io(SOCKET_URL);
        setRes([]);
        socket.on("connect", () => {
            console.log("socket connect");
          });
          
          socket.on("disconnect", () => {
            console.log("socket disconnect"); 
          });

        socket.on("getAllMatchList", (res: any) => {
            setRes(res);
            console.log("dataa........................",res);
        })
        socket.emit("getMatchList", JSON.stringify({status:"upcoming"}));
        return () => socket.disconnect();
    }, []))

    // useEffect(() => {
    //     getUpcommingMatches();
    //     const interval = setInterval(() => { 
    //         getUpcommingMatches();
    //     }, 45000);
    //     return () => {
    //         clearInterval(interval);
    //     }
    // }, [getUpcommingMatches])

    const matches = res?.slice(0, 3) || [];
    if (matches?.length === 0) return null;

    return (
        <View style={{ marginBottom: 10 }}>
            <Swiper style={{ height: 170 }} paginationStyle={{
                bottom: -10
            }}
                activeDotColor="#fff"
            >
                {matches?.map((d: IMatch) => <Upcoming key={d.match_id} match={d} />)}
            </Swiper>
        </View>
    )
}

export default UpcomingSlider;