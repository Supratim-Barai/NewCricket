/* eslint-disable prettier/prettier */
import React, { FC } from "react";
import { Container } from "../../styles";
import { CurrentScoreCard } from "./CurrentScoreCard";
import { CurrentPartnership } from "./CurrentPartnership";
import { RecentOvers } from "./RecentOvers";
import { Whatsapp } from "./Whatsapp";
import { Session } from "./Session";
import { Exchnage } from "./Exchange";
import { ScrollView } from "react-native";
import { LiveMatchAutoUpdate } from "./LiveMatchAutoUpdate";

export const OddHistory: FC = () => {
    return (
        <Container>
            <ScrollView>
                <LiveMatchAutoUpdate />
                <Exchnage />
                <Session />
                <Whatsapp />
                <RecentOvers />
                <CurrentPartnership />
                <CurrentScoreCard />
            </ScrollView>
        </Container>
    )

}