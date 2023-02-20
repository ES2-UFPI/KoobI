import { StyleSheet } from "react-native"
import themes from "../../themes"

const styles = StyleSheet.create({
    principalPage: {
        backgroundColor: themes.colors.primaryBackground,
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },

    viewPrincipal: {
        backgroundColor: themes.colors.inputColorBackground,
        width: '90%',
        height: 150,

        marginTop: 20,
        marginBottom: 20,
        borderRadius: 30,
        elevation: 5
    },

    elementProduct: {
        
    }

})

export default styles