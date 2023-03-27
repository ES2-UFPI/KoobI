import { StyleSheet, Dimensions } from "react-native";
import themes from "../../themes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  imagePrincipal: {
    marginTop: 50,
  },

  tittleUserReg: {
    marginVertical: 20,
    fontFamily: "Nunito_400Regular",
    fontWeight: "bold",
    fontSize: 30,
    color: themes.colors.texto.labelsText,
  },

  labelStyle: {
    color: themes.colors.texto.labelsText,
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

  registerButton: {
    width: 200,
    height: 60,

    justifyContent: "center",
    alignItems: "center",

    marginTop: 20,
    marginBottom: 10,

    borderRadius: 22,
  },

  textRegister: {
    fontSize: 30,
    color: "#fafafa",
    fontWeight: "bold",
    fontFamily: 'Nunito_400Regular',
  },

  footer: {
    flexDirection: "row",
    marginBottom: 20
  },

  footerText: {
    textDecorationLine: "underline",
    color: themes.colors.inputs.addButton,
  },
  imageContainer: {
    width: 270,
    height: 250,
    justifyContent: "center",
    alignItems: "flex-end"
},

});

export default styles;
