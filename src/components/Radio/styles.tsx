import React from "react"
import  {StyleSheet}  from "react-native";
import { useFonts, Inter_700Bold } from "@expo-google-fonts/inter";

const styles = StyleSheet.create({
    horizontal: {
        flexDirection: "row",
        alignItems: "center"
    },
    optContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    outlineCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: "#777777",
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: "center"
    },
    innerCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#000000"
    },
    optText: {
        marginLeft: 7,
        marginRight: 15,
        fontSize: 14,
        fontFamily: "Inter_700Bold"
    }
})


export default styles