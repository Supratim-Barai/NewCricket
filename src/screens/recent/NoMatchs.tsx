import React, { FC } from "react";
import styled from "styled-components/native";

export const NoMatchs: FC = () => (
    <Container>
        <Title>No Matches</Title>
    </Container>
)

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 50px 10px;
`;

const Title = styled.Text`
    color: #ccc;
    font-size: 16px;
`;