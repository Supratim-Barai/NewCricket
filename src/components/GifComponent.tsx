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
    "0": <Image source={require("../assets/gif/zero.jpeg")} style={styles.img} resizeMethod="resize" resizeMode="contain" />,
    "1": <Image source={require("../assets/gif/one.gif")} style={styles.img} resizeMethod="resize" resizeMode="contain" />,
    "2": <Image source={require("../assets/gif/two.gif")} style={styles.img} resizeMethod="resize" resizeMode="contain" />,
    "3": <Image source={require("../assets/gif/three.gif")} style={styles.img} resizeMethod="resize" resizeMode="contain" />,
    "4": <Image source={require("../assets/gif/four.gif")} style={styles.img} resizeMethod="resize" resizeMode="contain" />,
    "5": <Image source={require("../assets/gif/five.gif")} style={styles.img} resizeMethod="resize" resizeMode="contain" />,
    "6": <Image source={require("../assets/gif/six.gif")} style={styles.img} resizeMethod="resize" resizeMode="contain" />,
    "7": <Image source={require("../assets/gif/seven.gif")} style={styles.img} resizeMethod="resize" resizeMode="contain" />,
    "8": <Image source={require("../assets/gif/eight.gif")} style={styles.img} resizeMethod="resize" resizeMode="contain" />,
    "9": <Image source={require("../assets/gif/nine.gif")} style={styles.img} resizeMethod="resize" resizeMode="contain" />,
    "10": <Image source={require("../assets/gif/ten.gif")} style={styles.img} resizeMethod="resize" resizeMode="contain" />,
    "w": <Image source={require("../assets/gif/Run-out.gif")} style={styles.img} resizeMethod="resize" resizeMode="contain" />,
    "wd": <Image source={require("../assets/gif/Absent.gif")} style={styles.img} resizeMethod="resize" resizeMode="contain" />,
    "nb": <Image source={require("../assets/gif/Absent.gif")} style={styles.img} resizeMethod="resize" resizeMode="contain" />,
    "lb": <Image source={require("../assets/gif/Absent.gif")} style={styles.img} resizeMethod="resize" resizeMode="contain" />,
    "b": <Image source={require("../assets/gif/Absent.gif")} style={styles.img} resizeMethod="resize" resizeMode="contain" />,
}