import React, { useState } from "react";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { View } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { Bet } from "./Bet";

export const Bets = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <Container>
            <BetRowWrap>
                <Bet value="5" />
                <Bet value="10" />
                <Bet value="15" />
                <Bet value="20" />
                <Bet value="25" />
            </BetRowWrap>
            <BetRowWrap>
                <Bet value="50" />
                <Bet value="100" />
                <Bet value="200" />
                <Bet value="500" />
                <Bet active value="1000" />
            </BetRowWrap>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                <CheckBox
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    style={{
                        borderColor: "#60026e"
                    }}
                />
                <Label>CONFIRM BETS BEFORE PLANNING</Label>
            </View>
        </Container>
    )
}

const Container = styled.View`
    background-color: #fff;
    padding: 16px 8px;
    border-radius: 16px;
`;

const BetRowWrap = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

const Label = styled.Text`
    font-size: ${hp(1.5)}px;
    font-family: 'Roboto-Bold';
    color: #60026e;
`;

