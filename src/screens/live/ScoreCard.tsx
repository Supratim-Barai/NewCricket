/* eslint-disable prettier/prettier */
import React, { FC, Fragment, useCallback, useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Container, GradientContainer, Col } from "../../styles";
import { getScoreCard, scoreCard } from "../../config/axios";

export const ScoreCard: FC<{ matchId: string }> = ({ matchId }) => {

    const [scorecard, setscorecard] = useState<{ [key: number]: scoreCard | any }>(scoreData.data.scorecard);

    // const handleGetScorecard = useCallback(async () => {
    //     try {
    //         const { data } = await getScoreCard(matchId);
    //         console.log("Scrore Card", data)
    //         if (!data?.error) {
    //             setscorecard(data.data.result.scorecard)
    //         }
    //     } catch (e) {

    //     } finally {

    //     }
    // }, [matchId, setscorecard])

    // useEffect(() => {
    //     handleGetScorecard()
    // }, [])


    console.log(scorecard)

    return (
        <Container>
            <ScrollView>
                {scorecard?.[1] ? <ScoreBoard data={scorecard?.[1]} /> : null}
                {scorecard?.[2] ? <ScoreBoard data={scorecard?.[2]} /> : null}
            </ScrollView>
        </Container>
    )
}

interface ScoreBoardProps {
    data: scoreCard;
}

const ScoreBoard: FC<ScoreBoardProps> = ({ data }) => {
    const { batsman, bolwer, team, fallwicket } = data;
    console.log({data})
    return (
        <Fragment>
            <Text style={{ textAlign: "center", marginBottom: 10, marginTop: 10, fontSize: 14, color: "#fff" }}>{team.name}</Text>
            <Table colors={['#5f026e', '#43045e']}>
                <Content>
                    <Row style={{ marginBottom: 0 }}>
                        <Col flex={50}><TableHeaderText style={{ textAlign: "left" }}>BATTING</TableHeaderText></Col>
                        <Col flex={10}><TableHeaderText>R</TableHeaderText></Col>
                        <Col flex={10}><TableHeaderText>B</TableHeaderText></Col>
                        <Col flex={10}><TableHeaderText>4S</TableHeaderText></Col>
                        <Col flex={10}><TableHeaderText>6S</TableHeaderText></Col>
                        <Col flex={10}><TableHeaderText>SR</TableHeaderText></Col>
                    </Row>
                </Content>
                <Divider />
                <Content>
                    {scoreData?.data?.scorecard?.[1]?.batsman?.map((d) => (
                        <Row key={d.player_id}>
                            <Col flex={50}>
                                <TableText style={{ textAlign: "left" }}>{d.name}</TableText>
                                <TableCaptionText>{d.out_by}</TableCaptionText>
                            </Col>
                            <Col flex={10}><TableText>{d.run}</TableText></Col>
                            <Col flex={10}><TableText>{d.ball}</TableText></Col>
                            <Col flex={10}><TableText>{d.fours}</TableText></Col>
                            <Col flex={10}><TableText>{d.sixes}</TableText></Col>
                            <Col flex={10}><TableText>{d.strike_rate}</TableText></Col>
                        </Row>
                    ))}
                </Content>
                <Divider />
                <Content>
                    <Row style={{ marginBottom: 0 }}>
                        <Col flex={50}>
                            <TableText style={{ textAlign: "left" }}>EXTRAS:</TableText>
                        </Col>
                        <Col flex={50}><TableText>{scoreData?.data?.scorecard?.[1]?.team?.extras}</TableText></Col>
                    </Row>
                </Content>
                <Divider />
                <Content>
                    <Row style={{ marginBottom: 0 }}>
                        <Col flex={50}>
                            <TableText style={{ textAlign: "left" }}>TOTAL</TableText>
                        </Col>
                        <Col flex={25}><TableText style={{ textAlign: "left" }}>{scoreData?.data?.scorecard?.[1]?.team?.score}-{scoreData?.data?.scorecard?.[1]?.team?.wicket}({scoreData?.data?.scorecard?.[1]?.team?.over})</TableText></Col>
                        <Col flex={25}><TableText style={{ textAlign: "right" }}>CRR - 8.30</TableText></Col>
                    </Row>
                </Content>
            </Table>
            <Table>
                <Content>
                    <Row style={{ marginBottom: 0 }}>
                        <Col flex={50}><TableHeaderText style={{ textAlign: "left" }}>BOWLING</TableHeaderText></Col>
                        <Col flex={10}><TableHeaderText>O</TableHeaderText></Col>
                        <Col flex={10}><TableHeaderText>M</TableHeaderText></Col>
                        <Col flex={10}><TableHeaderText>R</TableHeaderText></Col>
                        <Col flex={10}><TableHeaderText>W</TableHeaderText></Col>
                        <Col flex={10}><TableHeaderText>ECO</TableHeaderText></Col>
                    </Row>
                </Content>
                <Divider />
                <Content>
                    {scoreData?.data?.scorecard?.[1]?.bolwer?.map((d) => (
                        <Row key={d.player_id}>
                            <Col flex={50}>
                                <TableText style={{ textAlign: "left" }}>{d.name}</TableText>
                            </Col>
                            <Col flex={10}><TableText>{d.over}</TableText></Col>
                            <Col flex={10}><TableText>{d.maiden}</TableText></Col>
                            <Col flex={10}><TableText>{d.run}</TableText></Col>
                            <Col flex={10}><TableText>{d.wicket}</TableText></Col>
                            <Col flex={10}><TableText>{d.economy}</TableText></Col>
                        </Row>
                    ))}
                </Content>
            </Table>
            <Table style={{
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                marginBottom: 15
            }}>
                <Content>
                    <Row style={{ marginBottom: 0 }}>
                        <Col flex={70}><TableHeaderText style={{ textAlign: "left" }}>FALL OF WICKETS</TableHeaderText></Col>
                        <Col flex={15}><TableHeaderText>SCORE</TableHeaderText></Col>
                        <Col flex={15}><TableHeaderText>OVER</TableHeaderText></Col>
                    </Row>
                </Content>
                <Divider />
                <Content>
                    {scoreData?.data?.scorecard?.[1]?.fallwicket?.map((d, i) => (
                        <Row key={i.toString()}>
                            <Col flex={70}>
                                <TableText style={{ textAlign: "left" }}>{d.player}</TableText>
                            </Col>
                            <Col flex={15}><TableText>{d.score} - {d.wicket}</TableText></Col>
                            <Col flex={15}><TableText>{d.over}</TableText></Col>
                        </Row>
                    ))}
                </Content>
            </Table>
        </Fragment>
    )
}

