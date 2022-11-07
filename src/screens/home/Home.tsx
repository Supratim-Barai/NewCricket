/* eslint-disable prettier/prettier */
import React, { FC, useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import Swiper from 'react-native-swiper';
import { VideoList } from "./VideoList";
import { NewsList } from "./NewsList";
import { RecentSlider } from "./RecentSlider"
import { Upcoming } from "./Upcoming";
import MostLiveSlider from "./MostLiveSlider"
import UpcomingSlider from "./UpcomingSlider";
import { useFocusEffect } from "@react-navigation/native";

import io from "socket.io-client";

const SOCKET_URL = "http://52.66.245.248:3001";
const Home: FC = ({ navigation }: any) => {

    // const [res, setRes] = useState<any>(null);
    
    // useFocusEffect(React.useCallback(() => {
    //     const socket = io(SOCKET_URL);
    //     setRes(null);
    //     socket.on("connect", () => {
    //         console.log("socket connect");
    //       });
          
    //       socket.on("disconnect", () => {
    //         console.log("socket disconnect"); 
    //       });

    //     socket.on("getAllMatchList", (res: any) => {
    //         setRes(res);
    //         console.log("dataa........................",res);
    //     })
    //     socket.emit("getMatchList", JSON.stringify({status:"upcoming"}));
    //     return () => socket.disconnect();
    // }, []))
  
    
    return (
        <Container>
            <ScrollView>
                <MostLiveSlider />
                <UpcomingSlider />
                <RecentSlider />
                <VideoList />
                <NewsList />
            </ScrollView>
        </Container>
    )
}

export default Home;

const Container = styled.View`
    background: #3f0248;
    flex:1;
`;
const Text = styled.Text`
color:#fff;
`;
const Block = styled.View`
margin-top:5px;
`;
const LiveBlock = styled.View`
background:#60026e;
border-radius: 30px;
`;
const SubHeader = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
`;
const Line = styled.View`
height:1px;
background: #fff;
width: 42%;
`;
const SubHeaderText = styled.Text`
color:#fff;
`;
const data = [
    {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1011/200',
    },
    {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/1012/200',
    },

    {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1013/200',
    },
    {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1015/200',
    },
    {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1016/200',
    },
]