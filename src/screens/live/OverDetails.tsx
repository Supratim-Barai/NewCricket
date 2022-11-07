import React, {FC, Fragment, useState } from "react";
import styled from "styled-components/native";
import { GradientContainer, Col, Row } from "../../styles";
import { AccordianButton } from "../../components/AccordianButton";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Text, View } from "react-native";

export const OverDetails:FC<{ballByBall:any}> = ({ballByBall}) => {
    const [show, setShow] = useState(false);
    const title = ballByBall?.overs?.[0]+" OVER"
    return (
        <Fragment>
            <AccordianButton
                title={title}
                show={show}
                toggleShow={() => setShow(x => !x)}
            />
            {show && <Container>
                    <Row key={ballByBall?.key}>
                    <Col flex={75}>
                        <AccordianContent style={{
                            marginBottom: 10
                        }}>
                            <TeamName>MUMBAI INDIANS</TeamName>
                            <BoxContainer>
                                <Box variant="green">
                                    <BoxText>41</BoxText>
                                </Box>
                                <Box variant="red">
                                    <BoxText>42</BoxText>
                                </Box>
                            </BoxContainer>
                        </AccordianContent>
                        <Circle>
                            <CircleText>{ballByBall?.team_score?.runs}</CircleText>
                        </Circle>
                        <AccordianContent style={{
                            marginTop: 10
                        }}>
                            <Over>20 OVER SESSION</Over>
                            <BoxContainer>
                                <Box>
                                    <BoxText>94</BoxText>
                                </Box>
                                <Box>
                                    <BoxText>95</BoxText>
                                </Box>
                            </BoxContainer>
                        </AccordianContent>
                    </Col>
                    <Col flex={5} />
                    <Col flex={20} style={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <ScoreContainer>
                            <Score>84/2</Score>
                            <RunningOver>{ballByBall?.overs[0]}.{ballByBall?.overs[1]} over</RunningOver>
                            <Time>08:35 pm</Time>
                        </ScoreContainer>
                    </Col>
                </Row>
                
                
                {/* <Row>
                    <Col flex={75}>
                        <AccordianContent style={{
                            marginBottom: 10
                        }}>
                            <TeamName>MUMBAI INDIANS</TeamName>
                            <BoxContainer>
                                <Box variant="green">
                                    <BoxText>41</BoxText>
                                </Box>
                                <Box variant="red">
                                    <BoxText>42</BoxText>
                                </Box>
                            </BoxContainer>
                        </AccordianContent>
                        <Circle>
                            <CircleText>6</CircleText>
                        </Circle>
                        <AccordianContent style={{
                            marginTop: 10
                        }}>
                            <Over>20 OVER SESSION</Over>
                            <BoxContainer>
                                <Box>
                                    <BoxText>94</BoxText>
                                </Box>
                                <Box>
                                    <BoxText>95</BoxText>
                                </Box>
                            </BoxContainer>
                        </AccordianContent>
                    </Col>
                    <Col flex={5} />
                    <Col flex={20} style={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <ScoreContainer>
                            <Score>84/2</Score>
                            <RunningOver>20.0 over</RunningOver>
                            <Time>08:35 pm</Time>
                        </ScoreContainer>
                    </Col>
                </Row> */}
                {/* <Row>
                    <Col flex={75}>
                        <AccordianContent style={{
                            marginBottom: 10
                        }}>
                            <TeamName>MUMBAI INDIANS</TeamName>
                            <BoxContainer>
                                <Box variant="green">
                                    <BoxText>41</BoxText>
                                </Box>
                                <Box variant="red">
                                    <BoxText>42</BoxText>
                                </Box>
                            </BoxContainer>
                        </AccordianContent>
                        <Circle>
                            <CircleText>6</CircleText>
                        </Circle>
                        <AccordianContent style={{
                            marginTop: 10
                        }}>
                            <Over>20 OVER SESSION</Over>
                            <BoxContainer>
                                <Box>
                                    <BoxText>94</BoxText>
                                </Box>
                                <Box>
                                    <BoxText>95</BoxText>
                                </Box>
                            </BoxContainer>
                        </AccordianContent>
                    </Col>
                    <Col flex={5} />
                    <Col flex={20} style={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <ScoreContainer>
                            <Score>84/2</Score>
                            <RunningOver>20.0 over</RunningOver>
                            <Time>08:35 pm</Time>
                        </ScoreContainer>
                    </Col>
                </Row> */}
                {/* <Row>
                    <Col flex={75}>
                        <AccordianContent style={{
                            marginBottom: 10
                        }}>
                            <TeamName>MUMBAI INDIANS</TeamName>
                            <BoxContainer>
                                <Box variant="green">
                                    <BoxText>41</BoxText>
                                </Box>
                                <Box variant="red">
                                    <BoxText>42</BoxText>
                                </Box>
                            </BoxContainer>
                        </AccordianContent>
                        <Circle>
                            <CircleText>6</CircleText>
                        </Circle>
                        <AccordianContent style={{
                            marginTop: 10
                        }}>
                            <Over>20 OVER SESSION</Over>
                            <BoxContainer>
                                <Box>
                                    <BoxText>94</BoxText>
                                </Box>
                                <Box>
                                    <BoxText>95</BoxText>
                                </Box>
                            </BoxContainer>
                        </AccordianContent>
                    </Col>
                    <Col flex={5} />
                    <Col flex={20} style={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <ScoreContainer>
                            <Score>84/2</Score>
                            <RunningOver>20.0 over</RunningOver>
                            <Time>08:35 pm</Time>
                        </ScoreContainer>
                    </Col>
                </Row> */}
                {/* <Row>
                    <Col flex={75}>
                        <AccordianContent style={{
                            marginBottom: 10
                        }}>
                            <TeamName>MUMBAI INDIANS</TeamName>
                            <BoxContainer>
                                <Box variant="green">
                                    <BoxText>41</BoxText>
                                </Box>
                                <Box variant="red">
                                    <BoxText>42</BoxText>
                                </Box>
                            </BoxContainer>
                        </AccordianContent>
                        <Circle>
                            <CircleText>6</CircleText>
                        </Circle>
                        <AccordianContent style={{
                            marginTop: 10
                        }}>
                            <Over>20 OVER SESSION</Over>
                            <BoxContainer>
                                <Box>
                                    <BoxText>94</BoxText>
                                </Box>
                                <Box>
                                    <BoxText>95</BoxText>
                                </Box>
                            </BoxContainer>
                        </AccordianContent>
                    </Col>
                    <Col flex={5} />
                    <Col flex={20} style={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <ScoreContainer>
                            <Score>84/2</Score>
                            <RunningOver>20.0 over</RunningOver>
                            <Time>08:35 pm</Time>
                        </ScoreContainer>
                    </Col>
                </Row> */}
                {/* <Row>
                    <Col flex={75}>
                        <AccordianContent style={{
                            marginBottom: 10
                        }}>
                            <TeamName>MUMBAI INDIANS</TeamName>
                            <BoxContainer>
                                <Box variant="green">
                                    <BoxText>41</BoxText>
                                </Box>
                                <Box variant="red">
                                    <BoxText>42</BoxText>
                                </Box>
                            </BoxContainer>
                        </AccordianContent>
                        <Circle>
                            <CircleText>6</CircleText>
                        </Circle>
                        <AccordianContent style={{
                            marginTop: 10
                        }}>
                            <Over>20 OVER SESSION</Over>
                            <BoxContainer>
                                <Box>
                                    <BoxText>94</BoxText>
                                </Box>
                                <Box>
                                    <BoxText>95</BoxText>
                                </Box>
                            </BoxContainer>
                        </AccordianContent>
                    </Col>
                    <Col flex={5} />
                    <Col flex={20} style={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <ScoreContainer>
                            <Score>84/2</Score>
                            <RunningOver>20.0 over</RunningOver>
                            <Time>08:35 pm</Time>
                        </ScoreContainer>
                    </Col>
                </Row> */}
            </Container>}
        </Fragment>
    )
}

const ScoreContainer = styled(GradientContainer)`
    border-radius: 8px;
    padding: 8px;
    /* background-color: red; */
`;

const Score = styled.Text`
    color: #fff;
    font-family: "Roboto-Bold";
    font-size: ${wp(6)}px;
`;
const RunningOver = styled.Text`
    color: #fff;
    font-family: "Roboto-Regular";
    font-size: ${wp(3.2)}px;
`;
const Time = styled.Text`
    color: #d6d6d6;
    font-family: "Roboto-Regular";
    font-size: ${wp(3)}px;
`;

const Container = styled(GradientContainer)`
    margin-top: -10px;
    margin-bottom: 15px;
    padding: 15px 20px 10px 20px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
`;

const Circle = styled.View`
    height: 36px;
    width: 36px;
    border-radius: 36px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    position: absolute;
    align-self: center;
    margin: auto;
    top: 32px;
    z-index: 1;
`;

const CircleText = styled.Text`
    color: #3f0248;
    font-size: ${wp(5)}px;
    font-family: Roboto-Bold;
`;

const Caption = styled.Text`
    color: #fff;
    font-size: 10px;
    font-family: "Roboto-Bold";
    align-self: center;
    margin-top: -10px;
`;


const TeamName = styled.Text`
    color: #fff;
    font-family: 'Roboto-Black';
`;

const Over = styled.Text`
    color: #fff;
    font-family: 'Roboto-Black';
`;





const AccordianContent = styled(GradientContainer)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    height: 40px;
`;

const BoxContainer = styled.View`
    flex-direction: row;
`;

const Box = styled.View<{ variant?: "red" | "green" }>`
    border: 2px solid;
    border-color: #fff;
    height: 25px;
    width: 25px;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
    margin-left: 4px;
    ${({ variant }) => variant === "green" && `
        background-color:#0ac90a;
        border-color: green;
    `}
    ${({ variant }) => variant === "red" && `
        background-color:#ee2626;
        border-color: red;
    `}
`;

const BoxText = styled.Text`
    color: #fff;
    font-size: ${wp(3)}px;
    font-family: Roboto-Bold;
`;