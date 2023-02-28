import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    viewArea:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textLabelArea:{
        width:'100%',
        paddingLeft: 5 
    },

    textLabel:{
        textAlign: "left",
        fontFamily: "Inter_700Bold",
        color: "#000000",
        fontSize: 18,
    },

    textInputArea: {
        width: Dimensions.get('window').width * 0.35,  
        height: 52, 
        borderRadius: 15, 
        backgroundColor:'#F6F6F6', 
        justifyContent:'center', 
        marginTop: 10
    }, 
    textInput:{
        padding: 15, 
        fontFamily: 'Nunito_400Regular'
    }
});

export default styles