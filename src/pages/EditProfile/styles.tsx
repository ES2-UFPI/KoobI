import { StyleSheet, Dimensions } from "react-native";
import themes from "../../themes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.tela.primaryBackground,
    height: Dimensions.get("window").height,
    alignItems: "center",
    justifyContent: "center",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("window").width * 0.85,
  },

  pageTitle: {
    fontFamily: "Nunito_400Regular",
    fontSize: 40,
    fontWeight: "bold",
    alignItems: "center",
    marginTop: 30,
  },

  addButton: {
    flex: 2,
    backgroundColor: "#2E4756",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    height: 52,
    width: "35%",
    padding: 10,
    marginTop: 30,
    marginLeft: 15,
    marginBottom: 25,
  },

  cancelButton: {
    flex: 2,
    backgroundColor: "#B4C5E4",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    height: 52,
    width: "35%",
    padding: 10,
    marginTop: 30,
    marginRight: 15,
    marginLeft: 0,
    marginBottom: 25,
  },
  addButtonText: {
    fontFamily: "Inter_700Bold",
    fontWeight: "bold",
    color: "#F6F6F6",
    fontSize: 18,
  },
  cancelButtonText: {
    fontFamily: "Inter_700Bold",
    fontWeight: "bold",
    color: "#000000",
    fontSize: 18,
  },
  labelStyle: {
    color: themes.colors.texto.colorTextDark,
    paddingLeft: 12,
  },

  inputTextStyle: {
    backgroundColor: "#FFF5D3",
    paddingLeft: 27,
    borderRadius: 22,
  },

  rowView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: Dimensions.get("window").width * 0.85,
  },

  inputState: {
    backgroundColor: "#FFF5D3",

    width: "25%",

    paddingLeft: 27,
    borderRadius: 22,
  },

  inputCity: {
    backgroundColor: "#FFF5D3",

    width: "70%",
    paddingLeft: 27,
    borderRadius: 22,
  },

  inputStreet: {
    backgroundColor: "#FFF5D3",

    width: "60%",

    paddingLeft: 27,
    borderRadius: 22,
  },

  inputNumbH: {
    backgroundColor: "#FFF5D3",

    width: "35%",

    paddingLeft: 27,
    borderRadius: 22,
  },
  imageContainer: {
    width: 250,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
