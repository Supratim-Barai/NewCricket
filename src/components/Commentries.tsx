import React, { FC, Fragment } from "react";
import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Circle } from "./Circle";
import { CommentryData } from "../config/axios";
import { ScrollView } from "react-native";

interface CommentriesProps {
    comentries: {
        [key: string]: Record<string, CommentryData[]>;
    } | undefined;
}

export const Commentries: FC<CommentriesProps> = ({ comentries }) => {
    const inning2 = comentries?.["2 Inning"] ?? {}, inning1 = comentries?.["1 Inning"] ?? {};
    const inning1Arr = Object.values(inning1), inning2Arr = Object.values(inning2);
    return (
        <Container>
            <GradientContainer colors={['#33014a', '#07000a']}>
                <Heading>
                    <HeadingText>COMMENTRY</HeadingText>
                </Heading>
                <ScrollView>
                    {inning2Arr?.length > 0 ? <Title>Commentries of Inning 2</Title> : null}
                    {Object.values(inning2).map((commentries) => commentries.map(commentry => (
                        <Fragment>
                            <Row>
                                <Circle>{commentry?.data?.over ?? commentry?.data?.overs?.[0]}</Circle>
                                <Over>{commentry?.data?.over ?? commentry?.data?.overs}</Over>
                                <Comment>{commentry?.data?.title}</Comment>
                            </Row>
                            <Divider />
                        </Fragment>
                    )))}
                    {inning1Arr?.length > 0 ? <Title>Commentries of Inning 1</Title> : null}
                    {Object.values(inning1).map((commentries) => commentries.map(commentry => (
                        <Fragment>
                            <Row>
                                <Circle>{commentry?.data?.over ?? commentry?.data?.overs?.[0]}</Circle>
                                <Over>{commentry?.data?.over ?? commentry?.data?.overs}</Over>
                                <Comment>{commentry?.data?.title}</Comment>
                            </Row>
                            <Divider />
                        </Fragment>
                    )))}
                    <Height />
                </ScrollView>
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
    color: #fff;
    font-size: ${wp(4.5)}px;
    font-family: 'Roboto-Bold';
    text-align: center;
    margin: 0 10px;
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
