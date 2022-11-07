import React, { FC } from "react";
import styled from "styled-components/native";

export const T20:FC<{title?:string}> = ({title="T20"}) => (
    <Container>
        <Triangle />
        <Text>{title}</Text>
    </Container>
)

const Container = styled.View`
    align-items:center;
    right: 5%;
    position: absolute;
`;

const Triangle = styled.View`
    border-top-width: 20px;
    border-right-width: 30px;
    border-bottom-width: 0;
    border-left-width: 30px;
    border-top-color: #5f026e;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
`;

const Text = styled.Text`
    color: #fff;
    font-size: 8px;
    font-weight: bold;
    position: absolute;
`;