import React, { FC } from "react";
import styled from "styled-components/native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacityProps } from "react-native";

const Card: FC<TouchableOpacityProps> = ({ children, ...rest }) => (
    <TouchableOpacity {...rest}>
        <GradientContainer colors={['#33014a', '#07000a']}>
            {children}
        </GradientContainer>
    </TouchableOpacity>
)

export const CardTitle: FC<{
    title: string;
    left?: boolean;
    right?: boolean;
}> = ({ title, left, right }) => (
    <Container left={left} right={right}>
        <Title>{title}</Title>
    </Container>
)

CardTitle.defaultProps = { left: false, right: false }


export default Card;

const TouchableOpacity = styled.TouchableOpacity`
    background-color: #5f026e;
    height: ${hp(18)}px;
    margin-horizontal: 6px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    justify-content: center;
    overflow: hidden;
`;

const GradientContainer = styled(LinearGradient)`
    flex: 1;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    margin: 4px 0 0 0;
    overflow: hidden;
`;

const Container = styled.View<{
    left?: boolean;
    right?: boolean;
}>`
    background-color: #5f026e;
    margin-top:-4px;

    /* ${({ left }) => left && `
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        padding: 6px 12px 6px 20px;
    `}

    ${({ right }) => right && `
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        padding: 6px 20px 6px 12px;
    `} */
`;

const Title = styled.Text`
    color: #fff;
    font-size: 8px;
    font-family: 'Roboto-Black';
`;

