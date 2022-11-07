import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
    background-color: #5f026e;
    flex: 1;
    height: 150px;
    margin: 8px 4px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    justify-content: center;
    overflow: hidden;
`;

export const GradientContainer = styled(LinearGradient)`
    height: 130px;
    flex: 1;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    margin: 4px 0 0 0;
    overflow: hidden;
`;


export const Header = styled.View`
    flex-direction: row;
`;

export const Logo = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 25px;
    border-color: #f0f0f0e2;
    border-width: 4px;
    position: absolute;
`;

export const Name = styled.Text`
    color: #fff;
    width: 40px;
    font-size: 16px;
    font-weight: 500;
`;

export const ScoreContainer = styled.View`
    align-items: flex-end;
    padding: 5px;
`;

export const Score = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 14px;
`;

export const Body = styled.View`
    flex: 1;
    justify-content: center;
`;

export const TeamScoreContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content:center;
    margin: 0 5px;
    margin-top: -20px;
`;

export const TeamContainer = styled.View`
    flex-direction: row;
    align-items: center;
    flex: 1;
`;

export const Over = styled.Text`
    font-size: 8px;
    color: #fff;
`;

export const TeamNameContainer = styled(LinearGradient)`
    flex-direction: row;
    align-items: center;
    flex: 1;
    background-color:#5f026e;
    height: 20px;
    justify-content: space-evenly;
    padding: 0 40px;
`;

export const TeamName = styled.Text`
    color: #fff;
    font-family: 'Roboto-Black';
`;

export const VsContainer = styled.View`
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background-color: #07000a;
    justify-content: center;
    align-items: center;
`;

export const VsText = styled.Text`
    font-size: 10px;
    color: #fff;
    font-family: 'Roboto-Black';
`;

export const MatchUpdateText = styled.Text`
    color: #fff;
    font-size: 8px;
    font-weight: bold;
    align-self: center;
    position: absolute;
    top: -12px;
`;