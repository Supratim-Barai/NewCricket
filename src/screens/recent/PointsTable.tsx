import React from "react";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ScrollView, View } from "react-native";
import { GradientContainer, Col } from "../../styles";

export const PointsTable = () => {
    return (
        <Container>
            <ScrollView>
                <Table>
                    <Content>
                        <Row style={{ marginBottom: 0 }}>
                            <Col flex={30}><TableHeaderText style={{ textAlign: "left" }}>TEAM NAME</TableHeaderText></Col>
                            <Col flex={10}><TableHeaderText>P</TableHeaderText></Col>
                            <Col flex={10}><TableHeaderText>W</TableHeaderText></Col>
                            <Col flex={10}><TableHeaderText>L</TableHeaderText></Col>
                            <Col flex={10}><TableHeaderText>NR</TableHeaderText></Col>
                            <Col flex={10}><TableHeaderText>CR</TableHeaderText></Col>
                            <Col flex={10}><TableHeaderText>NRR</TableHeaderText></Col>
                            <Col flex={10}><TableHeaderText>PTS</TableHeaderText></Col>
                        </Row>
                    </Content>
                    <Divider />
                    <Content>
                        {data.map((d, i) => (
                            <Row key={i}>
                                <Col flex={30}>
                                    <View style={{
                                        flexDirection: "row",
                                        alignItems: "flex-start"
                                    }}>
                                        <Logo source={require("../../assets/images/warface.png")} />
                                        <TableText>{d.team.name}</TableText>
                                    </View>
                                </Col>
                                <Col flex={10}><TableText>{d.p}</TableText></Col>
                                <Col flex={10}><TableText>{d.w}</TableText></Col>
                                <Col flex={10}><TableText>{d.l}</TableText></Col>
                                <Col flex={10}><TableText>{d.nr}</TableText></Col>
                                <Col flex={10}><TableText>{d.cr}</TableText></Col>
                                <Col flex={10}><TableText>{d.nrr}</TableText></Col>
                                <Col flex={10}><TableText>{d.pts}</TableText></Col>
                            </Row>
                        ))}
                    </Content>
                </Table>
            </ScrollView>
        </Container>
    )
}

const data = [
    {
        team: {
            name: "CHENNAI SK",
            logo: ""
        },
        p: 8,
        w: 6,
        l: 2,
        nr: 1,
        cr: 3.74,
        nrr: 0.547,
        pts: 12
    },
    {
        team: {
            name: "CHENNAI SK",
            logo: ""
        },
        p: 8,
        w: 6,
        l: 2,
        nr: 1,
        cr: 3.74,
        nrr: 0.547,
        pts: 12
    },
    {
        team: {
            name: "CHENNAI SK",
            logo: ""
        },
        p: 8,
        w: 6,
        l: 2,
        nr: 1,
        cr: 3.74,
        nrr: 0.547,
        pts: 12
    },
    {
        team: {
            name: "CHENNAI SK",
            logo: ""
        },
        p: 8,
        w: 6,
        l: 2,
        nr: 1,
        cr: 3.74,
        nrr: 0.547,
        pts: 12
    },
    {
        team: {
            name: "CHENNAI SK",
            logo: ""
        },
        p: 8,
        w: 6,
        l: 2,
        nr: 1,
        cr: 3.74,
        nrr: 0.547,
        pts: 12
    },
    {
        team: {
            name: "CHENNAI SK",
            logo: ""
        },
        p: 8,
        w: 6,
        l: 2,
        nr: 1,
        cr: 3.74,
        nrr: 0.547,
        pts: 12
    },
    {
        team: {
            name: "CHENNAI SK",
            logo: ""
        },
        p: 8,
        w: 6,
        l: 2,
        nr: 1,
        cr: 3.74,
        nrr: 0.547,
        pts: 12
    },
    {
        team: {
            name: "CHENNAI SK",
            logo: ""
        },
        p: 8,
        w: 6,
        l: 2,
        nr: 1,
        cr: 3.74,
        nrr: 0.547,
        pts: 12
    }
]

const Logo = styled.Image`
    height: 20px;
    width: 20px;
    border-radius: 10px;
    margin-right: 5px;
    margin-top:-5px;
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

const Row = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 10px;
`;

const Table = styled(GradientContainer)`
    margin-top: 15px;
`;

const Container = styled.View`
    background: #3f0248;
    flex:1;
`;

const Divider = styled.View`
    background: #3f0248;
    height: 1.5px;
`;

const Content = styled.View`
    padding: 10px 15px;
`;