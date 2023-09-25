/* eslint-disable prettier/prettier */
import React, { FC, useCallback, useEffect, useState } from "react";
import { Composer, ComposerProps, GiftedChat, InputToolbar, InputToolbarProps, Message, MessageText, Send, SystemMessage, MessageProps, Bubble } from 'react-native-gifted-chat'
import { Image, StyleSheet, Text, View, Switch } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Container, GradientContainer, Col } from "../../../styles";

export const LiveChat: FC = () => {
    const [messages, setMessages] = useState<Array<any>>([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Sed efficitur varius dignissim.',
                //createdAt: new Date(),
                user: {
                    _id: 2,
                    //name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
            {
                _id: 2,
                text: 'Lorem ipsum\ndolor sit amet',
                //createdAt: new Date(),
                user: {
                    _id: 1,
                },
            },
            {
                _id: 3,
                text: 'Vivamus cursus nisi sit amet risus cursus fringilla.',
                //createdAt: new Date(),
                user: {
                    _id: 2,
                    //name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
            {
                _id: 4,
                text: 'Lorem ipsum',
                //createdAt: new Date(),
                user: {
                    _id: 1,
                },
            },
            {
                _id: 5,
                text: 'Aliquam erat volutpat.',
                //createdAt: new Date(),
                user: {
                    _id: 1,
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])
    return (
        <Container>
            <GradientContainer style={{
                flex: 1,
                marginBottom: 20,
                paddingBottom: 20,
                paddingTop: 10,
                paddingHorizontal: 20
            }}>
                <GiftedChat
                    alignTop
                    alwaysShowSend
                    scrollToBottom
                    renderSend={renderSend}
                    renderComposer={renderComposer}
                    renderInputToolbar={renderInputToolbar}
                    placeholder="Write a comment"
                    messages={messages}
                    onSend={messages => onSend(messages)}
                    renderBubble={renderBubble}
                    renderMessageText={renderMessageText}
                    messagesContainerStyle={{
                        backgroundColor: 'transparent',

                    }}
                    user={{
                        _id: 1,
                    }}
                />
            </GradientContainer>
        </Container>
    )
}

export const renderSystemMessage = (props: any) => (
    <SystemMessage
        {...props}
        containerStyle={{ backgroundColor: 'pink' }}
        wrapperStyle={{ borderWidth: 10, borderColor: 'white' }}
        textStyle={{ color: 'crimson', fontWeight: '900' }}
    />
);

export const renderMessage = (props: MessageProps<any>) => (
    <Message
        {...props}
        containerStyle={{
            left: {
                width: "100%"
            },
            right: {
                width: "100%"
            },
        }}
    />
);

const renderBubble = (props: any) => {
    var backgroundColor = '#2c0033';
    var padding = 5;

    return (
        <Bubble
            {...props}
            wrapperStyle={{
                left: {
                    backgroundColor: backgroundColor,
                    opacity: .8,
                    padding: padding,
                },
                right: {
                    backgroundColor: backgroundColor,
                    opacity: .8,
                    padding: padding,
                }
            }}
            style={{ backgroundColor: "black" }}
        />
    );
}

// export const renderMessageText = (props: any) => (
//     <MessageText
//         {...props}
//         containerStyle={{
//             left: { backgroundColor: 'yellow' },
//             right: { backgroundColor: 'purple' },
//         }}
//         textStyle={{
//             left: { color: 'red' },
//             right: { color: 'green' },
//         }}
//         linkStyle={{
//             left: { color: 'orange' },
//             right: { color: 'orange' },
//         }}
//         customTextStyle={{ fontSize: 24, lineHeight: 24 }}
//     />
// );

const renderMessageText = (props: any) => {

    return (
        <View style={styles.checkboxView}>

            <MessageText customTextStyle={{ color: "#fff" }}  {...props} />
        </View>
    );
};

export const renderSend = (props: any) => (
    <Send
        {...props}
        disabled={!props.text}
        containerStyle={{
            width: 44,
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 4,
        }}
    >
        <MaterialIcons name="send" size={30} />
    </Send>
);

export const renderInputToolbar = (props: InputToolbarProps) => (
    <InputToolbar
        {...props}
        containerStyle={{
            borderRadius: 25
        }}
        primaryStyle={{ alignItems: 'center' }}
    />
);

export const renderComposer = (props: ComposerProps) => (
    <Composer
        {...props}
        textInputStyle={{
            color: '#222B45'
        }}
    />
);

export const renderCustomView = ({ user }: any) => (
    <View>
        <Text>
            Current user:
            {user.name}
        </Text>
        <Text>From CustomView</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 8,
    },
    checkboxView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8
    }
});