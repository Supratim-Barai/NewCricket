/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { Platform, View } from 'react-native';
import WebView from 'react-native-webview';
import { VideoPlayProps } from '../../types';

const VideoPlay: FC<VideoPlayProps> = ({ route }) => {
    const { item } = route.params;
    return (
        <View style={{ flex: 1 }}>
            <WebView
                style={{ marginTop: (Platform.OS == 'ios') ? 20 : 0, }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ uri: 'https://www.youtube.com/embed/' + item.url }}
            />

        </View>
    );
};

export default VideoPlay;
