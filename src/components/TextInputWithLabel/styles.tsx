import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter';

const styles = StyleSheet.create({
    touchableOpacityStyle: {  
      position: 'absolute',
      width: 129,
      height: 42,
      alignItems: "center",
      justifyContent: 'center',
      left: 20,
      bottom: 28,
      backgroundColor: '#B4C5E4',
      borderRadius: 12,
    },
    buttonText: {
      fontFamily: "Inter",
      fontSize: 18,
      fontWeight: "bold"
    },
    textInput: {
      width: Dimensions.get('window').width * 0.85,
      borderRadius: 15,
      backgroundColor: "#F6F6F6",
      fontSize: 15,
      fontFamily: 'Nunito_400Regular',
      padding: 10,
      marginTop: 5
    },
    textLabelArea: {
      width: '100%',
      justifyContent: 'flex-start',
      paddingLeft: 5
    },  
    textLabel: {
      fontFamily: "Inter_700Bold",
      fontSize: 18
    }
});

export default styles