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
      fontFamily: "Inter",
      fontSize: 18,
      fontWeight: "bold"
    },
    textInput: {
      width: '100%',
      fontSize: 15,
      fontFamily: "Nunito_400Regular",
      backgroundColor: "#F6F6F6",
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
    inputArea: {
      flexDirection: "row",
      alignItems: "center",
      width: Dimensions.get('window').width * 0.85,
      backgroundColor: "#F6F6F6",
      borderRadius: 15,
      height: 50, 
      padding: 10,     
      marginTop: 5,
      marginBottom: 10,
    }, 
    icon: {
      width: '15%',
      justifyContent: "center",
      alignItems: "center",
      height: 50,
      backgroundColor: "#F6F6F6",
      borderRadius: 15
    }  
});

export default styles