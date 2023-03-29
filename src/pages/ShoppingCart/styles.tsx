import { Dimensions, StyleSheet } from "react-native";
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
    labelStore: {
        backgroundColor: "#75757550",
        justifyContent: "center",

        height: 50,

        paddingLeft: 15,
        paddingRight: 15,
    },

    textLabel: {
        fontSize: 28,
        fontFamily: 'Nunito_400Regular',
        fontStyle: "italic",
    },

    somaTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        marginTop: 17,
        marginHorizontal: 12,
        paddingVertical: 12,

        borderBottomWidth: 1,
        borderTopWidth: 1,
    },

    total: {
        fontFamily: 'Nunito_400Regular',
        fontSize: 28,
    },

    confirmButton: {
        width: "80%",
        height: 'auto',
        backgroundColor: themes.colors.inputs.addButton,

        marginRight: 'auto',
        marginLeft: 'auto',

        marginVertical: 38,
        paddingVertical: 10,
        borderRadius: 20,

        alignItems: "center",
        justifyContent: "center",
    },

    textConfirmButton: {
        fontFamily: 'Nunito_400Regular',
        fontSize: 28,
        fontWeight: 'bold',
        color: themes.colors.texto.colorTextClear,

    },

    resultItems: {
        width: Dimensions.get('window').width * 0.92,
        height: 70,
        elevation: 5,
        justifyContent: 'center',

        marginTop: 12,
        marginLeft: 'auto',
        marginRight: 'auto',

        paddingLeft: 8,
        paddingRight: 12,

        backgroundColor: themes.colors.texto.labelsText,
    },

    resultRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    tituloName: {
        fontSize: 16,
        fontFamily: 'Nunito_400Regular',
        marginBottom: 8,
    },

    tituloPrize: {
        fontSize: 16,
        fontFamily: 'Nunito_400Regular',
        fontWeight: 'bold',
        // color: themes.colors.inputs.addButton,
        color: "#0085FF",
        marginBottom: 8,
    },

    buttonDelete: {
        width: "auto",
        height: "auto",
        backgroundColor: "#D94545",
        padding: 4,
        marginTop: 'auto',
        marginBottom: 'auto',
        elevation: 5
        
    }

})

export default styles