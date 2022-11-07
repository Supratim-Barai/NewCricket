import React, { FC } from "react";
import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Circle } from "./Circle";

export const Commentries: FC = () => {
    return (
        <Container>
            <GradientContainer colors={['#33014a', '#07000a']}>
                <Heading>
                    <HeadingText>COMMENTRY</HeadingText>
                </Heading>
                <Row>
                    <Circle>6</Circle>
                    <Over>0.6</Over>
                    <Comment>MS DHONI TO PATTINSON, SIX RUNS, TO LONG OFF.</Comment>
                </Row>
                <Divider />
                <Row>
                    <Circle>6</Circle>
                    <Over>0.6</Over>
                    <Comment>MS DHONI TO PATTINSON, SIX RUNS, TO LONG OFF.</Comment>
                </Row>
                <Divider />
                <Row>
                    <Circle>6</Circle>
                    <Over>0.6</Over>
                    <Comment>MS DHONI TO PATTINSON, SIX RUNS, TO LONG OFF.</Comment>
                </Row>
                <Divider />
                <Row>
                    <Circle>6</Circle>
                    <Over>0.6</Over>
                    <Comment>MS DHONI TO PATTINSON, SIX RUNS, TO LONG OFF.</Comment>
                </Row>
                <Divider />
                <Row>
                    <Circle>6</Circle>
                    <Over>0.6</Over>
                    <Comment>MS DHONI TO PATTINSON, SIX RUNS, TO LONG OFF.</Comment>
                </Row>
                <Height />
            </GradientContainer>
        </Container>
    )
}

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
