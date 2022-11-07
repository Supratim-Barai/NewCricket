import React, { FC } from "react";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { TouchableOpacityProps } from "react-native";

interface BetProps extends TouchableOpacityProps {
    value: string;
    active?: boolean;
}

export const Bet: FC<BetProps> = ({ value, active = false, ...rest }) => (
    <Box active={active} {...rest}>
        <Text active={active}>{value}</Text>
    </Box>
)

const Box = styled.TouchableOpacity<{ active: boolean }>`
    height: ${wp(14)}px;
    width: ${wp(14)}px;
    margin: 2px;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    background-color: #60026e;

    ${({active}) => active && `
        background-color: transparent;
        border: 1px solid #60026e;
    `}
`;

const Text = styled.Text<{active: boolean}>`
    color: #fff;
    font-size: ${hp(2)}px;
    font-family: 'Roboto-Bold';

    ${({active}) => active && `
        color:#60026e;
    `}
`;