import React, { Fragment, useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";
import { GradientContainer } from "../../styles";
import { AccordianButton } from "../../components/AccordianButton";

export const VenueScoringPattern = () => {
    const [show, setShow] = useState(true);
    return (
        <Fragment>
            <AccordianButton
                title="Venue Scoring Pattern"
                show={show}
                toggleShow={() => setShow(x => !x)}
            />
            {show && <Container>
                <TeamContainer>
                    <TeamNameContainer colors={['#5f026e', '#43045e', '#5f026e']}>
                        <TeamName>CSK</TeamName>
                        <VsText>CSK WON</VsText>
                        <TeamName>MI</TeamName>
                    </TeamNameContainer>
                    <Logo source={require("../../assets/images/dragon.png")} style={{ left: -2.5 }} />
                    <Logo source={require("../../assets/images/warface.png")} style={{ right: -2.5 }} />
                </TeamContainer>
                <ScoreContainer>
                    <Score>150/7 (20.0)</Score>
                    <Caption>CSK WON THE MATCH IN BY 20 runs</Caption>
                    <Score>130/10 (20.0)</Score>
                </ScoreContainer>
            </Container>}
        </Fragment>
    )
}

const Container = styled(GradientContainer)`
    height: 100px;
    margin-top: -10px;
    margin-bottom: 15px;
    padding: 15px 20px 10px 20px;
    justify-content: center;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
`;

const Caption = styled.Text`
    color: #fff;
    font-size: 10px;
    font-family: "Roboto-Bold";
    align-self: center;
    margin-top: -10px;
`;

const Logo = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 25px;
    border-color: #f0f0f0e2;
    border-width: 4px;
    position: absolute;
`;


const TeamContainer = styled.View`
    flex-direction: row;
    align-items: center;
    flex: 1;
`;

const TeamNameContainer = styled(LinearGradient)`
    flex-direction: row;
    align-items: center;
    flex: 1;
    background-color:#5f026e;
    height: 24px;
    justify-content: space-evenly;
    padding: 0 40px;
`;

const TeamName = styled.Text`
    color: #fff;
    font-family: 'Roboto-Black';
`;

const VsText = styled.Text`
    font-size: 14px;
    color: green;
    font-family: 'Roboto-Black';
`;

const ScoreContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Score = styled.Text`
    color: #fff;
    font-size: 12px;
    font-family: 'Roboto-Black';
`;
