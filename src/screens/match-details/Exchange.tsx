import React from "react";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { GradientContainer, Col } from "../../styles";
import { Text, View, Switch } from "react-native";

export const Exchnage = () => (
    <Container>
        <ExchangeCol flex={70}>
            <SwitchContainer>
                <SwitchLabel>Exchnage Rate</SwitchLabel>
                <Switch
                    trackColor={{ false: "#fff", true: "#fff" }}
                    thumbColor={"#5f026e"}
                />
            </SwitchContainer>
            <BoxTitle>MUMBAI INDIANS</BoxTitle>
        </ExchangeCol>
        <ExchangeCol flex={30} style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent:"flex-end"
        }}>
            <BoxContainer>
                <BoxTitle>BACK</BoxTitle>
                <Box variant="green">
                    <BoxText>41</BoxText>
                </Box>
            </BoxContainer>
            <BoxContainer>
                <BoxTitle>LAY</BoxTitle>
                <Box>
                    <BoxText>42</BoxText>
                </Box>
            </BoxContainer>
        </ExchangeCol>
    </Container>
)

const SwitchContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

const SwitchLabel = styled.Text`
    color: grey;
    font-size: ${wp(4)}px;
    font-family: Roboto-Bold;
`;

const Container = styled(GradientContainer)`
    flex-direction: row;
    margin-top: 5px;
    padding: 10px 20px;
`;

const ExchangeCol = styled(Col)``;

const BoxContainer = styled.View`
    margin: 0 2px;
    align-items: center;
`;

const BoxTitle = styled.Text`
    color: #fff;
    font-size: ${wp(3)}px;
    font-family: Roboto-Bold;
`;

const Box = styled.View<{ variant?: "red" | "green" }>`
    border: 2px solid;
    background-color: ${({ variant }) => variant === "green" ? "#0ac90a" : "#ee2626"};
    border-color: ${({ variant }) => variant === "green" ? "green" : "red"};;
    height: 30px;
    width: 30px;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
`;

const BoxText = styled.Text`
    color: #fff;
    font-size: ${wp(3)}px;
    font-family: Roboto-Bold;
`;