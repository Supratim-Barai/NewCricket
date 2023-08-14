import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Swiper from 'react-native-swiper';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import MostLive from "../../components/cards/MostLive";
import { getLiveMatches, Match } from '../../config/axios';


const MostLiveSlider = () => {
    const [loading, setLoading] = useState(true);
    const [matches, setMatches] = useState<Array<Match>>([]);


    const getMatche = async () => {
        try {
            const { data } = await getLiveMatches("", 1, 3);
            if (!data?.error) {
                setMatches(data.data.result)
            }
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMatche();
    }, [])

    if (loading || matches?.length === 0) return null;
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
