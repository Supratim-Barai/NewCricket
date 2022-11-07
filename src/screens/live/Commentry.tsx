import React, { FC, useState } from "react";
import styled from "styled-components/native";
import { Commentries } from "../../components/Commentries";
// import { LiveOver } from "./LiveOver";
import { LiveRun } from "./LiveRun";
import { useFocusEffect } from "@react-navigation/native";
import { io } from "socket.io-client";
import { SOCKET_URL } from "../../constants";
import { LiveMatch } from "../../types";
import {CurrentScoreCard} from "./CurrentScoreCard";
import { RecentOvers } from "./RecentOvers";

export const Commentry: FC<{ matchId: string }> = ({ matchId }) => {
    const [score, setScore] = useState<LiveMatch | undefined>(undefined);
    const [comentries, setComentries] = useState<Array<any>>([]);

    useFocusEffect(React.useCallback(() => {
        const socket = io(SOCKET_URL);
        socket.on("pullLiveScore", setScore);
        socket.on("pullCommentry", setComentries);
        socket.emit("getCommentry", { "match_id": `${matchId}` });
        socket.emit("getLiveScore", { "match_id": `${matchId}` });
        return () => socket.disconnect();
    }, [matchId]))

    return (
        <Container>
            {Boolean(score) && <CurrentScoreCard batsman={score?.batsman} bolwer={score?.bolwer}/>}
            {Boolean(score) && <LiveRun batsman={score?.batsman} bolwer={score?.bolwer}/>}
            {Boolean(score) && <RecentOvers last36ball={score?.last36ball || []} />}
            <Commentries />
        </Container>
    )
}

const Container = styled.View`
    background: #3f0248;
    flex:1;
`;