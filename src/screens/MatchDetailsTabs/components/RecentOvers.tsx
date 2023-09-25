import React, { FC } from "react";
import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Row, Col } from "../../../styles";

const BallByBall: FC<{ ball: string }> = ({ ball }) => {
    switch (ball) {
        case "0":
            return (
                <Circle bgColor="#000">
                    <CircleText color="#fff">0</CircleText>
                </Circle>
            )

        case "1":
            return (
                <Circle bgColor="#000">
                    <CircleText color="#fff">1</CircleText>
                </Circle>
            )

        case "2":
            return (
                <Circle bgColor="#000">
                    <CircleText color="#fff">2</CircleText>
                </Circle>
            )

        case "3":
            return (
                <Circle bgColor="#000">
                    <CircleText color="#fff">3</CircleText>
                </Circle>
            )

        case "4":
            return (
                <Circle bgColor="#b8c231">
                    <CircleText>4</CircleText>
                </Circle>
            )

        case "6":
            return (
                <Circle bgColor="#de8648">
                    <CircleText>6</CircleText>
                </Circle>
            )

        case "W":
            return (
                <Circle bgColor="#f8342f">
                    <CircleText>W</CircleText>
                </Circle>
            )

        case "Wb":
            return (
                <Circle bgColor="#fff">
                    <CircleText>WD</CircleText>
                </Circle>
            )

        case "Nb":
            return (
                <Circle>
                    <CircleText>NB</CircleText>
                </Circle>
            )

        default:
            return (
                <Circle>
                    <CircleText>{ball}</CircleText>
                </Circle>
            )
    }
}

export const RecentOvers: FC<{
    last36ball: Array<string>;
}> = ({ last36ball }) => (
    <GradientContainer colors={['#33014a', '#07000a']}>
        <Row style={{ marginBottom: 0 }}>
            <Col flex={100} style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
            }}>
                {last36ball?.map((ball, key) => <BallByBall key={key} ball={ball} />)}
                {/* <Text>OVER 9 -</Text>
                <Circle bgColor="#000">
                    <CircleText color="#fff">2</CircleText>
                </Circle>
                <Circle bgColor="red">
                    <CircleText>W</CircleText>
                </Circle>
                <Circle>
                    <CircleText>WD</CircleText>
                </Circle>
                <Circle bgColor="#000">
                    <CircleText color="#fff">1</CircleText>
                </Circle>
                <Circle bgColor="green">
                    <CircleText>4</CircleText>
                </Circle>
                <Circle bgColor="yellow">
                    <CircleText>6</CircleText>
                </Circle>
                <Text>= 14</Text> */}
            </Col>
            {/* <Col flex={50} style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start"
            }}>
                <Text>OVER 9 -</Text>
                <Circle bgColor="#000">
                    <CircleText color="#fff">2</CircleText>
                </Circle>
                <Circle bgColor="red">
                    <CircleText>W</CircleText>
                </Circle>
                <Circle>
                    <CircleText>WD</CircleText>
                </Circle>
                <Circle bgColor="#000">
                    <CircleText color="#fff">1</CircleText>
                </Circle>
                <Circle bgColor="green">
                    <CircleText>4</CircleText>
                </Circle>
                <Circle bgColor="yellow">
                    <CircleText>6</CircleText>
                </Circle>
                <Text>= 14</Text>
            </Col> */}
        </Row>

    </GradientContainer>
)


const GradientContainer = styled(LinearGradient)`
    border-radius: 30px;
    justify-content: center;
    padding: 10px 8px;
    margin-top: 15px;
`;

const Text = styled.Text`
    color: #fff;
    font-size: ${hp(1.25)}px;
    font-family: 'Roboto-Bold';
`;

const Circle = styled.View<{ bgColor?: string }>`
    width: ${wp(4.5)}px;
    height: ${wp(4.5)}px;
    background-color: ${({ bgColor }) => bgColor ?? "#fff"};
    border-radius: ${wp(2.25)}px;
    justify-content: center;
    align-items: center;
    margin: 0 1px;
    border: 1px solid #fff;
`;

const CircleText = styled.Text<{ color?: string }>`
    color: ${({ color }) => color ?? "#000"};
    font-size: ${wp(2)}px;
    font-family: 'Roboto-Bold';
    text-align: center;
`;