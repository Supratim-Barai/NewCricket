/* eslint-disable prettier/prettier */
import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Loading } from "../../components/Loading";
import { useAppSelector } from "../../store";
import { Match } from "../../store/features/recent.slice";
import { Card, ItemSeprator } from "../../ui";
import { NoMatchs } from "./NoMatchs";

const Odi = () => {
    const { data, loading } = useAppSelector(state => state.recent);
    const navigation: any = useNavigation();
    const renderItem = ({ item }: { item: Match }) => {
        return (
            <Card>
                <Header>
                    <Left>
                        <Title>{item.series}</Title>
                    </Left>
                </Header>
                <Body>
                    <MatchContainer>
                        <Row style={{ marginBottom: 5 }}>
                            <Logo source={{ uri: item.team_a_img }} />
                            <TeamName>{item.team_a_short}</TeamName>
                            {Boolean(item.team_a_scores) && <ScoreContainer>
                                <Score>{item.team_a_scores} ({item.team_a_over})</Score>
                            </ScoreContainer>}
                        </Row>
                        <Row>
                            <Logo source={{ uri: item.team_b_img }} />
                            <TeamName>{item.team_b_short}</TeamName>
                            {Boolean(item.team_b_scores) && <ScoreContainer>
                                <Score>{item.team_b_scores} ({item.team_b_over})</Score>
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
                            <Button onPress={() => navigation.navigate("RecentStack_PointsTable", {})}>
                                <ButtonText>POINT TABLE</ButtonText>
                            </Button>
                            <Button onPress={() => navigation.navigate("RecentStack_ScoreCard", { matchId: item.match_id })}>
                                <ButtonText>SCORE CARD</ButtonText>
                            </Button>
                        </Row>
                    </ManOfMatchContainer>
                </Body>
                <Footer>
                    <Caption>{item.result}</Caption>
                </Footer>
            </Card>
        )
    }

    // const renderItem = ({ item }: any) => {
    //     return (
    //         <Card>
    //             <Header>
    //                 <Left>
    //                     <Title>{item.match}</Title>
    //                 </Left>
    //             </Header>
    //             <Body>
    //                 <MatchContainer>
    //                     <Row style={{ marginBottom: 5 }}>
    //                         <Logo source={item.team.avatar} />
    //                         <TeamName>{item.team.name}</TeamName>
    //                         <ScoreContainer>
    //                             <Score>160-5 (20.0)</Score>
    //                         </ScoreContainer>
    //                     </Row>
    //                     <Row>
    //                         <Logo source={item.oppositionTeam.avatar} />
    //                         <TeamName>{item.oppositionTeam.name}</TeamName>
    //                         <ScoreContainer>
    //                             <Score>160-5 (20.0)</Score>
    //                         </ScoreContainer>
    //                     </Row>
    //                 </MatchContainer>
    //                 <ManOfMatchContainer>
    //                     <ManOfMatchContainerTitle>PLAYER OF THE MATCH</ManOfMatchContainerTitle>
    //                     <Player>
    //                         <Logo source={require("../../assets/images/shikhar-dhawan.jpeg")} />
    //                         <Text>Shikhar {"\n"} Dhawan</Text>
    //                     </Player>
    //                     <Row>
    //                         <Button>
    //                             <ButtonText>POINT TABLE</ButtonText>
    //                         </Button>
    //                         <Button><ButtonText>SCORE CARD</ButtonText></Button>
    //                     </Row>
    //                 </ManOfMatchContainer>
    //             </Body>
    //             <Footer>
    //                 <Caption>CSK WON BY 11 RUNS</Caption>
    //             </Footer>
    //         </Card>
    //     )
    // }
    
    if (loading) return <Loading />;
    const matches = data.filter(m => m.match_type ==="ODI");
    return (
        <Container>
            <FlatList
                data={matches}
                renderItem={renderItem}
                ListHeaderComponent={ItemSeprator}
                ItemSeparatorComponent={ItemSeprator}
                ListEmptyComponent={NoMatchs}
                keyExtractor={(item, index) => "key" + item.match_id}
            />
        </Container>
    )
}

export default Odi;

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

const data = [
    {
        id: 1,
        match: "Pakistan Super League 2021",
        type: "T20",
        date: new Date().toLocaleString(),
        over: 20,
        venue: "CHENNAI",
        team: {
            name: "CSK",
            avatar: require("../../assets/images/csk.png"),
            projectedScore: "163-165",
            projectedPoint: "60"
        },
        oppositionTeam: {
            name: "MI",
            avatar: require("../../assets/images/mi.jpeg"),
            projectedScore: "159-161",
            projectedPoint: "66"
        }
    },
    {
        id: 2,
        match: "Pakistan Super League 2021",
        type: "T20",
        date: new Date().toLocaleString(),
        over: 20,
        venue: "CHENNAI",
        team: {
            name: "CSK",
            avatar: require("../../assets/images/csk.png"),
            projectedScore: "163-165",
            projectedPoint: "60"
        },
        oppositionTeam: {
            name: "MI",
            avatar: require("../../assets/images/mi.jpeg"),
            projectedScore: "159",
            projectedPoint: "66"
        }
    },
    {
        id: 3,
        match: "Pakistan Super League 2021",
        type: "T20",
        date: new Date().toLocaleString(),
        over: 20,
        venue: "CHENNAI",
        team: {
            name: "CSK",
            avatar: require("../../assets/images/csk.png"),
            projectedScore: "163-165",
            projectedPoint: "60"
        },
        oppositionTeam: {
            name: "MI",
            avatar: require("../../assets/images/mi.jpeg"),
            projectedScore: "159",
            projectedPoint: "66"
        }
    },
    {
        id: 4,
        match: "Pakistan Super League 2021",
        type: "T20",
        date: new Date().toLocaleString(),
        over: 20,
        venue: "CHENNAI",
        team: {
            name: "CSK",
            avatar: require("../../assets/images/csk.png"),
            projectedScore: "163-165",
            projectedPoint: "60"
        },
        oppositionTeam: {
            name: "MI",
            avatar: require("../../assets/images/mi.jpeg"),
            projectedScore: "159",
            projectedPoint: "66"
        }
    },
    {
        id: 5,
        match: "Pakistan Super League 2021",
        type: "T20",
        date: new Date().toLocaleString(),
        over: 20,
        venue: "CHENNAI",
        team: {
            name: "CSK",
            avatar: require("../../assets/images/csk.png"),
            projectedScore: "163-165",
            projectedPoint: "60"
        },
        oppositionTeam: {
            name: "MI",
            avatar: require("../../assets/images/mi.jpeg"),
            projectedScore: "159",
            projectedPoint: "66"
        }
    },
    {
        id: 6,
        match: "Pakistan Super League 2021",
        type: "T20",
        date: new Date().toLocaleString(),
        over: 20,
        venue: "CHENNAI",
        team: {
            name: "CSK",
            avatar: require("../../assets/images/csk.png"),
            projectedScore: "163-165",
            projectedPoint: "60"
        },
        oppositionTeam: {
            name: "MI",
            avatar: require("../../assets/images/mi.jpeg"),
            projectedScore: "159",
            projectedPoint: "66"
        }
    },
    {
        id: 7,
        match: "Pakistan Super League 2021",
        type: "T20",
        date: new Date().toLocaleString(),
        over: 20,
        venue: "CHENNAI",
        team: {
            name: "CSK",
            avatar: require("../../assets/images/csk.png"),
            projectedScore: "163-165",
            projectedPoint: "60"
        },
        oppositionTeam: {
            name: "MI",
            avatar: require("../../assets/images/mi.jpeg"),
            projectedScore: "159",
            projectedPoint: "66"
        }
    },
    {
        id: 8,
        match: "Pakistan Super League 2021",
        type: "T20",
        date: new Date().toLocaleString(),
        over: 20,
        venue: "CHENNAI",
        team: {
            name: "CSK",
            avatar: require("../../assets/images/csk.png"),
            projectedScore: "163-165",
            projectedPoint: "60"
        },
        oppositionTeam: {
            name: "MI",
            avatar: require("../../assets/images/mi.jpeg"),
            projectedScore: "159",
            projectedPoint: "66"
        }
    },
    {
        id: 9,
        match: "Pakistan Super League 2021",
        type: "T20",
        date: new Date().toLocaleString(),
        over: 20,
        venue: "CHENNAI",
        team: {
            name: "CSK",
            avatar: require("../../assets/images/csk.png"),
            projectedScore: "163-165",
            projectedPoint: "60"
        },
        oppositionTeam: {
            name: "MI",
            avatar: require("../../assets/images/mi.jpeg"),
            projectedScore: "159",
            projectedPoint: "66"
        }
    },
    {
        id: 10,
        match: "Pakistan Super League 2021",
        type: "T20",
        date: new Date().toLocaleString(),
        over: 20,
        venue: "CHENNAI",
        team: {
            name: "CSK",
            avatar: require("../../assets/images/csk.png"),
            projectedScore: "163-165",
            projectedPoint: "60"
        },
        oppositionTeam: {
            name: "MI",
            avatar: require("../../assets/images/mi.jpeg"),
            projectedScore: "159",
            projectedPoint: "66"
        }
    }
]

const Container = styled.View`
    flex: 1;
    background-color: #3f0248;
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

const Right = styled.View`
    background-color: #5f026e;
    flex-direction: row;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
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