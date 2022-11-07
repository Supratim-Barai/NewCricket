import React from "react";
import styled from "styled-components/native";

export const Loading = () => (
    <Container>
        <Loader size={30} color="#fff"/>
    </Container>
)

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #3f0248;
`;

const Loader = styled.ActivityIndicator`
    color: #fff;
`;