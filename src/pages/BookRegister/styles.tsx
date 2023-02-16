import React from "react";
import { StyleSheet , Dimensions} from 'react-native';
import { useFonts, Inter_700Bold } from "@expo-google-fonts/inter";


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFDEA",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addButton: {
        flex: 2,
        backgroundColor: "#2E4756",
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        height: 52,
        width: "35%",
        padding: 10,
        marginTop: 30,
        marginLeft: 15
    },
    cancelButton: {
        flex: 2,
        backgroundColor: "#B4C5E4",
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        height: 52,
        width: "35%",
        padding: 10,
        marginTop: 30,
        marginRight: 15,
        marginLeft: 0
    },
    addButtonText: {
        fontFamily: 'Inter_700Bold',
        fontWeight: "bold",
        color: "#F6F6F6",
        fontSize: 18
    },
    cancelButtonText: {
        fontFamily: 'Inter_700Bold',
        fontWeight: "bold",
        color: "#000000",
        fontSize: 18
    },
    row: {
        flexDirection: "row",
        textAlign: "center",
        justifyContent: "space-between",
        width: Dimensions.get("window").width * 0.85
        }



})

export default styles