// const batting = [
//     {
//         player: "MS DHONI",
//         r: 25,
//         b: 16,
//         _4s: 2,
//         _6s: 1,
//         sr: 60.00
//     },
//     {
//         player: "MS DHONI",
//         r: 25,
//         b: 16,
//         _4s: 2,
//         _6s: 1,
//         sr: 60.00
//     },
//     {
//         player: "MS DHONI",
//         r: 25,
//         b: 16,
//         _4s: 2,
//         _6s: 1,
//         sr: 60.00
//     },
//     {
//         player: "MS DHONI",
//         r: 25,
//         b: 16,
//         _4s: 2,
//         _6s: 1,
//         sr: 60.00
//     },
//     {
//         player: "MS DHONI",
//         r: 25,
//         b: 16,
//         _4s: 2,
//         _6s: 1,
//         sr: 60.00
//     },
//     {
//         player: "MS DHONI",
//         r: 25,
//         b: 16,
//         _4s: 2,
//         _6s: 1,
//         sr: 60.00
//     }
// ]

// const bowling = [
//     {
//         player: "PATTINSON",
//         o: 12,
//         m: 16,
//         r: 2,
//         w: 1,
//         eco: 60.00
//     },
//     {
//         player: "PATTINSON",
//         o: 25,
//         m: 16,
//         r: 2,
//         w: 1,
//         eco: 60.00
//     },
//     {
//         player: "PATTINSON",
//         o: 25,
//         m: 16,
//         r: 2,
//         w: 1,
//         eco: 60.00
//     },
//     {
//         player: "PATTINSON",
//         o: 25,
//         m: 16,
//         r: 2,
//         w: 1,
//         eco: 60.00
//     },
// ]

