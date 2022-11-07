import React, { FC } from "react";
import styled from "styled-components/native";

interface MatchPointProps {
    leftValue: number | undefined;
    title: string;
    rightValue: number | undefined;
}

export const MatchPoint: FC<MatchPointProps> = ({ leftValue, title, rightValue }) => (
    <PointContainer>
     
        {Boolean(leftValue) && <Point style={{ backgroundColor: "#0e9001" }}>
            <Text>{leftValue}</Text>
        </Point>}
        <Text>{title}</Text>
        {Boolean(rightValue) && <Point style={{ backgroundColor: "#860101" }}>
            <Text>{rightValue}</Text>
        </Point>}
    </PointContainer>
)

const PointContainer = styled.View`
    position: absolute;
    flex-direction: row;
    align-items: center;
    align-self: center;
    bottom: 12px;
`;
const Point = styled.View`
    border-color: #fff;
    justify-content: center;
    align-items: center;
    align-self: center;
    height: 20px;
    min-width: 20px;
    border-radius: 1px;
    margin-left: 4px;
    margin-right: 4px;
    padding: 0 4px;
`;
const Text = styled.Text`
    color: #fff;
    font-size: 10px;
    font-family: 'Roboto-Black';
`;