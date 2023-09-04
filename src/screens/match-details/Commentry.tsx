import React, { FC, useState, useCallback, useEffect } from "react";
import styled from "styled-components/native";
import { Commentries } from "../../components/Commentries";
// import { LiveOver } from "./LiveOver";
import { LiveRun } from "./LiveRun";
import { useFocusEffect } from "@react-navigation/native";
import { io } from "socket.io-client";
import { SOCKET_URL } from "../../constants";
import { LiveMatch } from "../../types";
import { CurrentScoreCard } from "./CurrentScoreCard";
import { RecentOvers } from "./RecentOvers";
import { getCommentries, CommentryData } from "../../config/axios";

export const Commentry: FC<{ matchId: string }> = ({ matchId }) => {
    const [score, setScore] = useState<LiveMatch | undefined>(undefined);
    const [comentries, setComentries] = useState<{ [key: string]: Record<string, Array<CommentryData>> }>();

    // useFocusEffect(React.useCallback(() => {
    //     const socket = io(SOCKET_URL);
    //     socket.on("pullLiveScore", setScore);
    //     socket.on("pullCommentry", setComentries);
    //     socket.emit("getCommentry", { "match_id": `${matchId}` });
    //     socket.emit("getLiveScore", { "match_id": `${matchId}` });
    //     return () => socket.disconnect();
    // }, [matchId]))

    const handleGetCommentries = useCallback(async () => {
        try {
            const { data } = await getCommentries(matchId);
            if (!data?.error) {
                setComentries(data.data.result)
            }
        } catch (e) {

        } finally {

        }
    }, [matchId, setComentries])

    useEffect(() => {
        handleGetCommentries()
    }, [])


    console.log({ comentries })

    return (
        <Container>
            {Boolean(score) && <CurrentScoreCard batsman={score?.batsman} bolwer={score?.bolwer} />}
            {Boolean(score) && <LiveRun batsman={score?.batsman} bolwer={score?.bolwer} />}
            {Boolean(score) && <RecentOvers last36ball={score?.last36ball || []} />}
            <Commentries comentries={comentries}/>
        </Container>
    )
}

const Container = styled.View`
    background: #3f0248;
    flex:1;
`;