import React, { FC, useEffect, useState } from "react";
import styled from "styled-components/native";
import { MatchType } from "../../components/MatchType";
import { getRecentMatches } from "../../services";
import { Card } from "../../ui";
import { useNavigation } from "@react-navigation/native";



export const Recent: FC<{ recent: any }> = ({recent}) => {
    const navigation: any = useNavigation();
    return (
        <Card activeOpacity={1} style={{
            marginTop: 10,
            marginBottom: 10
        }}>
            <Header>
                <Left>
                    <Title>{recent.series}</Title>
                </Left>
                <MatchType name="RECENT" />
                <Container1>
                    <Triangle />
                    <Text1>{recent?.match_type}</Text1>
                </Container1>
            </Header>
            <Body>
                <MatchContainer>
                    <Row style={{ marginBottom: 5 }}>
                        <Logo source={{ uri: recent.team_a_img }} />
                        <TeamName>{recent.team_a_short}</TeamName>
                        {Boolean(recent.team_a_scores) && <ScoreContainer>
                            <Score>{recent.team_a_scores} ({recent.team_a_over})</Score>
                        </ScoreContainer>}
                    </Row>
                    <Row>
                        <Logo source={{ uri: recent.team_b_img }} />
                        <TeamName>{recent.team_b_short}</TeamName>
                        {Boolean(recent.team_b_scores) && <ScoreContainer>
                            <Score>{recent.team_b_scores} ({recent.team_b_over})</Score>
                        </ScoreContainer>}
                    </Row>
                </MatchContainer>
                <ManOfMatchContainer>
                    <ManOfMatchContainerTitle>PLAYER OF THE MATCH</ManOfMatchContainerTitle>
                    <Player>
                        <Logo source={require("../../assets/images/shikhar-dhawan.jpeg")} />
                        <Text>Shikhar {"\n"} Dhawan</Text>
                    </Player>
                    <Row>
                        <Button onPress={() => navigation.navigate("HomePointTable", {})}>
                            <ButtonText>POINT TABLE</ButtonText>
                        </Button>
                        <Button onPress={() => navigation.navigate("HomeScoreCard", { matchId: recent.match_id })}><ButtonText>SCORE CARD</ButtonText></Button>
                    </Row>
                </ManOfMatchContainer>
            </Body>
            <Footer>
                <Caption>{recent.result}</Caption>
            </Footer>
        </Card>
    )
}


const MatchContainer = styled.View`
    flex: 1;
    justify-content: center;
`;
const ManOfMatchContainer = styled.View`
    flex: 1;
    align-items: flex-end;
`;

const ManOfMatchContainerTitle = styled.Text`
    color: #fff;
    font-size: 8px;
    font-family: 'Roboto-Black';
`;

const Player = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
`;

const Button = styled.TouchableOpacity`
    background-color: #5f026e;
    height: 16px;
    padding: 0 6px;
    border-radius: 7.5px;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
`;

const ButtonText = styled.Text`
    color: #fff;
    font-size: 8px;
    font-family: 'Roboto-Black';
`;

const Row = styled.View`
    flex-direction: row;
    align-items: center;
`;

const Caption = styled.Text`
    color: #fff;
    font-size: 9px;
    font-family: 'Roboto-Regular';
`;

const Container1 = styled.View`
    align-items:center;
    margin-right: 15px;
`;

const Triangle = styled.View`
    border-top-width: 20px;
    border-right-width: 30px;
    border-bottom-width: 0;
    border-left-width: 30px;
    border-top-color: #5f026e;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
`;

const Text1 = styled.Text`
    color: #fff;
    font-size: 10px;
    font-family: 'Roboto-Black';
    position: absolute;
`;

const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const Left = styled.View`
    background-color: #5f026e;
    flex-direction: row;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 4px 15px;
`;

const Title = styled.Text`
    color: #fff;
    font-size: 10px;
    font-family: 'Roboto-Black';
`;

const Body = styled.View`
    flex: 1;
    flex-direction: row;
    padding: 10px;
`;

const Logo = styled.Image`
    height: 32px;
    width: 32px;
    border-radius: 16px;
    border-color: #f0f0f0e2;
    border-width: 4px;
    margin-right: 10px;
`;

const ScoreContainer = styled.View`
    background-color: #33014a;
    height: 24px;
    padding: 0 5px;
    border-radius: 12px;
    justify-content: center;
    margin-left: 10px;
`;

const Score = styled.Text`
    color: #fff;
    font-family: 'Roboto-Black';
    font-size: 12px;
`;

const TeamName = styled.Text`
    color: #fff;
    font-family: 'Roboto-Black';
    flex: 1;
`;


const Footer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #5f026e;
    height: 18px;
`;

const Text = styled.Text`
    color: #fff;
    font-size: 10px;
    font-family: 'Roboto-Black';
`;
