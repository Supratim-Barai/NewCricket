/* eslint-disable prettier/prettier */
import React, { FC, useCallback, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Container, GradientContainer, Col } from "../../styles";
import { getScoreCard } from "../../config/axios";

export const ScoreCard: FC<{ matchId: string }> = ({ matchId }) => {

    const [scorecard, setscorecard] = useState();

    const handleGetScorecard = useCallback(async () => {
        try {
            const { data } = await getScoreCard(matchId);
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
                        {batting.map((d, i) => (
                            <Row key={i}>
                                <Col flex={50}>
                                    <TableText style={{ textAlign: "left" }}>{d.player}</TableText>
                                    <TableCaptionText>PATTINSON</TableCaptionText>
                                </Col>
                                <Col flex={10}><TableText>{d.r}</TableText></Col>
                                <Col flex={10}><TableText>{d.b}</TableText></Col>
                                <Col flex={10}><TableText>{d._4s}</TableText></Col>
                                <Col flex={10}><TableText>{d._6s}</TableText></Col>
                                <Col flex={10}><TableText>{d.sr.toFixed(2)}</TableText></Col>
                            </Row>
                        ))}
                    </Content>
                    <Divider />
                    <Content>
                        <Row style={{ marginBottom: 0 }}>
                            <Col flex={50}>
                                <TableText style={{ textAlign: "left" }}>EXTRAS:</TableText>
                            </Col>
                            <Col flex={10}><TableText>B - 0</TableText></Col>
                            <Col flex={10}><TableText>W - 4</TableText></Col>
                            <Col flex={10}><TableText>NB - 4</TableText></Col>
                            <Col flex={10}><TableText>P - 0</TableText></Col>
                            <Col flex={10}><TableText>= 08</TableText></Col>
                        </Row>
                    </Content>
                    <Divider />
                    <Content>
                        <Row style={{ marginBottom: 0 }}>
                            <Col flex={50}>
                                <TableText style={{ textAlign: "left" }}>TOTAL</TableText>
                            </Col>
                            <Col flex={25}><TableText style={{ textAlign: "left" }}>150 - 6 (20.0)</TableText></Col>
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
                        {bowling.map((d, i) => (
                            <Row key={i}>
                                <Col flex={50}>
                                    <TableText style={{ textAlign: "left" }}>{d.player}</TableText>
                                </Col>
                                <Col flex={10}><TableText>{d.o}</TableText></Col>
                                <Col flex={10}><TableText>{d.m}</TableText></Col>
                                <Col flex={10}><TableText>{d.r}</TableText></Col>
                                <Col flex={10}><TableText>{d.w}</TableText></Col>
                                <Col flex={10}><TableText>{d.eco.toFixed(2)}</TableText></Col>
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
                        <Row>
                            <Col flex={70}>
                                <TableText style={{ textAlign: "left" }}>MS DHONI</TableText>
                            </Col>
                            <Col flex={15}><TableText>20 - 1</TableText></Col>
                            <Col flex={15}><TableText>3.3</TableText></Col>
                        </Row>
                        <Row>
                            <Col flex={70}>
                                <TableText style={{ textAlign: "left" }}>SURESH RAINA</TableText>
                            </Col>
                            <Col flex={15}><TableText>14 - 1</TableText></Col>
                            <Col flex={15}><TableText>5.2</TableText></Col>
                        </Row>
                    </Content>
                </Table>
            </ScrollView>
        </Container>
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
    color: #000;
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