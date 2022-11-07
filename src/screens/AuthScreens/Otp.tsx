/* eslint-disable prettier/prettier */
import * as React from 'react';
import { FC } from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native-elements';
import OtpInputs from 'react-native-otp-inputs';
import { ScrollView, Text, TextBase } from 'react-native';
import Toast from 'react-native-simple-toast';
import { useState } from 'react';
import { OtpProps } from '../../types';
import { useAppDispatch, useAppSelector } from '../../store';
import { verifyOTP } from "../../store/features/auth.slice";

const Otp: FC<OtpProps> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const { tempOtp, id,isLoggedIn } = useAppSelector(state => state.auth);
  const [otp, setOtp] = useState('');

  React.useEffect(() => {
    if (isLoggedIn) {
      navigation.replace("Drawer");
    }
  }, [isLoggedIn, navigation]);

  const handleVerifyOTP = React.useCallback(() => {
    if (otp.length !== 4) return Toast.show('OTP is required');
    if (id) {
      dispatch(verifyOTP({ id, otp }));
    }
  }, [otp, id, dispatch]);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageContainer>
          <Image
            source={require('../../assets/Logo.png')}
            style={{ width: 150, height: 150 }}
          />
        </ImageContainer>
        <Text style={{ color: "#fff" }}>{tempOtp}</Text>
        <Title>OTP verification</Title>
        <OtpInputs
          handleChange={code => setOtp(code)}
          numberOfInputs={4}
          autofillFromClipboard={true}
          inputContainerStyles={{
            backgroundColor: '#fff',
            paddingHorizontal: 7,
            paddingVertical: 2,
            borderRadius: 4,
            marginHorizontal: 20,
          }}
          keyboardType={'default'}
          inputStyles={{ textAlign: 'center', fontSize: 18 }}
        />
        <ResendButton>
          <ButtonText>Resend OTP</ButtonText>
        </ResendButton>
        <Button onPress={handleVerifyOTP}>
          <ButtonText>Submit</ButtonText>
        </Button>
      </ScrollView>
    </Container>
  );
};

export default Otp;

const Container = styled.View`
  background: #3f0248;
  flex: 1;
  padding: 25px;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: #d6c5d8;
  margin: 20px 0;
`;

const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 30%;
`;

const Button = styled.TouchableOpacity`
  background: #550267;
  padding: 15px;
  border-radius: 5px;
  align-items: center;
  border-color: #350144;
  border-width: 1.2px;
  margin: 25px 0;
`;

const ButtonText = styled.Text`
  color: #d6c5d8;
  font-size: 18px;
  font-weight: bold;
`;

const ResendButton = styled.TouchableOpacity`
  align-items: center;
  padding: 25px;
  margin:5px
`;