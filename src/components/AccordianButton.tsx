import React, { FC } from "react";
import styled from "styled-components/native";
import Entypo from "react-native-vector-icons/Entypo";
import { GradientContainer } from "../styles";

export interface AccordianButton {
    title: string;
    show: boolean;
    toggleShow: () => void;
}

export const AccordianButton: FC<AccordianButton> = ({ title, show, toggleShow }) => (
    <TouchableOpacity activeOpacity={1} onPress={toggleShow}>
        <AccordianContent>
            <AccordianTitle>{title}</AccordianTitle>
            <IconContainer>
                <Entypo name={show ? "chevron-small-up" : "chevron-small-down"} color="#fff" size={20} />
            </IconContainer>
        </AccordianContent>
    </TouchableOpacity>
)


const TouchableOpacity = styled.TouchableOpacity`
    margin-top: 10px;
    height: 40px;
    z-index: 1;
`;

const AccordianContent = styled(GradientContainer)`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
`;

const AccordianTitle = styled.Text`
    color: #fff;
    font-size: 12px;
    font-family: "Roboto-Bold";
    text-transform: uppercase;
`;

const IconContainer = styled.View`
    border: 1px solid #000;
    border-radius: 2px;
`;
