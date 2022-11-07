/* eslint-disable prettier/prettier */
import React, { FC, useCallback, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Container, GradientContainer, Col } from "../../styles";
import { getScore } from "../../services";
import { IScore, IBatsman, IBolwer, IFallwickets, ITeam } from "../../types";
import { Loading } from "../../components/Loading";

export const ScoreCard = (props: any) => {
    const matchId = props?.route?.params?.matchId;
    const [loading, setLoading] = useState(false);
    const [scores, setScores] = useState<Record<number, IScore>>({});

    const getScoreData = useCallback(async () => {
        try {
            setLoading(true);
            const { data } = await getScore(matchId);
            setScores(data.data.list.scorecard);
            setLoading(false);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }, [matchId, setLoading])

    useEffect(() => {
        getScoreData()
    }, [getScoreData])

    return (
        <Container>
            {loading ? <Loading /> :
                <ScrollView>
                    {/* TEAM 1 */}
                    <BattingScoreCard
                        batsman={scores?.[1]?.batsman}
                        team={scores?.[1]?.team}
                    />
                    <Bowling bolwer={scores?.[1]?.bolwer} />
                    <FallOfWickets fallwicket={scores?.[1]?.fallwicket} />
                    {/* TEAM 2 */}
                    <BattingScoreCard
                        batsman={scores?.[2]?.batsman}
                        team={scores?.[1]?.team}
                    />
                    <Bowling bolwer={scores?.[2]?.bolwer} />
                    <FallOfWickets fallwicket={scores?.[2]?.fallwicket} />
                </ScrollView>}
        </Container>
    )
}

const BattingScoreCard: FC<{
    batsman: Array<IBatsman> | undefined;
    team: ITeam | undefined;
}> = ({ batsman, team }) => (
    <Table style={{ marginTop: 10 }} colors={['#5f026e', '#43045e']}>
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
            {batsman?.map((d, i) => (
                <Row key={i}>
                    <Col flex={50}>
                        <TableText style={{ textAlign: "left" }}>{d?.name}</TableText>
                        <TableCaptionText>{d?.out_by}</TableCaptionText>
                    </Col>
                    <Col flex={10}><TableText>{d?.run}</TableText></Col>
                    <Col flex={10}><TableText>{d?.ball}</TableText></Col>
                    <Col flex={10}><TableText>{d?.fours}</TableText></Col>
                    <Col flex={10}><TableText>{d?.sixes}</TableText></Col>
                    <Col flex={10}><TableText>{d?.strike_rate}</TableText></Col>
                </Row>
            ))}
        </Content>
        <Divider />
        <Content>
            <Row style={{ marginBottom: 0 }}>
                <Col flex={50}>
                    <TableText style={{ textAlign: "left" }}>EXTRAS:</TableText>
                </Col>
                <Col flex={50}><TableText>{team?.extras}</TableText></Col>
                {/* <Col flex={10}><TableText>W - 4</TableText></Col>
                <Col flex={10}><TableText>NB - 4</TableText></Col>
                <Col flex={10}><TableText>P - 0</TableText></Col>
                <Col flex={10}><TableText>= 08</TableText></Col> */}
            </Row>
        </Content>
        <Divider />
        <Content>
            <Row style={{ marginBottom: 0 }}>
                <Col flex={50}>
                    <TableText style={{ textAlign: "left" }}>TOTAL</TableText>
                </Col>
                <Col flex={25}><TableText style={{ textAlign: "left" }}>{team?.score} - {team?.wicket} ({team?.over})</TableText></Col>
                <Col flex={25}><TableText style={{ textAlign: "right" }}>CRR - 8.30</TableText></Col>
            </Row>
        </Content>
    </Table>
)

const Bowling: FC<{
    bolwer: Array<IBolwer> | undefined;
}> = ({ bolwer }) => (
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
            {bolwer?.map((d, i) => (
                <Row key={i}>
                    <Col flex={50}>
                        <TableText style={{ textAlign: "left" }}>{d?.name}</TableText>
                    </Col>
                    <Col flex={10}><TableText>{d?.over}</TableText></Col>
                    <Col flex={10}><TableText>{d?.maiden}</TableText></Col>
                    <Col flex={10}><TableText>{d?.run}</TableText></Col>
                    <Col flex={10}><TableText>{d?.wicket}</TableText></Col>
                    <Col flex={10}><TableText>{d?.economy}</TableText></Col>
                </Row>
            ))}
        </Content>
    </Table>
)

const FallOfWickets: FC<{
    fallwicket: Array<IFallwickets> | undefined;
}> = ({ fallwicket }) => (
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
                <Row key={i}>
                    <Col flex={70}>
                        <TableText style={{ textAlign: "left" }}>{d.player}</TableText>
                    </Col>
                    <Col flex={15}><TableText>{d.score} - {d.wicket}</TableText></Col>
                    <Col flex={15}><TableText>{d.over}</TableText></Col>
                </Row>
            ))}
        </Content>
    </Table>
)

const TableText = styled.Text`
    color: #fff;
    font-size: ${hp(1.25)}px;
    font-family: 'Roboto-Bold';
    text-align: center;
`;

const TableCaptionText = styled.Text`
    color: rgba(255,255,255, 0.5);
    font-size: ${wp(2.2)}px;
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