const scoreData = {
    "status": true,
    "msg": "Data found.",
    "data": {
        "result": "",
        "scorecard": {
            "1": {
                "team": {
                    "inning": 1,
                    "team_id": 14,
                    "name": "Australia",
                    "short_name": "AUS",
                    "flag": "http://cricketchampion.co.in/webroot/img/teams/1268041033_team.jpg",
                    "score": 238,
                    "wicket": 3,
                    "over": "56.4",
                    "extras": "17 {wd - 7, nb - 5, lb - 5, b - 0}"
                },
                "batsman": [
                    {
                        "player_id": 2809,
                        "name": "David Warner",
                        "run": 129,
                        "ball": 162,
                        "fours": 16,
                        "sixes": 2,
                        "strike_rate": "79.63",
                        "out_by": "not out"
                    },
                    {
                        "player_id": 2808,
                        "name": "Usman Khawaja",
                        "run": 41,
                        "ball": 98,
                        "fours": 6,
                        "sixes": 0,
                        "strike_rate": "41.84",
                        "out_by": "c Sarfaraz Ahmed b Shaheen Shah Afridi"
                    },
                    {
                        "player_id": 2806,
                        "name": "Marnus Labuschagne",
                        "run": 16,
                        "ball": 25,
                        "fours": 1,
                        "sixes": 0,
                        "strike_rate": "64.00",
                        "out_by": "LBW Faheem Ashraf"
                    },
                    {
                        "player_id": 6137,
                        "name": "Steven Smith",
                        "run": 31,
                        "ball": 60,
                        "fours": 4,
                        "sixes": 0,
                        "strike_rate": "51.67",
                        "out_by": "c Sarfaraz Ahmed b Khurram Shahzad"
                    },
                    {
                        "player_id": 2807,
                        "name": "Travis Head",
                        "run": 0,
                        "ball": 1,
                        "fours": 0,
                        "sixes": 0,
                        "strike_rate": "0.00",
                        "out_by": "not out"
                    }
                ],
                "bolwer": [
                    {
                        "player_id": 2224,
                        "name": "Shaheen Afridi",
                        "over": "15",
                        "maiden": 0,
                        "run": 62,
                        "wicket": 1,
                        "economy": "4.13",
                        "dot_ball": 67
                    },
                    {
                        "player_id": 4403,
                        "name": "Aamer Jamal",
                        "over": "8",
                        "maiden": 0,
                        "run": 42,
                        "wicket": 0,
                        "economy": "5.25",
                        "dot_ball": 32
                    },
                    {
                        "player_id": 2691,
                        "name": "Khurram Shehzad",
                        "over": "13.4",
                        "maiden": 0,
                        "run": 45,
                        "wicket": 1,
                        "economy": "3.29",
                        "dot_ball": 66
                    },
                    {
                        "player_id": 2180,
                        "name": "Faheem Ashraf",
                        "over": "9",
                        "maiden": 0,
                        "run": 44,
                        "wicket": 1,
                        "economy": "4.89",
                        "dot_ball": 34
                    },
                    {
                        "player_id": 3766,
                        "name": "Agha Salman",
                        "over": "11",
                        "maiden": 0,
                        "run": 37,
                        "wicket": 0,
                        "economy": "3.36",
                        "dot_ball": 42
                    }
                ],
                "fallwicket": [
                    {
                        "player": "UT Khawaja",
                        "score": 126,
                        "wicket": "1",
                        "over": "29.4"
                    },
                    {
                        "player": "M Labuschagne",
                        "score": 159,
                        "wicket": "2",
                        "over": "37.1"
                    },
                    {
                        "player": "SPD Smith",
                        "score": 238,
                        "wicket": "3",
                        "over": "56.3"
                    }
                ],
                "partnership": [
                    {
                        "player_a_id": 2809,
                        "player_b_id": 2808,
                        "players_name": "Usman Khawaja & David Warner",
                        "run": 126,
                        "ball": 179
                    },
                    {
                        "player_a_id": 2809,
                        "player_b_id": 2806,
                        "players_name": "Marnus Labuschagne & David Warner",
                        "run": 33,
                        "ball": 49
                    },
                    {
                        "player_a_id": 2809,
                        "player_b_id": 6137,
                        "players_name": "David Warner & Steven Smith",
                        "run": 79,
                        "ball": 117
                    },
                    {
                        "player_a_id": 2809,
                        "player_b_id": 2807,
                        "players_name": "Travis Head & David Warner",
                        "run": 0,
                        "ball": 1
                    }
                ]
            }
        }
    }
}

const TableText = styled.Text`
    color: #fff;
    font-size: ${hp(1.25)}px;
    font-family: 'Roboto-Bold';
    text-align: center;
`;

const TableCaptionText = styled.Text`
    color: #ccc;
    font-size: ${hp(1)}px;
    font-family: 'Roboto-Bold';
    text-align: left;
`;

const TableHeaderText = styled.Text`
    color: #fff;
    font-size: ${hp(1.4)}px;
    font-family: 'Roboto-Bold';
    text-align: center;
`;

const Row = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 10px;
`;

const Table = styled(GradientContainer)`
    border-radius: 0;
`;

const Divider = styled.View`
    background: #3f0248;
    height: 1.5px;
`;

const Content = styled.View`
    padding: 10px 15px;
`;