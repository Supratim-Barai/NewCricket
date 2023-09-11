import React, { FC, Fragment } from "react";
import styled from "styled-components/native";
import { GradientContainer, Row, Col, Divider, SmallText as TableText, SmallHeadingText as TableHeaderText } from "../../styles";
import { Batsman, Bowler } from "../../config/axios";

export const CurrentScoreCard: FC<{
    batsman: Array<Batsman> | undefined;
    bolwer: Bowler | undefined;
}> = ({ batsman, bolwer }) => (
    <Container>
        {Boolean(batsman) && <Content>
            <Row>
                <Col flex={50}><TableHeaderText style={{ textAlign: "left" }}>BATSMAN</TableHeaderText></Col>
                <Col flex={10}><TableHeaderText>R</TableHeaderText></Col>
                <Col flex={10}><TableHeaderText>B</TableHeaderText></Col>
                <Col flex={10}><TableHeaderText>4S</TableHeaderText></Col>
                <Col flex={10}><TableHeaderText>6S</TableHeaderText></Col>
                <Col flex={10}><TableHeaderText>SR</TableHeaderText></Col>
            </Row>
            {batsman?.map((data, key) => (
                <Row key={key}>
                    <Col flex={50}>
                        <TableText style={{ textAlign: "left" }}>{data?.name}*</TableText>
                    </Col>
                    <Col flex={10}><TableText>{data?.run}</TableText></Col>
                    <Col flex={10}><TableText>{data?.ball}</TableText></Col>
                    <Col flex={10}><TableText>{data?.fours}</TableText></Col>
                    <Col flex={10}><TableText>{data?.sixes}</TableText></Col>
                    <Col flex={10}><TableText>{data?.strike_rate}</TableText></Col>
                </Row>
            ))}
        </Content>}
        {Boolean(bolwer) && <Fragment>
            <Divider />
            <Content>
                <Row>
                    <Col flex={50}><TableHeaderText style={{ textAlign: "left" }}>BOWLER</TableHeaderText></Col>
                    <Col flex={10}><TableHeaderText>O</TableHeaderText></Col>
                    <Col flex={10}><TableHeaderText>M</TableHeaderText></Col>
                    <Col flex={10}><TableHeaderText>R</TableHeaderText></Col>
                    <Col flex={10}><TableHeaderText>W</TableHeaderText></Col>
                    <Col flex={10}><TableHeaderText>ECO</TableHeaderText></Col>
                </Row>
                <Row style={{ marginBottom: 0 }}>
                    <Col flex={50}>
                        <TableText style={{ textAlign: "left" }}>{bolwer?.name}</TableText>
                    </Col>
                    <Col flex={10}><TableText>{bolwer?.over}</TableText></Col>
                    <Col flex={10}><TableText>{bolwer?.maiden}</TableText></Col>
                    <Col flex={10}><TableText>{bolwer?.run}</TableText></Col>
                    <Col flex={10}><TableText>{bolwer?.wicket}</TableText></Col>
                    <Col flex={10}><TableText>{bolwer?.economy}</TableText></Col>
                </Row>
            </Content>
        </Fragment>}
    </Container>
);

const Container = styled(GradientContainer)`
    margin: 15px 0;
`;

const Content = styled.View`
    padding: 15px;
`;