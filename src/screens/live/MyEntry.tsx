import React, { FC, useState } from "react";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ScrollView } from "react-native";
import { Container, GradientContainer, Col } from "../../styles";
import { AccordianButton } from "../../components/AccordianButton";

export const MyEntry: FC = () => {
    const [show, setShow] = useState(true);
    return (
        <Container>
            <ScrollView>
                <Table>
                    <Content>
                        <Row>
                            <Col flex={30}><TableHeaderText style={{ textAlign: "left" }}>BET TYPE</TableHeaderText></Col>
                            <Col flex={15}><TableHeaderText>TEAM</TableHeaderText></Col>
                            <Col flex={25}><TableHeaderText>ODDS/SCORES</TableHeaderText></Col>
                            <Col flex={15}><TableHeaderText>STAKE</TableHeaderText></Col>
                            <Col flex={15}><TableHeaderText>PAYMENT</TableHeaderText></Col>
                        </Row>
                    </Content>
                    <Divider />
                    <Content>
                        {betData.map((bet, key) => (
                            <Row key={key}>
                                <Col flex={30}><TableText style={{ textAlign: "left" }}>{bet.type}</TableText></Col>
                                <Col flex={15}><TableText>{bet.team}</TableText></Col>
                                <Col flex={25}><TableText>{bet.oddsOrScores}</TableText></Col>
                                <Col flex={15}><TableText>{bet.stake}</TableText></Col>
                                <Col flex={15}><TableText>{bet.payment}</TableText></Col>
                            </Row>
                        ))}
                    </Content>
                </Table>
                <AccordianButton title="HISTORY" show={show} toggleShow={() => setShow(x => !x)} />
                {show && <Table style={{
                    marginTop: -10
                }}>
                    <Content>
                        <Row>
                            <Col flex={30}><TableHeaderText style={{ textAlign: "left" }}>BET TYPE</TableHeaderText></Col>
                            <Col flex={15}><TableHeaderText>TEAM</TableHeaderText></Col>
                            <Col flex={25}><TableHeaderText>ODDS/SCORES</TableHeaderText></Col>
                            <Col flex={15}><TableHeaderText>STAKE</TableHeaderText></Col>
                            <Col flex={15}><TableHeaderText>P/L</TableHeaderText></Col>
                        </Row>
                    </Content>
                    <Divider />
                    <Content>
                        {plData.map((bet, key) => (
                            <Row key={key}>
                                <Col flex={30}><TableText style={{ textAlign: "left" }}>{bet.type}</TableText></Col>
                                <Col flex={15}><TableText>{bet.team}</TableText></Col>
                                <Col flex={25}><TableText>{bet.oddsOrScores}</TableText></Col>
                                <Col flex={15}><TableText>{bet.stake}</TableText></Col>
                                <Col flex={15}><TableText style={{ color: bet.pl < 0 ? "red" : "green" }}>{Math.abs(bet.pl)}</TableText></Col>
                            </Row>
                        ))}
                    </Content>
                </Table>}
            </ScrollView>
        </Container>
    )
}

const Table = styled(GradientContainer)`
    border-radius: 0;
    padding: 20px 0;
    margin-top: 15px;
`;


const Divider = styled.View`
    height: 1px;
    margin: 10px 0;
    background-color: #3f0248;
`;

const betData = [
    {
        type: "Back",
        team: "CSK",
        oddsOrScores: "1.16",
        stake: "1000",
        payment: "1160.00"
    },
    {
        type: "Lay",
        team: "CSK",
        oddsOrScores: "1.50",
        stake: "1000",
        payment: "1500.00"
    },
    {
        type: "Back",
        team: "CSK",
        oddsOrScores: "1.2",
        stake: "1000",
        payment: "120.00"
    },
    {
        type: "Yes [ 6 overs ]",
        team: "CSK",
        oddsOrScores: "42",
        stake: "10",
        payment: "20"
    },
    {
        type: "No [ 6 overs ]",
        team: "CSK",
        oddsOrScores: "40",
        stake: "5",
        payment: "10"
    }
]

const plData = [
    {
        type: "Back",
        team: "CSK",
        oddsOrScores: "1.16",
        stake: "1000",
        pl: 470.00
    },
    {
        type: "Lay",
        team: "CSK",
        oddsOrScores: "1.50",
        stake: "1000",
        pl: -160.00
    },
    {
        type: "Back",
        team: "CSK",
        oddsOrScores: "1.2",
        stake: "1000",
        pl: 220.00
    },
    {
        type: "Yes [ 6 overs ]",
        team: "CSK",
        oddsOrScores: "42",
        stake: "10",
        pl: 1000.00
    },
    {
        type: "No [ 6 overs ]",
        team: "CSK",
        oddsOrScores: "40",
        stake: "5",
        pl: -1000.00
    }
]

const Row = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 10px;
`;

const TableText = styled.Text`
    color: #fff;
    font-size: ${hp(1.25)}px;
    font-family: 'Roboto-Bold';
    text-align: center;
`;

const TableHeaderText = styled.Text`
    color: #fff;
    font-size: ${hp(1.4)}px;
    font-family: 'Roboto-Bold';
    text-align: center;
`;

const Content = styled.View`
    padding: 0 15px;
`;
