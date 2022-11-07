import React from "react";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { View } from "react-native";


export const MatchTable = () => {
    return (
        <Container>
            <Title>CHENNAI SUPER KING VS MUMBAI INDIANS</Title>
            <Divider />
            <Context>
                <View style={{
                    flexDirection: "row"
                }}>
                    <View style={{ flex: 25 }}>
                        <TableHeadingText style={{textAlign: "left"}}>Back (Bet for)</TableHeadingText>
                    </View>
                    <View style={{ flex: 25 }}>
                        <TableHeadingText>odds</TableHeadingText>
                    </View>
                    <View style={{ flex: 25 }}>
                        <TableHeadingText>stake</TableHeadingText>
                    </View>
                    <View style={{ flex: 25 }}>
                        <TableHeadingText>Your Profit</TableHeadingText>
                    </View>
                </View>
                <View style={{
                    flexDirection: "row",
                    marginTop: 10
                }}>
                    <View style={{ flex: 25 }}>
                        <TableText style={{textAlign: "left"}}>CSK</TableText>
                    </View>
                    <View style={{ flex: 25 }}>
                        <TableText>1.16</TableText>
                    </View>
                    <View style={{ flex: 25 }}>
                        <TableText>1000</TableText>
                    </View>
                    <View style={{ flex: 25 }}>
                        <TableText>1160.00</TableText>
                    </View>
                </View>
            </Context>
            <Divider />
            <View style={{paddingHorizontal: 8}}>
                <View style={{
                    flexDirection: "row"
                }}>
                    <View style={{ flex: 30 }}>
                        <CaptionText style={{marginLeft: 20}}>Pla</CaptionText>
                    </View>
                    <View style={{ flex: 30 }}>
                        <CaptionText style={{textAlign: "center"}}>6 Sec.</CaptionText>
                    </View>
                    <View style={{ flex: 40 }}>
                        <CaptionText style={{
                            textAlign: "right"
                        }}>Liability: 1000:00</CaptionText>
                    </View>
                </View>
            </View>
        </Container>
    )
}

const Container = styled.View`
    background-color: #fff;
    padding: 8px 0;
    border-radius: 16px;
    margin-bottom: 15px;
`;

const Divider = styled.View`
    height: 2px;
    background-color: #cacaca;
    margin: 5px 0;
`;

const Title = styled.Text`
    text-align: center;
    font-size: ${hp(1.65)}px;
    font-family: 'Roboto-Bold';
`;

const TableText = styled.Text`
    text-align: center;
    font-size: ${hp(1.5)}px;
`;

const CaptionText = styled.Text`
    font-size: ${hp(1.5)}px;
    font-family: 'Roboto-Bold';
`;
const TableHeadingText = styled(TableText)`
    font-size: ${hp(1.65)}px;
    color: #60026e;
    font-family: 'Roboto-Bold';
`;

const Context = styled.View`
    padding: 8px;
`;
