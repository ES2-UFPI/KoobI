import { StyleSheet } from "react-native";
import { Nunito_400Regular } from '@expo-google-fonts/nunito'
import themes from "../../themes"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themes.colors.primaryBackground,

    },

    headerImgStore: {
        // flex: 1,
        backgroundColor: "#565",
        width: "100%",
        height: "16%",
    },

    backButton: {
        backgroundColor: "#D9D9D950",
        justifyContent: "center",
        width: 80,
        height: "50%",

        padding: 15,
    },

    labelStore: {
        backgroundColor: "#75757550",
        flexDirection: 'row',
        justifyContent: "space-between",

        height: 50,

        paddingLeft: 15,
        paddingRight: 15,
    },

    textLabel: {
        fontSize: 28,
        fontFamily: 'Nunito_400Regular',
        fontStyle: "italic",
    },

    menuOptions: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',

        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        paddingTop: 10,

        borderBottomWidth: 1,
    },

    optionMenu: {
        width: "50%",
        alignItems: "center",
    },

    textMenuOptions: {
        fontFamily: "Nunito_400Regular",
        fontSize: 18,
    }
})



export default styles