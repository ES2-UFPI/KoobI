import React from "react";
import { StyleSheet , Dimensions} from 'react-native';
import { useFonts, Inter_700Bold } from "@expo-google-fonts/inter";
import themes from "../../themes"



const styles = StyleSheet.create({
    container: {
        backgroundColor: themes.colors.primaryBackground,
        flex: 1,
        alignItems: "center",
    },

    form: {
        marginTop: 20
    },

    addButton: {
        flex: 2,
        backgroundColor: themes.colors.addButtonsColor,
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
        backgroundColor: themes.colors.cancelButton,
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
        color: themes.colors.colorTextClear,
        fontSize: 18
    },

    cancelButtonText: {
        fontFamily: 'Inter_700Bold',
        fontWeight: "bold",
        color: themes.colors.colorTextDark,
        fontSize: 18
    },

    rowLine: {
        flexDirection: "row",
        textAlign: "center",
        justifyContent: "space-between",
        width: Dimensions.get("window").width * 0.85
        }



})

export default styles