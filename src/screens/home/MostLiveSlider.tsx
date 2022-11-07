import React, { 
    // useCallback, 
    // useEffect, 
    useState 
} from "react";
import styled from "styled-components/native";
import Swiper from 'react-native-swiper';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import MostLive from "../../components/cards/MostLive";
// import axios from '../../config/axios';
// import { ActivityIndicator } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { io } from "socket.io-client";
const SOCKET_URL = "http://52.66.245.248:3001";

const MostLiveSlider = () => {
    const [matches, setMatches] = useState<any>([]);

    // useFocusEffect(React.useCallback(() => {
    //     const socket = io(SOCKET_URL);
    //     setMatches([]);
    //     socket.on("pullLiveList", (res: any) => {
    //         setMatches(res);
    //     })
    //     socket.emit("getLiveList", {});
    //     return () => socket.disconnect();
    //   }, []))

   

    useFocusEffect(React.useCallback(() => {
        const socket = io(SOCKET_URL);
        setMatches([]);
        socket.on("connect", () => {
            console.log("socket connect");
          });
          
          socket.on("disconnect", () => {
            console.log("socket disconnect"); 
          });

        socket.on("getAllMatchList", (res: any) => {
            setMatches(res);
            console.log("dataa live...................",res);
        })
        socket.emit("getMatchList", JSON.stringify({status:"live"}));
        return () => socket.disconnect();
    }, []))

    // const [list, setList] = useState([]);

    // const getLiveMatches = useCallback(async () => {
    //     const { data } = await axios.get('game/list-live-game');
    //     setList(data?.data?.list || [])
    // }, [setList])

    // useEffect(() => {
    //     getLiveMatches();
    //     const interval = setInterval(() => { 
    //         getLiveMatches();
    //     }, 30000);
    //     return () => {
    //         clearInterval(interval);
    //     }
    // }, [getLiveMatches])

    const newmatches = matches.slice(0, 3) || [];
    if (newmatches?.length === 0) return null;
    return (
        <Slider
            paginationStyle={{
                bottom: -5
            }}
            activeDotColor="#fff"
        >
            {newmatches?.map((match: any) => <MostLive key={match?.match_id} match={match} />)}
        </Slider>
    )
}

export default MostLiveSlider;

const Slider = styled(Swiper)`
    height: ${hp(18)}px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

// const Loader = styled.ActivityIndicator.attrs({
//     size: 20,
//     color: "#fff"
// })`
//     margin-vertical: 40px;
// `;