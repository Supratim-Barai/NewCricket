import React, { Fragment } from "react";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { GradientContainer, Col } from "../../styles";

export const Session = () => (
    <Fragment>
        <Container>
            <SessionCol flex={18.6}>
                <LargeTitleText>69</LargeTitleText>
                <TitleText color="red">NO</TitleText>
            </SessionCol>
            <SessionColDivider />
            <SessionCol flex={18.6}>
                <LargeTitleText>70</LargeTitleText>
                <TitleText color="green">YES</TitleText>
            </SessionCol>
            <SessionColDivider />
            <SessionCol flex={25}>
                <TitleText color="gold">SESSION</TitleText>
                <TitleText>10 OVERS</TitleText>
            </SessionCol>
            <SessionColDivider />
            <SessionCol flex={18.6}>
                <LargeTitleText>03</LargeTitleText>
                <TitleText color="green">BALLS</TitleText>
            </SessionCol>
            <SessionColDivider />
            <SessionCol flex={18.6}>
                <LargeTitleText>05</LargeTitleText>
                <TitleText color="green">RUNS</TitleText>
            </SessionCol>
        </Container>
        <Container>
            <SessionCol flex={18.6}>
                <LargeTitleText>120</LargeTitleText>
                <TitleText color="red">NO</TitleText>
            </SessionCol>
            <SessionColDivider />
            <SessionCol flex={18.6}>
                <LargeTitleText>121</LargeTitleText>
                <TitleText color="green">YES</TitleText>
            </SessionCol>
            <SessionColDivider />
            <SessionCol flex={25}>
                <TitleText color="gold">SESSION</TitleText>
                <TitleText>20 OVERS</TitleText>
            </SessionCol>
            <SessionColDivider />
            <SessionCol flex={18.6}>
                <LargeTitleText>63</LargeTitleText>
                <TitleText color="green">BALLS</TitleText>
            </SessionCol>
            <SessionColDivider />
            <SessionCol flex={18.6}>
                <LargeTitleText>56</LargeTitleText>
                <TitleText color="green">RUNS</TitleText>
            </SessionCol>
        </Container>
        <Container>
            <OpenMinCol flex={33}>
                <Text>OPEN - 69</Text>
            </OpenMinCol>
            <OpenMinColDivider />
            <OpenMinCol flex={33}>
                <Text>MIN - 69</Text>
            </OpenMinCol>
            <OpenMinColDivider />
            <OpenMinCol flex={33}>
                <Text>MIN - 70</Text>
            </OpenMinCol>
        </Container>
    </Fragment>
)

const Container = styled(GradientContainer)`
    flex-direction: row;
    align-items: center;
    margin-top: 5px;
`;

const OpenMinCol = styled(Col)`
    align-items: center;
    justify-content: center;
    height: ${wp(8)}px;
`;

const OpenMinColDivider = styled(OpenMinCol)`
    flex: 0.5;
    background: #3f0248;
`;

const SessionCol = styled(Col)`
    align-items: center;
    justify-content: center;
    height: ${wp(15)}px;
`;

const SessionColDivider = styled(SessionCol)`
    flex: 0.5;
    background: #3f0248;
`;

const Text = styled.Text`
    color: #fff;
    font-size: ${hp(1.25)}px;
    font-family: 'Roboto-Bold';
`;

const TitleText = styled.Text<{ color?: string }>`
    color: ${({ color }) => color ?? "#fff"};
    font-size: ${wp(3)}px;
    font-family: 'Roboto-Bold';
`;

const LargeTitleText = styled(TitleText)`
    font-size: ${wp(4)}px;
`;