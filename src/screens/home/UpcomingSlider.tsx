/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import Swiper from 'react-native-swiper';
import { View } from "react-native";
import { Upcoming } from "./Upcoming";
import { getUpcomingMatches, Match } from "../../config/axios";



const UpcomingSlider = () => {
    const [loading, setLoading] = useState(true);
    const [matches, setMatches] = useState<Array<Match>>([]);


    const getMatche = async () => {
        try {
            const { data } = await getUpcomingMatches("", 1, 3);
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
        <View style={{ marginBottom: 10 }}>
            <Swiper style={{ height: 170 }} paginationStyle={{
                bottom: -10
            }}
                activeDotColor="#fff"
            >
                {matches.map((match) => <Upcoming key={match?.match_id} match={match} />)}
            </Swiper>
        </View>
    )
}

export default UpcomingSlider;