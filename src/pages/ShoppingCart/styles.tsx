import { StyleSheet } from "react-native";
import { Nunito_400Regular } from '@expo-google-fonts/nunito'
import themes from "../../themes"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themes.colors.tela.primaryBackground,

    },

    scrollContainer: {
        // alignItems: 'center',
        flexGrow: 1,
        width: "100%",
        height: '120%',
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
})

export default styles