import React, { useState } from "react";
import Modal from "react-native-modal";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import styled from "styled-components/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { MatchTable } from "./MatchTable";
import { Bets } from "./Bets";

export const BetSlipsModal = () => {
    const [open, setOpen] = useState(true);
    return (
        <Modal
            isVisible={open}
            style={{
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Container>
                <Header>
                    <Title>BET SLIPS</Title>
                    <CloseButton onPress={() => setOpen(false)}>
                        <AntDesign name="close" size={16} color="#fff" />
                    </CloseButton>
                </Header>
                <Content>
                    <MatchTable />
                    <Bets />
                    <Button>
                        <ButtonText>PLACE BETS</ButtonText>
                    </Button>
                </Content>
            </Container>
        </Modal>
    )
}

const Button = styled.TouchableOpacity`
    height: ${wp(8)}px;
    width: ${wp(32)}px;
    margin-top: 15px;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    align-self: center;
    background-color: #60026e;
`;

const ButtonText = styled.Text`
    color: #fff;
    font-size: ${hp(1.5)}px;
    font-family: 'Roboto-Bold';
`;

const Container = styled.View`
    width: ${wp(90)}px;
    background-color: #cacaca;
`;

const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #60026e;
    padding: 15px;
`;

const Title = styled.Text`
    color: #fff;
    font-size: ${hp(2)}px;
    font-family: 'Roboto-Bold';
`;

const CloseButton = styled.TouchableOpacity``;

const Content = styled.View`
    padding: 15px;
`;
