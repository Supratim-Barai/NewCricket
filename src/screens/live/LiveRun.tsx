import React, { FC } from "react";
import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Batsman, Bowler } from "../../config/axios";

export const LiveRun: FC<{
    batsman: Array<Batsman> | undefined;
    bolwer: Bowler | undefined;
}> = ({ batsman, bolwer }) => (
    <GradientContainer colors={['#33014a', '#07000a']}>
        <Col flex={33}>
            <Text>{batsman?.[0]?.name}</Text>
            <Text>{batsman?.[0]?.run} ({batsman?.[0]?.ball})</Text>
        </Col>
        <Divider />
        <Col flex={33}>
            <Text>{batsman?.[1]?.name}</Text>
            <Text>{batsman?.[1]?.run} ({batsman?.[1]?.ball})</Text>
        </Col>
        <Divider />
        <Col flex={33}>
            <Text>{bolwer?.name}</Text>
            <Text>{bolwer?.wicket} - {bolwer?.run} ({bolwer?.over})</Text>
        </Col>
    </GradientContainer>
)

const GradientContainer = styled(LinearGradient)`
    border-radius: 30px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 2px 0;
`;

const Col = styled.View<{ flex?: number }>`
    flex: ${({ flex }) => flex ?? 1};
    align-items: center;
    justify-content: center;
    height: ${wp(12)}px;
`;

const Divider = styled(Col)`
    flex: 0.5;
    background: #3f0248;
`;

const Text = styled.Text`
    color: #fff;
    font-size: ${hp(1.25)}px;
    font-family: 'Roboto-Bold';
`;
