import { useNavigation } from "@react-navigation/core";
import React, { FC, useCallback, useEffect, useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";
import { getNews, News } from "../../config/axios";
import { Loading } from "../../components/Loading";

const NewsComponent: FC = () => {
    const navigation: any = useNavigation();
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [news, setNews] = useState<Array<News>>([]);

    const getMatche = async () => {
        try {
            const { data } = await getNews();
            if (!data?.error) {
                setNews(data.data.result)
            }
        } finally {
            setRefreshing(false)
            setLoading(false);
        }
    }

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        getMatche();
    }, [refreshing]);

    useEffect(() => {
        getMatche();
    }, [])

    const renderItem = ({ item }: { item: News }) => {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("ViewNews", { item })}>
                <ImageContainer>
                    <Image source={{ uri: item.image }} resizeMode="cover" />
                </ImageContainer>
                <TextContainer>
                    <Title numberOfLines={2}>{item.title}</Title>
                    <Time>{item.pub_date}</Time>
                </TextContainer>
            </TouchableOpacity>
        );
    };

    if (loading && news.length === 0) return <Loading />;
    return (
        <BackgroundContainer>
            <Container>
                <GradientContainer colors={['#33014a', '#07000a']}>
                    <FlatList
                        data={news}
                        renderItem={renderItem}
                        keyExtractor={(item, _) => item.news_id.toString()}
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                        }
                    />
                </GradientContainer>
            </Container>
        </BackgroundContainer>
    )
}

export default NewsComponent;

const BackgroundContainer = styled.View`
    flex: 1;
    background-color:  #3f0248;
`;
const Text = styled.Text``;

const Container = styled.View`
    background-color: #5f026e;
    flex: 1;
    margin: 15px 4px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    justify-content: center;
`;

const GradientContainer = styled(LinearGradient)`
    flex: 1;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    margin: 8px 0 0 0;
    padding: 8px 0;
    overflow: hidden;
`;
const ImageContainer = styled.View`
    border-radius: 8px;
    border-width: 2px;
    border-color: #FFF;
    padding: 4px;
`;

const Image = styled.Image`
    width: 120px;
    height: 60px;
    border-radius: 8px;
`;

const TouchableOpacity = styled.TouchableOpacity`
    margin: 8px;
    flex-direction: row;
    align-items: center;
`;

const TextContainer = styled.View`
    margin: 5px 10px;
    flex: 1;
`;

const Title = styled.Text`
    color: #fff;
    font-size: 14px;
`;

const Time = styled.Text`
    color: #fff;
    font-size: 10px;
    text-transform: uppercase;
    align-self: flex-end;
    margin-top: 4px;
`;