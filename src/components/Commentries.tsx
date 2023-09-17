import React, { FC, Fragment, useState } from "react";
import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Circle } from "./Circle";
import { CommentryData } from "../config/axios";
import { ScrollView, View } from "react-native";
import { Button } from "react-native-elements";

interface CommentriesProps {
    comentries: {
        [key: string]: Record<string, CommentryData[]>;
    } | undefined;
}

export const Commentries: FC<CommentriesProps> = ({ comentries }) => {
    const inning2 = comentries?.["2 Inning"] ?? {}, inning1 = comentries?.["1 Inning"] ?? {};
    const [activeInnings, setActiveInnings] = useState<string | undefined>("1 Inning")
    const inningKeys = comentries ? Object.keys(comentries) : [];
    return (
        <Container>
            <GradientContainer colors={['#33014a', '#07000a']}>
                <Heading>
                    <HeadingText>COMMENTRY</HeadingText>
                </Heading>
                <View style={{ flexDirection: "row", paddingHorizontal: 15, marginBottom: 15 }}>
                    {inningKeys.map(inning => <Button key={inning} title={inning} buttonStyle={{ marginRight: 10, minWidth: 100, borderRadius: 20, backgroundColor: inning == activeInnings ? "#5f026e" : 'transparent' }} onPress={() => setActiveInnings(inning)} />)}
                </View>
                {activeInnings === "2 Inning" ? Object.values(inning2).map((commentries) => commentries.map(commentry => (
                    <Fragment>
                        <Row>
                            <Circle>{commentry?.data?.overs?.split(".")?.[0]}</Circle>
                            <Over>{commentry?.data?.overs}</Over>
                            <Comment>{commentry?.data?.title}</Comment>
                        </Row>
                        <Divider />
                    </Fragment>
                ))) : null}
                {activeInnings === "1 Inning" ? Object.values(inning1).map((commentries) => commentries.map(commentry => (
                    <Fragment>
                        <Row>
                            <Circle>{commentry?.data?.overs?.split(".")?.[0]}</Circle>
                            <Over>{commentry?.data?.overs}</Over>
                            <Comment>{commentry?.data?.title}</Comment>
                        </Row>
                        <Divider />
                    </Fragment>
                ))) : null}
                <Height />
            </GradientContainer>
        </Container>
    )
}




const Title = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const Height = styled.View`
    height: 10px;
`;

const Row = styled.View`
    padding: 10px 15px;
    flex-direction: row;
    align-items: center;
`;

const Over = styled.Text`
    font-size: ${wp(4)}px;
    font-family: 'Roboto-Bold';
    text-align: center;
    margin: 0 10px;
    color: #cb28e5;
`;

const Comment = styled.Text`
    color: #fff;
    font-size: ${hp(1.5)}px;
    font-family: 'Roboto-Bold';
    text-align: center;
`;

const Container = styled.View`
    margin-top: 4px;
    border-radius: 30px;
    background-color: #5f026e;
`;

const GradientContainer = styled(LinearGradient)`
    border-radius: 30px;
    margin: 4px 0 0 0;
`;

const Heading = styled.View`
    background-color: #5f026e;
    align-self: center;
    width: ${wp(24)}px;
    height: ${wp(6)}px;
    justify-content: center;
    border-radius: ${wp(3)}px;
    margin-bottom: 10px;
`;

const HeadingText = styled.Text`
    color: #fff;
    font-size: ${wp(2.5)}px;
    font-family: 'Roboto-Bold';
    text-align: center;
`;

const Divider = styled.View`
    background: #3f0248;
    height: 1.5px;
`;
