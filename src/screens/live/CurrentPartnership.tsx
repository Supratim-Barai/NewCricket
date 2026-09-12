import React, { FC } from "react";
import styled from "styled-components/native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";
import { GradientContainer } from "../../styles";
import { Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Partnership } from "../../types";

export const CurrentPartnership: FC<{
    partnership: Partnership | undefined;
}> = ({ partnership }) => (
    <Card>
        <Content>
            <TitleWrapper>
                <TitleText>Current Partnership</TitleText>
            </TitleWrapper>
            <View style={{
                flex: 1,
                marginHorizontal: 15,
                marginBottom: 10,
                flexDirection: "row",
                alignItems: "center"
            }}>
                <TeamNameContainer colors={['#5f026e', '#33014a', '#5f026e']}>
                    <Score>{partnership?.run}({partnership?.ball})</Score>
                </TeamNameContainer>
                <Logo style={{ left: 0 }} source={require("../../assets/images/user.png")} />
                <Logo style={{ right: 0 }} source={require("../../assets/images/user.png")} />
                <PlayerName style={{
                    left: 0,
                    bottom: 10
                }}>
                    MS DHONI* {" "}
                    <Score>{partnership?.run}({partnership?.ball})</Score>
                </PlayerName>
                <PlayerName style={{
                    right: 0,
                    bottom: 10
                }}>
                    BRAVO {" "}
                    <Score>5(4)</Score>
                </PlayerName>
            </View>
        </Content>
    </Card>
)

const TeamNameContainer = styled(LinearGradient)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 24px;
    width: 100%;
`;

const Card = styled.View`
    background-color: #5f026e;
    height: ${hp(15)}px;
    border-radius: 30px;
    overflow: hidden;
    margin-top: 15px;
    padding-top: 6px;
`;

const Content = styled(GradientContainer)`
    border-radius: 30px;
    flex: 1;
    overflow: hidden;
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

const Logo = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 25px;
    border-color: #f0f0f0e2;
    border-width: 4px;
    position: absolute;
`;

const PlayerName = styled.Text`
    color: #fff;
    font-size: 10px;
    font-family: 'Roboto-Black';
    position: absolute;
`;

const Score = styled.Text`
    font-family: 'Roboto-Thin';
    font-weight: bold;
    color: #fff;
`;