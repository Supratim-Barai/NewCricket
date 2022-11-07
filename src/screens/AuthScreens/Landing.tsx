/* eslint-disable prettier/prettier */
import * as React from 'react';
import { FC } from 'react';
import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import { LandingProps } from '../../types';

const Landing: FC<LandingProps> = ({ navigation }) => {
  return (
    <ImageBackground source={require('../../assets/splash.png')} style={{
      flex: 1,
      justifyContent: "flex-end",
      paddingBottom: 30
    }} resizeMode="cover">
      <ButtonContainer>
        <ButtonRow>
          <Button onPress={() => navigation.navigate('Login')}>
            <ButtonText>{'SIGN IN'}</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate('Login')}>
            <ButtonText>{'SIGN UP'}</ButtonText>
          </Button>
        </ButtonRow>
        <Button2 onPress={() => navigation.navigate('Drawer')}>
          <ButtonText>{'SKIP'}</ButtonText>
        </Button2>
      </ButtonContainer>
    </ImageBackground>

  );
};

export default Landing;

const ButtonContainer = styled.View`
margin:25px;
`
const ButtonRow = styled.View`
display:flex;
flex-direction: row;
justify-content: space-between;
`
const Button = styled.TouchableOpacity`
  background: #550267;
  padding: 15px;
  border-radius: 5px;
  align-items: center;
  border-color: #350144;
  border-width: 1.2px;
  width:48.5%
`;

const Button2 = styled.TouchableOpacity`
  background: #550267;
  padding: 15px;
  border-radius: 5px;
  align-items: center;
  border-color: #350144;
  border-width: 1.2px;
  margin-top: 15px;
  
`;

const ButtonText = styled.Text`
  color: #d6c5d8;
  font-size: 18px;
  font-weight: bold;
`;