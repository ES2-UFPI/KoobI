import { StyleSheet } from "react-native";
import themes from "../../themes";
import { Nunito_400Regular } from '@expo-google-fonts/nunito'


const styles = StyleSheet.create({
    boxHeadProfile: {
        width: '100%',
        height: 153,
        backgroundColor: themes.colors.tela.principalHeaderColor,
    },

    imageProfile: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: -60,
    },

    textName: {
        color: themes.colors.texto.colorTextDark,
        fontSize: 30,
        fontWeight: 'bold',
    },

    boxAbout: {
        width: '100%',
        padding: 30,
        position: 'relative',
        top: -60,
        
    },

    aboutText: {
        fontSize: 18,
        fontFamily: "Nunito_400Regular",
        fontWeight: 'bold',
        
    },

    description: {
        fontSize: 18,
        color: themes.colors.texto.colorTextDark,
        fontFamily: "Nunito_400Regular",

        paddingLeft: 12,
        paddingRight: 12,
        marginBottom: 20,
    },

    line: {
        height: 120,
        width: '100%',
        flexDirection: 'row',
        
        marginTop: 20,
        padding: 20,

        justifyContent: 'flex-start',
        alignItems: 'center',

        borderBottomWidth: 3,
        borderLeftWidth: 2,
        borderColor: "#23232750"
    },

    textLabels: {
        marginLeft: 20,
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: "Nunito_400Regular",
    },
})


export default styles