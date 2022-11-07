import React, { FC } from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

interface MatchTypeProps {
    name: "MOST LIVE" | "UPCOMING" | "RECENT";
}

export const MatchType: FC<MatchTypeProps> = ({ name }) => (
    <Center style={StyleSheet.absoluteFillObject}>
        <Container style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5
        }}>
            <Text>{name}</Text>
        </Container>
    </Center>
)

const Center = styled.View`
    align-items: center;
`;

const Container = styled.View`
    background-color: #5f026e;
    width: 72px;
    height: 20px;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.5);
    padding-top: 2px;
`;

const Text = styled.Text`
    color: #fff;
    font-size: 8px;
    font-family: 'Roboto-Black';
    align-self: center;
`;