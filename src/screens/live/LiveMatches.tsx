import React, { useCallback, useEffect, useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import io from "socket.io-client";
import styled from "styled-components/native";
import { ItemSeprator } from "../../ui";
import { NoMatchs } from "../recent/NoMatchs";
import { useFocusEffect } from "@react-navigation/native";
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { LeftMatchTitle } from "../../components/MatchTitle";
import { MatchType } from "../../components/MatchType";
import { T20 } from "../../components/T20";
import { MatchPoint } from "../../components/MatchPoint";
import { Match, getLiveMatches } from "../../config/axios";
import { Loading } from "../../components/Loading";
const SOCKET_URL = "http://52.66.245.248:3001";

export const LiveMatches = ({ navigation }: any) => {
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [matches, setMatches] = useState<Array<Match>>([]);


    const getMatche = async () => {
        try {
            const { data } = await getLiveMatches("", 1, 3);
            if (!data?.error) {
                setMatches(data.data.result)
            }
        } finally {
            setRefreshing(false);
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

    console.log({ matches });


    const renderItem = ({ item: match }: { item: Match }) => (
        <Card activeOpacity={1} onPress={() => navigation.navigate("LiveStack_Live", {
            match_id: match.match_id,
            screen: "Live_LiveMatch",
            series_id: match.series_id
        })}>
            <GradientContainer colors={['#33014a', '#07000a']}>
                <Header>
                    <LeftMatchTitle title={match?.series || ""} />
                    <MatchType name="MOST LIVE" />
                    <T20 title={match?.match_type} />
                </Header>
                <Body>
                    <TeamScoreContainer>
                        <MatchUpdateText>CSK WON THE TOSS & OPTED TO BAT</MatchUpdateText>
                        <ScoreContainer>
                            <Score>{match?.team_a_scores}</Score>
                            <Over>{match.team_a_over} OVER</Over>
                        </ScoreContainer>
                        <TeamContainer>
                            <TeamNameContainer colors={['#5f026e', '#43045e', '#5f026e']}>
                                <TeamName>{match?.team_a_short || ""}</TeamName>
                                <VsContainer>
                                    <VsText>VS</VsText>
                                </VsContainer>
                                <TeamName>{match?.team_b_short || ""}</TeamName>
                            </TeamNameContainer>
                            <Logo source={{ uri: match?.team_a_img }} style={{ left: -2.5 }} />
                            <Logo source={{ uri: match?.team_b_img }} style={{ right: -2.5 }} />
                        </TeamContainer>
                        <ScoreContainer>
                            <Score>{match.team_b_scores}</Score>
                            <Over>{match.team_b_over} OVER</Over>
                        </ScoreContainer>
                    </TeamScoreContainer>
                    <MatchPoint leftValue={Number(match?.min_rate)} title={match?.fav_team || ""} rightValue={Number(match?.max_rate)} />
                </Body>
            </GradientContainer>
        </Card>
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
                keyExtractor={(item) => item.match_id.toString()}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    background-color: #3f0248;
`;


const Card = styled.TouchableOpacity`
    background-color: #5f026e;
    height: ${hp(18)}px;
    margin-horizontal: 6px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    justify-content: center;
    overflow: hidden;
`;

const GradientContainer = styled(LinearGradient)`
    flex: 1;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    margin: 4px 0 0 0;
    overflow: hidden;
`;


const Header = styled.View`
    flex-direction: row;
`;

const Logo = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 25px;
    border-color: #f0f0f0e2;
    border-width: 4px;
    position: absolute;
`;

const Name = styled.Text`
    color: #fff;
    width: 40px;
    font-size: 16px;
    font-weight: 500;
`;

const ScoreContainer = styled.View`
    align-items: flex-end;
    padding: 5px;
`;

const Score = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 14px;
`;

const Body = styled.View`
    flex: 1;
    justify-content: center;
`;

const TeamScoreContainer = styled.View`
flex-direction: row;
align-items: center;
justify-content:center;
margin: 0 5px;
margin-top: -20px;
`;
const TeamContainer = styled.View`
flex-direction: row;
align-items: center;
flex: 1;
`;
const Over = styled.Text`
font-size: 8px;
color: #fff;
`;
const TeamNameContainer = styled(LinearGradient)`
flex-direction: row;
align-items: center;
flex: 1;
background-color:#5f026e;
height: 20px;
justify-content: space-evenly;
padding: 0 40px;
`;
const TeamName = styled.Text`
color: #fff;
font-family: 'Roboto-Black';
`;
const VsContainer = styled.View`
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background-color: #07000a;
    justify-content: center;
    align-items: center;
`;
const VsText = styled.Text`
font-size: 10px;
color: #fff;
font-family: 'Roboto-Black';
`;

const MatchUpdateText = styled.Text`
    color: #fff;
    font-size: 8px;
    font-weight: bold;
    align-self: center;
    position: absolute;
    top: -12px;
`;