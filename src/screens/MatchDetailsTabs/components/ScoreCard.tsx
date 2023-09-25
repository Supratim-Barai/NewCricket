/* eslint-disable prettier/prettier */
import React, { FC, Fragment, useCallback, useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Container, GradientContainer, Col } from "../../../styles";
import { getScoreCard, scoreCard } from "../../../config/axios";

export const ScoreCard: FC<{ matchId: string }> = ({ matchId }) => {

    const [scorecard, setscorecard] = useState<{ [key: number]: scoreCard }>();

    const handleGetScorecard = useCallback(async () => {
        try {
            const { data } = await getScoreCard(matchId);
            console.log("Scrore Card", data)
            if (!data?.error) {
                setscorecard(data.data.result.scorecard)
            }
        } catch (e) {

        } finally {

        }
    }, [matchId, setscorecard])

    useEffect(() => {
        handleGetScorecard()
    }, [])


    console.log({ scorecard })

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
                    {batsman?.map((d) => (
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
                        <Col flex={50}><TableText>{team.extras}</TableText></Col>
                    </Row>
                </Content>
                <Divider />
                <Content>
                    <Row style={{ marginBottom: 0 }}>
                        <Col flex={50}>
                            <TableText style={{ textAlign: "left" }}>TOTAL</TableText>
                        </Col>
                        <Col flex={25}><TableText style={{ textAlign: "left" }}>{team.score}-{team.wicket}({team.over})</TableText></Col>
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
                    {bolwer?.map((d) => (
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
                    {fallwicket?.map((d, i) => (
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

const batting = [
    {
        player: "MS DHONI",
        r: 25,
        b: 16,
        _4s: 2,
        _6s: 1,
        sr: 60.00
    },
    {
        player: "MS DHONI",
        r: 25,
        b: 16,
        _4s: 2,
        _6s: 1,
        sr: 60.00
    },
    {
        player: "MS DHONI",
        r: 25,
        b: 16,
        _4s: 2,
        _6s: 1,
        sr: 60.00
    },
    {
        player: "MS DHONI",
        r: 25,
        b: 16,
        _4s: 2,
        _6s: 1,
        sr: 60.00
    },
    {
        player: "MS DHONI",
        r: 25,
        b: 16,
        _4s: 2,
        _6s: 1,
        sr: 60.00
    },
    {
        player: "MS DHONI",
        r: 25,
        b: 16,
        _4s: 2,
        _6s: 1,
        sr: 60.00
    }
]

const bowling = [
    {
        player: "PATTINSON",
        o: 12,
        m: 16,
        r: 2,
        w: 1,
        eco: 60.00
    },
    {
        player: "PATTINSON",
        o: 25,
        m: 16,
        r: 2,
        w: 1,
        eco: 60.00
    },
    {
        player: "PATTINSON",
        o: 25,
        m: 16,
        r: 2,
        w: 1,
        eco: 60.00
    },
    {
        player: "PATTINSON",
        o: 25,
        m: 16,
        r: 2,
        w: 1,
        eco: 60.00
    },
]

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