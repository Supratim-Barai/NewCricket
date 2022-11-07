import React, { FC } from "react";
import { Transitioning } from "react-native-reanimated";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import styled from "styled-components/native";

export interface TabProps extends BottomTabBarButtonProps {
    label: string;
    image: any;
}

export const Tab: FC<TabProps> = ({ label, image, accessibilityState, onPress }) => {
    const focused = accessibilityState?.selected;
    return (
        <Container onPress={onPress}>
            <Background focused={focused}>
                <Oval focused={focused}>
                    <ImageWrap>
                        <Image source={image} />
                    </ImageWrap>
                    <Label focused={focused}>{label}</Label>
                </Oval>
            </Background>
        </Container>
    )
}

const Container = styled.TouchableWithoutFeedback`
`;
const Background = styled(Transitioning.View) <{ focused: boolean }>`
    flex: auto;
    align-items: center;
    justify-content: center;
` as any;
const Oval = styled.View<{ focused: boolean }>`
    align-items: center;
    justify-content: center;
    padding: 6px 8px;
    ${({ focused }) => focused && `
        flex-direction: row;
        background-color: #5f026e;
        align-self: center;
        border-radius: 12px;
    `}
` as any;
const Label = styled.Text<{ focused: boolean }>`
    font-size: 8px;
    margin-top: 5px;
    font-weight: bold;
    color: #949394;
    ${({ focused }) => focused && `
        color: #ffffff;
        margin-left: 5px;
        margin-top: 0;
    `}
` as any;

const Image = styled.Image`
    height: 16px;
    width: 16px;
    resize-mode:cover;
`;

const ImageWrap = styled.View``;