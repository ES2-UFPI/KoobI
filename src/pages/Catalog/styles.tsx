import { StyleSheet } from "react-native"
import themes from "../../themes"

const styles = StyleSheet.create({
    principalPage: {
        backgroundColor: themes.colors.primaryBackground,
        width: '100%',
        height: '100%'
    },

    viewPrincipal: {
        backgroundColor: themes.colors.elementToSelect,
        width: '90%',
        height: 150,

        marginTop: 20,
        marginBottom: 20,
        borderRadius: 30,
        elevation: 5
    },

    scrollOfElements: {
        alignItems: 'center',
        flexGrow: 1,
    },

    elementProduct: {
        width: '90%',
        height: 150,
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: themes.colors.elementToSelect,
        borderBottomLeftRadius: 30,
        borderTopRightRadius: 30,
        elevation: 5
    }

})

export default styles