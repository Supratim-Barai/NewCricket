import { createContext, useContext } from "react";
import { Socket, io } from "socket.io-client";
import { SOCKET_URL } from "../constants";

export const socket = io(SOCKET_URL);

socket.on("connect", () => {
    console.log("connect", socket.id); // x8WIv7-mJelg7on_ALbx
});

socket.on("disconnect", () => {
    console.log("disconnect", socket.id); // undefined
});
export const SocketContext = createContext<Socket<any, any>>(socket);

export const SocketProvider = ({ children }: any) => {
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

export const useSocket = () => {
    const context = useContext(SocketContext);
    if (!context) throw Error("useSocket must be use inside SocketProvider");
    return context;
}


export const EVENTS = {
    GET_LIVE_MATCH_LIST: "getLiveMatchList",
    GET_LIVE_MATCH_LIST_EMIT: "getLiveMatchListEmit",
    GET_LIVE_SCORE_API: "getLiveScoreApi",
    GET_LIVE_SCORE_API_EMIT: "getLiveScoreApiEmit"
}