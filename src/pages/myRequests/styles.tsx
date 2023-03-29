import { StyleSheet, Dimensions } from "react-native";
import themes from "../../themes";

const styles = StyleSheet.create({
  headerBox: {
    backgroundColor: themes.colors.tela.principalHeaderColor,
  },

  scrollContainer: {
    // alignItems: 'center',
    flexGrow: 1,
    width: "100%",
    height: "120%",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: Dimensions.get("window").width * 0.85,
  },

  blockResultItems: {
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },

  resultItems: {
    backgroundColor: themes.colors.inputs.elementToSelect,
    width: 360,
    justifyContent: "center",

    padding: 15,
    marginTop: 15,

    borderRadius: 15,
  },

  resultRow: {
    backgroundColor: themes.colors.inputs.elementToSelect,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  tituloPrize: {
    fontFamily: "Nunito_400Regular",
    fontSize: 20,
    fontWeight: "bold",
  },

  descript: {
    fontFamily: "Nunito_400Regular",
    fontSize: 18,
    marginTop: 10,
    marginRight: 20,
  },
});

export default styles;
