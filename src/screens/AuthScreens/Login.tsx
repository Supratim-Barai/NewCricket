/* eslint-disable prettier/prettier */
import * as React from 'react';
import { FC } from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native-elements';
import { Formik } from 'formik';
import Toast from 'react-native-simple-toast';
import { ScrollView } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { LoginProps } from '../../types';
import { useAppDispatch, useAppSelector } from '../../store';
import { login } from "../../store/features/auth.slice";

interface LoginFormValues {
  phone: string;
}

const Login: FC<LoginProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const { otpSent } = useAppSelector(state => state.auth);

  React.useEffect(() => {
    if (otpSent) {
      navigation.navigate("Otp");
    }
  }, [otpSent, navigation]);

  const initialValues: LoginFormValues = {
    phone: '',
  };

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageContainer>
          <Image
            source={require('../../assets/Logo.png')}
            style={{ width: 150, height: 150 }}
          />
        </ImageContainer>

        <Title>Login</Title>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            if (values.phone.length === 0) return Toast.show('The phone field is mandatory');
            const device_id = await DeviceInfo.getAndroidId();
            dispatch(login({ phone: values.phone, device_id }));
          }}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <>
              <Input
                placeholderTextColor="#d6c5d8"
                placeholder="Phone Number"
                keyboardType={'phone-pad'}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
              />
              <Button onPress={handleSubmit}>
                <ButtonText>{'Login'}</ButtonText>
              </Button>
            </>
          )}
        </Formik>
      </ScrollView>
    </Container>
  );
};

export default Login;

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

const Input = styled.TextInput`
  color: #d6c5d8;
  border-radius: 4px;
  padding: 12px 20px;
  font-size: 16px;
  margin: 10px 0;
  border-color: #731182;
  border-width: 1.2px;
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
  margin-top: 15px;
`;

const ButtonText = styled.Text`
  color: #d6c5d8;
  font-size: 18px;
  font-weight: bold;
`;
