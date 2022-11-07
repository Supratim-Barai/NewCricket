/* eslint-disable prettier/prettier */
import { useNavigation } from "@react-navigation/core";
import React, { FC, useEffect } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Block, SubHeader, SubHeaderText, Line } from "./styles";
import { useAppDispatch, useAppSelector } from "../../store";
import { getAllVideos } from "../../store/features/videos.slice";

export const VideoList: FC = () => {
    const dispatch = useAppDispatch();
    const navigation: any = useNavigation();
    const { data, loading } = useAppSelector(state => state.videos);

    useEffect(() => {
        dispatch(getAllVideos());
    }, [dispatch])

    const renderItem = ({ item, index }: any) => {
        return (
            <TouchableOpacity
                firstItem={index === 0}
                lastItem={index + 1 === data.length}
                activeOpacity={0.8}
                onPress={() => navigation.navigate("VideoPlay", {item})}
            >
                <ImageContainer>
                    <Image
                        source={{ uri: `https://img.youtube.com/vi/${item.url}/hqdefault.jpg` }}
                        resizeMode="cover"
                    />
                    <YoutubePlayImage source={require("../../assets/youtube.png")} resizeMode="contain"/>
                </ImageContainer>
            </TouchableOpacity>
        );
    };

    return (
        <Block >
            <SubHeader>
                <Line />
                <SubHeaderText>VIDEO</SubHeaderText>
                <Line />
            </SubHeader>
            <FlatList
                horizontal
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, _) => item._id}
                showsHorizontalScrollIndicator={false}
            />
        </Block>
    )
}

const ImageContainer = styled.View`
    border-radius: 16px;
    border-width: 2px;
    border-color: #5f026e;
    padding: 2px;
    align-items: center;
    justify-content: center;
`;

const Image = styled.Image`
    width: 170px;
    height: 100px;
    border-radius: 12px;
`;

const TouchableOpacity = styled.TouchableOpacity<{
    firstItem: boolean;
    lastItem: boolean;
}>`
    margin: 8px 2px;
    ${({ firstItem }) => firstItem && `margin-left: 8px;`}
    ${({ lastItem }) => lastItem && `margin-right: 8px;`}
`;

const YoutubePlayImage = styled.Image`
    position: absolute;
    height: 24px;
    border-radius: 6px;
`;