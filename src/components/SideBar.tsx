/* eslint-disable prettier/prettier */
import React, { FC } from "react";
import styled from "styled-components/native";
import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";

interface SideBarProps extends DrawerContentComponentProps { }

const SideBar: FC<SideBarProps> = (props) => {
    const {navigation} = props;
    return (
        <DrawerContentScrollView {...props}>
            <Container>
                <AvaterContainer>
                <Avater source={{uri:undefined}}/>
                </AvaterContainer>
                <Button onPress={() => navigation.navigate('MyProfile')}>
                    <Text>MY PROFILE</Text>
                </Button>
                <Button onPress={() => navigation.navigate('PasswordChange')}>
                    <Text>PASSWORD CHANGE</Text>
                </Button>
                <Button>
                    <Text>ADMIN</Text>
                </Button>
            </Container>
            <Divider/>
            <Container>
                <Button onPress={() => navigation.navigate('RateUs')}>
                    <Text>RATE US</Text>
                </Button>
                <Button onPress={() => navigation.navigate('ShareWithFriends')}>
                    <Text>SHARE WITH FRIENDS</Text>
                </Button>
                <Button onPress={() => navigation.navigate('UpdateApp')}>
                    <Text>UPDATE APP</Text>
                </Button>
            </Container>
            <Divider/>
            <Container>
                <Button onPress={() => navigation.navigate('AboutUs')}> 
                    <Text>ABOUT US</Text>
                </Button>
                <Button onPress={() => navigation.navigate('TermsOfUs')}>
                    <Text>TERMS OF US</Text>
                </Button>
                <Button onPress={() => navigation.navigate('PrivacyPolicy')}>
                    <Text>PRIVACY POLICY</Text>
                </Button>
            </Container>
            <Divider/>
            <Container>
                <Button onPress={() => navigation.navigate('FollowUs')}>
                    <Text>FOLLOW US</Text>
                </Button>
                <Button>
                    <Text>LOG OUT</Text>
                </Button>
            </Container>
        </DrawerContentScrollView>
    )
}

export default SideBar;

const Container = styled.View`
    padding: 0px 10px 0px 36px;
`;
const Divider = styled.View`
    width: 100%;
    height: 1.5px;
    margin: 15px 0;
    background-color: #949394;
`;
const Button = styled.TouchableOpacity`
    padding: 2px;
    margin-bottom: 5px;
`;
const Text = styled.Text`
    font-size: 12px;
    color: #ffffff;
`;
const AvaterContainer = styled.View`
    height: 56px;
    width: 56px;
    border-radius: 28px;
    background-color: #fff;
    margin: 10px 0;
    border: 5px #949394;
`;
const Avater = styled.Image`
    
`;