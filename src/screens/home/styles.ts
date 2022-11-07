import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Container = styled.View`
    background: #3f0248;
`;

export const Text = styled.Text`
    color: #fff;
`;

export const Block = styled.View`
    margin-top: 5px;
`;

export const LiveBlock = styled.View`
    background: #60026e;
    border-radius: 30px;
`;

export const SubHeader = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const Line = styled.View`
    height: 2px;
    background: #fff;
    width: 42%;
`;

export const SubHeaderText = styled.Text`
    color: #fff;
`;