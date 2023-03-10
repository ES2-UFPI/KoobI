import React from "react";
import { StyleSheet , Dimensions} from 'react-native';
import { useFonts, Inter_700Bold, Inter_400Regular } from "@expo-google-fonts/inter";
import themes from "../../themes";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themes.colors.primaryBackground,
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
        alignItems: "center",
        justifyContent: "space-between",
        width: Dimensions.get("window").width * 0.85
    },
    genderInput: {
        width: 155,
        height: "auto",
        padding: 10
    },
    languageInput: {
        width: 155,
        height: "auto",
        padding: 10, 
    },
    labelText: {
        fontFamily: "Inter_700Bold",
        fontSize: 18,
        marginBottom: 20,
    },
    paymentButton: {
        elevation: 2,
        backgroundColor: "#D5D5D5",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        width: 155,
        height: 38,
        marginTop: 18
    },
    paymentText: {
        fontFamily: "Inter_400Regular",
        fontSize: 12,
        padding: 10
    }
})

export default styles