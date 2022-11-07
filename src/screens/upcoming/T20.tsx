import React, { FC } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Card, ItemSeprator } from "../../ui";
import LinearGradient from "react-native-linear-gradient";
import { NoMatchs } from "./NoMatchs";
import { useAppSelector } from "../../store";
import { Loading } from "../../components/Loading";
import { Match } from "../../store/features/upcoming.slice";

const T20 = () => {
    const { data, loading } = useAppSelector(state => state.upcoming);
    const renderItem = ({ item }: { item: Match }) => {
        return (
            <Card>
                <Header>
                    <Left>
                        <Title>{item.series}</Title>
                    </Left>
                    <Right>
                        <Title>{item.date_wise} {item.match_time}</Title>
                    </Right>
                </Header>
                <Body>
                    <TeamScoreContainer>
                        <ScoreContainer>
                            <Score>00-0</Score>
                            <Over>00.0 OVER</Over>
                        </ScoreContainer>
                        <TeamContainer>
                            <TeamNameContainer colors={['#5f026e', '#43045e', '#5f026e']}>
                                <TeamName>{item.team_a_short}</TeamName>
                                <VsContainer>
                                    <VsText>VS</VsText>
                                </VsContainer>
                                <TeamName>{item.team_b_short}</TeamName>
                            </TeamNameContainer>
                            <Logo source={{ uri: item.team_a_img }} style={{ left: -2.5 }} />
                            <Logo source={{ uri: item.team_b_img }} style={{ right: -2.5 }} />
                        </TeamContainer>
                        <ScoreContainer>
                            <Score>00-0</Score>
                            <Over>00.0 OVER</Over>
                        </ScoreContainer>
                    </TeamScoreContainer>
                </Body>
                <Footer>
                    <LeftEspectedScoreContiner>
                        <LeftOverContainer colors={['#5f026e', '#43045e']}>
                            <EspectedScore>20 Over</EspectedScore>
                            <ArrowRight>
                                {/* <Arrow source={require("../../assets/images/arrow-right.png")} resizeMode="cover" /> */}
                            </ArrowRight>
                        </LeftOverContainer>
                        <EspectedScore>163-165</EspectedScore>
                    </LeftEspectedScoreContiner>
                    <PointContainer>
                        <Text>{item.fav_team}</Text>
                        {Boolean(item.max_rate) && <Point style={{ backgroundColor: "#0e9001" }}>
                            <Text>{item.max_rate}</Text>
                        </Point>}
                        {Boolean(item.min_rate) && <Point style={{ backgroundColor: "#860101" }}>
                            <Text>{item.min_rate}</Text>
                        </Point>}
                    </PointContainer>
                    <RightEspectedScoreContiner>
                        <EspectedScore>
                            163-165
                        </EspectedScore>
                        <RightOverContainer colors={['#5f026e', '#43045e']}>
                            <ArrowLeft>
                                {/* <Arrow source={require("../../assets/images/arrow-left.png")} resizeMode="cover" /> */}
                            </ArrowLeft>
                            <EspectedScore>20 Over</EspectedScore>
                        </RightOverContainer>
                    </RightEspectedScoreContiner>
                </Footer>
            </Card>
        )
    }
    if (loading) return <Loading />;
    const matches = data.filter(m => m.match_type === "T20");
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

export default T20;

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
    justify-content: center;
    padding: 10px;
`;

const Logo = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 25px;
    border-color: #f0f0f0e2;
    border-width: 4px;
    position: absolute;
`;

const ScoreContainer = styled.View`
    align-items: flex-end;
    padding: 5px;
`;

const Score = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 14px;
`;

const TeamScoreContainer = styled.View`
flex-direction: row;
align-items: center;
justify-content:center;
`;
const TeamContainer = styled.View`
flex-direction: row;
align-items: center;
flex: 1;
`;
const Over = styled.Text`
font-size: 8px;
color: #fff;
`;
const TeamNameContainer = styled(LinearGradient)`
flex-direction: row;
align-items: center;
flex: 1;
background-color:#5f026e;
height: 20px;
justify-content: space-evenly;
padding: 0 40px;
`;
const TeamName = styled.Text`
color: #fff;
font-family: 'Roboto-Black';
`;
const VsContainer = styled.View`
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background-color: #07000a;
    justify-content: center;
    align-items: center;
`;
const VsText = styled.Text`
font-size: 10px;
color: #fff;
font-family: 'Roboto-Black';
`;

const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    height: 30px;
`;


const LeftEspectedScoreContiner = styled.View`
    flex-direction: row;
    align-items: center;
`;
const RightEspectedScoreContiner = styled.View`
    flex-direction: row;
    align-items: center;
`;

const LeftOverContainer = styled(LinearGradient)`
    background-color: #5f026e;
    padding: 2px 15px 2px 10px;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
    align-items: center;
    flex-direction: row;
`

const RightOverContainer = styled(LinearGradient)`
    background-color: #5f026e;
    padding: 2px 10px 2px 15px;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    align-items: center;
    flex-direction: row;
`

const EspectedScore = styled.Text`
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    margin: 0 8px;
`
// const Over = styled.Text`
//     font-size: 12px;
//     font-weight: bold;
//     color: #fff;
// `;

const Arrow = styled.Image`
    height: 12px;
    width: 12px;
`;

const ArrowRight = styled.View`
    position: absolute;
    right: -6px;
`;
const ArrowLeft = styled.View`
    position: absolute;
    left: -6px;
`;

const PointContainer = styled.View`
    flex-direction: row;
    align-items: center;
    align-self: center;
`;
const Point = styled.View`
    border-color: #fff;
    justify-content: center;
    align-items: center;
    align-self: center;
    height: 20px;
    min-width: 20px;
    padding: 0 4px;
    border-radius: 1px;
    margin-left: 4px;
`;
const Text = styled.Text`
    color: #fff;
    font-size: 10px;
    font-family: 'Roboto-Black';
`;