import { StyleSheet } from "react-native"
import themes from "../../themes"

const styles = StyleSheet.create({
    principalPage: {
        backgroundColor: themes.colors.tela.primaryBackground,
        width: '100%',
        height: '100%'
    },

    scrollOfElements: {
        alignItems: 'center',
        flexGrow: 1,
    },

    elementProduct: {
        justifyContent: 'flex-end',
        backgroundColor: themes.colors.inputs.elementToSelect,
        width: '95%',
        height: 200,

        marginTop: 14,
        marginBottom: 4,
        borderRadius: 15,
        elevation: 5
    },

    viewElementProduct: {
        backgroundColor: '#F7F7F7',
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        padding: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },

    textLinksLibs:{
        width: '50%',
        fontSize: 15,
        fontWeight: 'bold',
        color: themes.colors.texto.colorTextDark,
    }

})

export default styles