/* eslint-disable prettier/prettier */
import { useNavigation } from "@react-navigation/core";
import React, { FC, useEffect } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Block, SubHeader, SubHeaderText, Line } from "./styles";
import { useAppDispatch, useAppSelector } from "../../store";
import { getAllNews } from "../../store/features/news.slice";

export const NewsList: FC = () => {
    const dispatch = useAppDispatch();
    const navigation: any = useNavigation();
    const { data, loading } = useAppSelector(state => state.news);

    useEffect(() => {
        dispatch(getAllNews());
    }, [dispatch])

    const renderItem = ({ item }: any) => {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("ViewNews", {item})}>
                <ImageContainer>
                    <Image source={{ uri: item.image_link }} resizeMode="cover" />
                </ImageContainer>
                <TextContainer>
                    <Title numberOfLines={2}>{item.title}</Title>
                    <Time>1 Hour ago</Time>
                </TextContainer>
            </TouchableOpacity>
        );
    };

    return (
        <Block>
            <SubHeader>
                <Line />
                <SubHeaderText>STORIES</SubHeaderText>
                <Line />
            </SubHeader>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, _) => item._id}
            />
        </Block>
    )
}

const ImageContainer = styled.View`
    border-radius: 8px;
    border-width: 1.5px;
    border-color: #FFF;
    padding: 2px;
`;

const Image = styled.Image`
    width: 110px;
    height: 60px;
    border-radius: 6px;
`;

const TouchableOpacity = styled.TouchableOpacity`
    margin: 8px;
    flex-direction: row;
    /* align-items: center; */
`;

const TextContainer = styled.View`
    margin: 8px;
    flex: 1;
`;

const Title = styled.Text`
    color: #fff;
    font-size: 12px;
`;

const Time = styled.Text`
    color: #fff;
    font-size: 8px;
    text-transform: uppercase;
    align-self: flex-end;
`;