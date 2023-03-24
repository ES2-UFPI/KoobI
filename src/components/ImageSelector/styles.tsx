import { StyleSheet, Dimensions } from "react-native";
import themes from "../../themes";

const styles = StyleSheet.create({
    textLabelArea: {
        width: '100%',
        justifyContent: 'flex-start',
        paddingLeft: 5
    },
    textLabel: {
        fontFamily: "Inter",
        fontSize: 18,
        fontWeight: "700"
    },    
    horizontal: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 50
    },
    cameraButton : {
        width: Dimensions.get("window").width * 0.35,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        backgroundColor: "#2E4756",
        height: 35,
        marginLeft: 20
    },
    galleryButton: {
        width: Dimensions.get("window").width * 0.35,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        backgroundColor: "#2E4756",
        height: 35,
        marginRight: 20,
        marginLeft: 20
    },
    buttonText: {
        fontFamily: 'Inter',
        fontWeight: "bold",
        color: "#F6F6F6",
        fontSize: 15
    }
})

export default styles