import React, { FC } from "react";
import styled from "styled-components/native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";
import { GradientContainer, Col } from "../../../styles";

export const TeamForm: FC = () => (
    <Card>
        <Content>
            <TitleWrapper>
                <TitleText>Team Form - last 5 match</TitleText>
            </TitleWrapper>
            <Body>
                <TeamFormCol flex={50}>
                    <Text>CSK - </Text>
                    <Circle bgColor="red">
                        <CircleText>L</CircleText>
                    </Circle>
                    <Circle bgColor="green">
                        <CircleText>W</CircleText>
                    </Circle>
                    <Circle bgColor="green">
                        <CircleText>W</CircleText>
                    </Circle>
                    <Circle bgColor="red">
                        <CircleText>L</CircleText>
                    </Circle>
                    <Circle bgColor="green">
                        <CircleText>W</CircleText>
                    </Circle>
                    <Circle bgColor="#07000a">
                        <CircleText>*</CircleText>
                    </Circle>
                </TeamFormCol>
                <TeamFormCol flex={50}>
                    <Text>MI - </Text>
                    <Circle bgColor="green">
                        <CircleText>W</CircleText>
                    </Circle>
                    <Circle bgColor="red">
                        <CircleText>L</CircleText>
                    </Circle>
                    <Circle bgColor="red">
                        <CircleText>L</CircleText>
                    </Circle>
                    <Circle bgColor="green">
                        <CircleText>W</CircleText>
                    </Circle>
                    <Circle bgColor="green">
                        <CircleText>W</CircleText>
                    </Circle>
                    <Circle bgColor="#07000a">
                        <CircleText>*</CircleText>
                    </Circle>
                </TeamFormCol>
            </Body>
        </Content>
    </Card>
)

const Card = styled.View`
    background-color: #5f026e;
    height: 80px;
    border-radius: 30px;
    overflow: hidden;
    margin-top: 10px;
    padding-top: 6px;
`;

const Content = styled(GradientContainer)`
    border-radius: 30px;
    flex: 1;
    overflow: hidden;
`;

const Body = styled.View`
    flex: 1;
    margin-horizontal: 15px;
    margin-top: 15px;
    flex-direction: row;
    align-items: center;
`;

const TeamFormCol = styled(Col)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const TitleWrapper = styled.View`
    background-color: #5f026e;
    box-shadow: 0 1px 2px rgba(0,0,0,0.5);
    align-self: center;
    padding: 4px 8px;
    border-radius: 20px;
    margin-top: -2px;
    position: absolute;
    z-index: 1;
`;

const TitleText = styled.Text`
    color: #fff;
    font-size: 10px;
    font-family: 'Roboto-Black';
    align-self: center;
`;

const Circle = styled.View<{ bgColor?: string }>`
    width: ${wp(5)}px;
    height: ${wp(5)}px;
    background-color: ${({ bgColor }) => bgColor ?? "#fff"};
    border-radius: ${wp(2.5)}px;
    justify-content: center;
    align-items: center;
    margin: 0 2px;
    border: 1px solid #fff;
`;

const CircleText = styled.Text<{ color?: string }>`
    color: ${({ color }) => color ?? "#fff"};
    font-size: ${hp(1.5)}px;
    font-family: 'Roboto-Bold';
    text-align: center;
`;

const Text = styled.Text`
    color: #fff;
    font-size: ${wp(3)}px;
    font-family: 'Roboto-Bold';
`;