import { StyleSheet } from "react-native";
import themes from "../../themes";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    headerButton: {
        width: '100%',
        height: 'auto',
        backgroundColor: themes.colors.tela.principalHeaderColor,
    },

    areaProduct: {
        backgroundColor: themes.colors.tela.primaryBackground,
        width: '100%',
        height: '100%',

        justifyContent: "center",
        alignItems: 'center',
    },

    boxProduct: {
        backgroundColor: themes.colors.tela.secondHeaderColor,
        
        height: "80%",
        width: '90%',

        borderRadius: 10,
        marginBottom: 64,
        alignItems: 'center',
        
    },

    imageList: {
        width: '100%',
        height: '35%',
        elevation: 5,
    },

    labelBook: {
        flex: 1,
        justifyContent: 'flex-start',
        width: '100%',
        height: 50,


        alignItems: 'center',
        padding: 8,

        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,

        elevation: 5
    },

    description: {
        justifyContent: "flex-start",

        backgroundColor: themes.colors.inputs.cancelButton,
        
        width: '100%',
        height: '25%',
        paddingTop: 5,
        paddingRight: 10,
        paddingLeft: 10,

        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,

        elevation: 5

    },

    optionsBook: {

        backgroundColor: '#F9F9F9',

        width: '100%',
        height: '25%',
        alignItems: 'center',
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,

        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,

        elevation: 5

    },

    autorVend: {
        width: '80%',
        marginBottom: 10,
        
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    valorCompra: {
        width: '80%',
        marginTop: 10,
        marginBottom: 10,

        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    tittleText:{
        color: themes.colors.texto.colorTextDark,
        fontSize: 25,
        fontWeight: 'bold'
    },

    labelsText: {
        color: themes.colors.texto.colorTextDark,
        fontSize: 15,
        fontWeight: 'bold'
    },

    namesText: {
        color: themes.colors.texto.colorTextDark,
        fontSize: 16,
        fontWeight: "500"
    },

    textValor: {
        color: themes.colors.texto.colorTextDark,

        fontWeight: 'bold',
        fontSize: 20
    },

    textStyle: {
        fontSize: 14,
        color: '#74716F',
    },

    botaoAddCar: {
        backgroundColor: '#2173EE',
        width: 140,
        height: 66,

        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 10,
    },

    botaoText: {
        color: themes.colors.texto.colorTextClear,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        elevation: 5,

    },

    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 1,
        marginBottom: 2,
        // elevation: 5,
    }



})

export default styles