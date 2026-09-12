import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Container } from "../../styles";
import { OverDetails } from "./OverDetails";
import io from "socket.io-client";
import { SOCKET_URL } from "../../constants";


export const BallByBall = () => {
    const [res, setRes] = useState<any>(null);

    useFocusEffect(React.useCallback(() => {
        const socket = io(SOCKET_URL);
        setRes(null);
        socket.on("ballByballDataScore", (res: any) => {
            setRes(res);
        })
        socket.emit("ballByballData", {});
        return () => socket.disconnect();
    }, []))
    console.log("bo",res?.perOver);
    return (
        <Container>
            <ScrollView>
                {res?.perOver?.map((ballByBall: any, k: number) => {
                    return (
                        <OverDetails key={k} ballByBall={ballByBall}/>
                    )
                })}

                {/* <OverDetails />
                <OverDetails />
                <OverDetails />
                <OverDetails />
                <OverDetails />
                <OverDetails /> */}
            </ScrollView>
        </Container>
    )
}