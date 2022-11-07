import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

const LIST_ITEM_HEIGHT = 54;
const styles = StyleSheet.create({
    container: {
        // backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderColor: "#f4f4f6",
        // height: LIST_ITEM_HEIGHT,
    },
    name: {
        fontSize: 16,
    },
    pointsContainer: {
        borderRadius: 8,
        backgroundColor: "#44c282",
        padding: 8,
    },
    points: {
        color: "white",
        fontWeight: "bold",
    },
});

export interface ListItem {
    name: string;
    points: string;
}

interface ListItemProps {
    item: ListItem;
    isLast: boolean;
}

const ListItem = ({ item, isLast }: ListItemProps) => {
    const bottomRadius = isLast ? 8 : 0;
    return (
        <Container>
            <Row>
                <Col flex={70}>
                    <View style={{
                        paddingRight: 10
                    }}>
                        <LinearGradient colors={['#33014a', '#07000a']} style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <Text>MUMBAI INDIANS</Text>
                            <View style={{
                                flexDirection: "row"
                            }}>
                                <View><Text>41</Text></View>
                                <View><Text>42</Text></View>
                            </View>
                        </LinearGradient>
                        <LinearGradient colors={['#33014a', '#07000a']} style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <Text>20 over session</Text>
                            <View style={{
                                flexDirection: "row"
                            }}>
                                <View><Text>94</Text></View>
                                <View><Text>95</Text></View>
                            </View>
                        </LinearGradient>
                    </View>
                </Col>
                <Col flex={30}>
                    <View style={{
                        paddingLeft:10
                    }}>
                        <LinearGradient colors={['#33014a', '#07000a']}>
                            <Text>84/2</Text>
                            <Text>19.0 over</Text>
                            <Text>8:33pm</Text>
                        </LinearGradient>
                    </View>
                </Col>
            </Row>
        </Container>
    );
};

export default ListItem;

const Container = styled.View`
    padding: 10px 20px;
`;

const Row = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 10px;
`;

const Col = styled.View<{ flex?: number }>`
    flex: ${({ flex }) => flex ?? 1};
`;
