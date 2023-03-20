import { StyleSheet, Dimensions } from "react-native";
import themes from "../../themes";

const styles = StyleSheet.create({
    headerBox: {
        backgroundColor: themes.colors.tela.principalHeaderColor
    },

    labelPesquisa: {
        fontSize: 20,
        // height: 100,

        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
    },

    areaPesquisa: {
        margin: 15,
        padding: 15,
        borderRadius: 15,
        backgroundColor: themes.colors.inputs.inputColorBackground
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
    addButtonText: {
        fontFamily: 'Inter_700Bold',
        fontWeight: "bold",
        color: "#F6F6F6",
        fontSize: 18
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: Dimensions.get("window").width * 0.85
    }
})

export default styles;