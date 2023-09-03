import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components/native";
import Swiper from 'react-native-swiper';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import MostLive from "../../components/cards/MostLive";
import { Match } from "../../config/axios";
import { useSocket, EVENTS } from "../../context/socket";

const MostLiveSlider = () => {
    const socket = useSocket();
    const [matches, setMatches] = useState<Array<Match>>([]);

    const handleGetLiveMatches = useCallback(({ result = [] }: { result: Array<Match> }) => {
        setMatches(result);
    }, [setMatches])


    useEffect(() => {
        socket.emit(EVENTS.GET_LIVE_MATCH_LIST, JSON.stringify({
            matchType: ""
        }));

        socket.on(EVENTS.GET_LIVE_MATCH_LIST_EMIT, handleGetLiveMatches);

        return () => {
            socket.off(EVENTS.GET_LIVE_MATCH_LIST_EMIT, handleGetLiveMatches);
        }
    }, [socket, handleGetLiveMatches])

    if (matches?.length === 0) return null;

    return (
        <Slider
            paginationStyle={{
                bottom: -5
            }}
            activeDotColor="#fff"
        >
            {matches?.map((match) => <MostLive key={match?.match_id} match={match} />)}
        </Slider>
    )
}

export default MostLiveSlider;

const Slider = styled(Swiper)`
    height: ${hp(18)}px;
    margin-top: 10px;
    margin-bottom: 10px;
`;
