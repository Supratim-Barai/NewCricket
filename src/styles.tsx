import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

// styles

export const Container = styled.View`
    flex: 1;
    background-color: #3f0248;
`;

export const GradientContainer = styled(LinearGradient).attrs({
    colors: ['#33014a', '#07000a']
})`
    border-radius: 30px;
`;

export const Row = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 10px;
`;

export const Col = styled.View<{ flex?: number }>`
    flex: ${({ flex }) => flex ?? 1};
`;

export const Divider = styled.View`
    background: #3f0248;
    height: 1.5px;
`;

// Text

export const SmallText = styled.Text`
    color: #5f026e;
    font-size: ${wp(3)}px;
    font-family: 'Roboto-Bold';
    text-align: center;
`;

export const SmallHeadingText = styled.Text`
    color: #fff;
    font-size: ${wp(3)}px;
    font-family: 'Roboto-Bold';
    text-align: center;
`;