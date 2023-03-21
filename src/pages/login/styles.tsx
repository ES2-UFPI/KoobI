import { StyleSheet, Dimensions } from "react-native";
import { useFonts, Nunito_400Regular } from "@expo-google-fonts/nunito";

import themes from "../../themes";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    loginButton: {
        width: Dimensions.get('window').width * 0.75,
        color: "#004E7D"
    },
    loginText: {
        color: "#FAFAFA",
        fontFamily: "Nunito_400Regular"
        
    }
})

export default styles