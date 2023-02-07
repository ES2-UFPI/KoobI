import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    boxHeadProfile: {
        width: '100%',
        height: 153,
        backgroundColor: '#FF8B4E',
    },

    imageProfile: {
        // backgroundColor: '#00ff00',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: -60,
    },

    textName: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
    },

    boxAbout: {
        width: '100%',
        padding: 30,
        // backgroundColor: '#00ff00',
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
        height: '25%',
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