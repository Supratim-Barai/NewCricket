/* eslint-disable prettier/prettier */
import React, { FC } from "react";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { VideoList } from "./VideoList";
import { NewsList } from "./NewsList";
import { RecentSlider } from "./RecentSlider"
import MostLiveSlider from "./MostLiveSlider"
import UpcomingSlider from "./UpcomingSlider";

const Home: FC = () => {   
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
