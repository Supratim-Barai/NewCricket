import React, { FC } from "react";
import styled from 'styled-components/native';

interface MatchTitleProps {
    title: string;
}

export const LeftMatchTitle: FC<MatchTitleProps> = ({ title }) => (
    <LeftContainer>
        <Title>{title}</Title>
    </LeftContainer>
)

export const RightMatchTitle: FC<MatchTitleProps> = ({ title }) => (
    <RightContainer>
        <Title>{title}</Title>
    </RightContainer>
)

const Container = styled.View`
    background-color: #5f026e;
    margin-top:-4px;
`;

const LeftContainer = styled(Container)`
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 6px 12px 6px 20px;
`;

const RightContainer = styled(Container)`
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding: 6px 20px 6px 12px;
`;

const Title = styled.Text`
    color: #fff;
    font-size: 8px;
    font-family: 'Roboto-Black';
`;

