import React, { FC, useEffect, useState } from "react";
import { View } from "react-native";
import Swiper from "react-native-swiper";
import { Recent } from "./Recent";
import { getRecentMatches, Match } from "../../config/axios";

export const RecentSlider: FC = () => {
    const [loading, setLoading] = useState(true);
    const [recent, setRecent] = useState<Array<Match>>([]);

    const getMatche = async () => {
        try {
            const { data } = await getRecentMatches("", 1, 3);
            if (!data?.error) {
                setRecent(data.data.result)
            }
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMatche();
    }, [])

    if (loading || recent?.length === 0) return null;
    return (
        <View style={{ marginBottom: 10 }}>
            <Swiper style={{ height: 170 }} paginationStyle={{
                bottom: -10
            }}
                activeDotColor="#fff"
            >
                {recent?.map((match) => <Recent key={match.match_id} recent={match} />)}
            </Swiper>
        </View>
    )
}
