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
        backgroundColor: themes.colors.inputs.inputColorBackground,

        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        padding: 16.7,
        marginTop: 15,
    },

    blockResultItems: {
        width: "100%",
        alignItems: "center",
        marginBottom: 15
    },

    resultItems: {
        backgroundColor: themes.colors.inputs.elementToSelect,
        width: 360,
        justifyContent: 'center',

        padding: 15,
        marginTop: 15,

        borderRadius: 15
    },

    resultRow: {
        backgroundColor: themes.colors.inputs.elementToSelect,
        flexDirection: "row",
        justifyContent: 'space-between',
    },

    tituloPrize: {
        fontFamily: 'Nunito_400Regular',
        fontSize: 20,
        fontWeight: 'bold',
    },

    descript: {
        fontFamily: 'Nunito_400Regular',
        fontSize: 18,
        marginTop: 10,
        marginRight: 20,
        
    }
})

export default styles;