/* eslint-disable prettier/prettier */
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ActivityIndicator, FlatList, RefreshControl, View } from "react-native";
import styled from "styled-components/native";
import { Loading } from "../../components/Loading";
import { ItemSeprator } from "../../ui";
import { NoMatchs } from "./NoMatchs";
import { Match } from "../../config/axios";
import { useGetRecentMatches } from "../../hooks/use-get-recent-matches";
import RecentMatchCard from "./RecentMatchCard";

const Odi = () => {
    const { refreshing, isReachedEnd, loading, matches, fetchMore, onRefresh } = useGetRecentMatches("ODI");
    const navigation: any = useNavigation();

    const renderItem = ({ item }: { item: Match }) => {
        return (
            <RecentMatchCard match={item} />
        )
    }

    const renderFooter = () => (
        <View style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 8
        }}>
            {loading && <ActivityIndicator />}
        </View>
    )

    if (loading && matches.length === 0) return <Loading />;
    return (
        <Container>
            <FlatList
                data={matches}
                renderItem={renderItem}
                ListHeaderComponent={ItemSeprator}
                ItemSeparatorComponent={ItemSeprator}
                ListEmptyComponent={NoMatchs}
                keyExtractor={item => item.match_id.toString()}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                onEndReachedThreshold={0.2}
                onEndReached={isReachedEnd ? undefined : fetchMore}
                ListFooterComponent={renderFooter}
            />
        </Container>
    )
}

export default Odi;

const Container = styled.View`
    flex: 1;
    background-color: #3f0248;
`;
