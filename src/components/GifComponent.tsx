import React, { FC, ReactElement, ReactNode } from "react";
import { Image, StyleSheet } from "react-native";



const GifComponent: FC<{ ball: string|undefined }> = ({ ball }) => {
    if(ball === undefined || ball === null) return null;
    return gifperBall[ball]
}

export default GifComponent;

const styles = StyleSheet.create({
    img: {
        height: 90,
        width: 100
    }
})

const gifperBall: Record<string, ReactElement> = {
    "0": <Image source={require("../assets/gif/Absent.gif")} style={styles.img} resizeMethod="resize" resizeMode="contain" />,
    "1": <Image source={require("../assets/gif/Absent.gif")} style={styles.img} resizeMethod="resize" resizeMode="contain" />,
    "2": <Image source={require("../assets/gif/Absent.gif")} style={styles.img} resizeMethod="resize" resizeMode="contain" />,
    "4": <Image source={require("../assets/gif/Absent.gif")} style={styles.img} resizeMethod="resize" resizeMode="contain" />,
    "6": <Image source={require("../assets/gif/Absent.gif")} style={styles.img} resizeMethod="resize" resizeMode="contain" />,
    "w": <Image source={require("../assets/gif/Run-out.gif")} style={styles.img} resizeMethod="resize" resizeMode="contain" />,
    "wd": <Image source={require("../assets/gif/Absent.gif")} style={styles.img} resizeMethod="resize" resizeMode="contain" />,
    "nb": <Image source={require("../assets/gif/Absent.gif")} style={styles.img} resizeMethod="resize" resizeMode="contain" />,
    "lb": <Image source={require("../assets/gif/Absent.gif")} style={styles.img} resizeMethod="resize" resizeMode="contain" />,
    "b": <Image source={require("../assets/gif/Absent.gif")} style={styles.img} resizeMethod="resize" resizeMode="contain" />,
}