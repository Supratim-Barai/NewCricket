import { useState, useCallback, useEffect } from "react";
import { getManOfTheMatche, Player } from "../config/axios";

export type MatchType = "" | "Test" | "ODI" | "T20" | "T10";

export const useGetManOfTheMatch = (matchId: number) => {
    const [loading, setLoading] = useState(true);
    const [mom, setMom] = useState<Player>();

    const getMatches = useCallback(async () => {
        try {
            const { data } = await getManOfTheMatche(matchId);
            console.log("getManOfTheMatche", JSON.stringify(data))
            if (data?.data?.result) {
                setMom(data?.data?.result?.player);
            }
        } finally {
            setLoading(false);
        }
    }, [matchId])


    useEffect(() => {
        getMatches();
    }, [])

    return {
        loading,
        mom,
    }
}