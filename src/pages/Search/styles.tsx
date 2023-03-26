import { StyleSheet, Dimensions } from "react-native";
import themes from "../../themes";

const styles = StyleSheet.create({
    headerBox: {
        backgroundColor: themes.colors.tela.principalHeaderColor
    },

    labelPesquisa: {
        fontSize: 20,
        fontFamily: "Nunito_400Regular",
        fontWeight: 'bold',
        color: themes.colors.texto.colorTextDark,

        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
    },

    areaPesquisa: {
        backgroundColor: themes.colors.inputs.inputColorBackground,
        width: "80%",

        marginTop: 15,
        padding: 15,

        fontSize: 18,

        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
    },
    
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        width: Dimensions.get("window").width * 0.85
    },

    buttonSearch: {
        height: "auto",
        backgroundColor: themes.colors.inputs.cancelButton ,

        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        padding: 16.7,
        marginTop: 15,
    }
})

export default styles;