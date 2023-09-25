import React, { FC, Fragment, useState } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import chunk from "lodash/chunk";
import { GradientContainer } from "../../../styles";
import { AccordianButton } from "../../../components/AccordianButton";
import { TeamSqad } from "../../../config/axios";

export const PlayerList: FC<{ squad: TeamSqad }> = ({ squad }) => {
    const [show, setShow] = useState(true);
    return (
        <Fragment>
            <AccordianButton
                title={squad.name}
                show={show}
                toggleShow={() => setShow(x => !x)}
            />
            {show && <Container>
                {chunk(squad.player, 4).map((players, key) => (
                    <View key={key} style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        marginBottom: 15
                    }}>
                        {players.map(player => <View key={player.player_id} style={{
                            width: "25%",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Logo source={{ uri: player.image }} />
                            <Name numberOfLines={2}>{player.name}</Name>
                            <Role>{player.play_role}</Role>
                        </View>)}
                    </View>
                ))}
            </Container>}
        </Fragment>
    )
}

const Name = styled.Text`
    color: #fff;
    font-size: 12px;
    font-family: "Roboto-Bold";
`;

const Role = styled.Text`
    color: gold;
    font-size: 8px;
    font-family: "Roboto-Bold";
`;

const Container = styled(GradientContainer)`
    margin-top: -10px;
    padding: 20px 20px 10px 20px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
`;

const Logo = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 25px;
    border-color: #f0f0f0e2;
    border-width: 4px;
    margin-bottom: 2px;
    object-fit: contain;
`;
