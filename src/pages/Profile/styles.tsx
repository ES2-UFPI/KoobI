import { StyleSheet } from "react-native";
import themes from "../../themes";


const styles = StyleSheet.create({
    boxHeadProfile: {
        width: '100%',
        height: 153,
        backgroundColor: themes.colors.principalHeaderColor,
    },

    imageProfile: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: -60,
    },

    textName: {
        color: themes.colors.colorTextDark,
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
        fontWeight: 'bold',
    },

    description: {
        fontSize: 18,
        marginBottom: 20
    },

    line: {
        height: '24%',
        width: '100%',
        borderTopWidth: 1,
        borderStyle: 'solid',
        marginTop: 20,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }



})


export default styles