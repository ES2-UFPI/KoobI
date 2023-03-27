import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import themes from "../../themes";


const styles = StyleSheet.create({
    touchableOpacityStyle: {  
      position: 'absolute',
      width: 129,
      height: 42,
      alignItems: "center",
      justifyContent: 'center',
      left: 20,
      bottom: 28,
      backgroundColor: themes.colors.inputs.cancelButton,
      borderRadius: 12,
    },

    buttonText: {
      fontFamily: "Inter_700Bold",
      fontSize: 18,
    },
    
    textLabelArea: {
      width: '100%',
      justifyContent: 'flex-start',
      paddingLeft: 5,
      marginTop: 5
    },  
    
    textLabel: {
      fontFamily: "Inter_700Bold",
      fontSize: 18
    },

    textInput: {
      width: "100%",
      height: "100%",
      borderRadius: 15,
      fontSize: 16,
      fontFamily: "Nunito_400Regular",
      paddingLeft: 5,
      marginTop: 5,
      marginBottom: 10,
      backgroundColor: "#F6F6F6",
    },


    inputArea: {
      flexDirection: "row",
      alignItems: "center",
      width: Dimensions.get('window').width * 0.85,
      height: 50, 

      marginTop: 5,
      marginBottom: 10,
    }, 

    icon: {
      width: '15%',
      height: 50,

      justifyContent: "center",
      alignItems: "center",

      marginBottom: 5,
      backgroundColor: "#F6F6F6",
      borderBottomRightRadius: 15,
      borderTopRightRadius: 15
    }  
});

export default styles