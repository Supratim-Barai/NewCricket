import { useState, useCallback, useEffect } from "react";
import { getUpcomingMatches, Match } from "../config/axios";

export type MatchType = "" | "Test" | "ODI" | "T20" | "T10";

export const useGetUpcomingMatches = (type: MatchType = "", limit: number = 5) => {
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [matches, setMatches] = useState<Array<Match>>([]);
    const [page, setPage] = useState(1);
    const [isReachedEnd, setIsReachedEnd] = useState(false);

    const getMatches = useCallback(async () => {
        try {
            const { data } = await getUpcomingMatches(type, 1, limit);
            if (data?.data?.result?.length > 0) {
                setMatches(data.data.result);
            }
        } finally {
            setRefreshing(false);
            setLoading(false);
        }
    }, [])

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        getMatches();
    }, [refreshing]);

    const fetchMore = useCallback(async () => {
        if (loading || isReachedEnd) return;
        try {
            setLoading(true);
            console.log("Test Page====", page + 1)
            const { data } = await getUpcomingMatches(type, page + 1, limit);
            if (data?.data?.result?.length > 0) {
                setMatches(results => [...results, ...data.data.result])
                setPage(page => page + 1);
            } else {
                setIsReachedEnd(true);
            }
        } finally {
            console.log("Finally", page + 1)
            setLoading(false);
        }
    }, [loading, page, isReachedEnd, setIsReachedEnd]);

    useEffect(() => {
        getMatches();
    }, [])

    return {
        refreshing,
        loading,
        matches,
        isReachedEnd,
        onRefresh,
        fetchMore
    }
}