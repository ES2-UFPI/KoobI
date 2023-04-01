import { StyleSheet, Dimensions } from "react-native";
import themes from "../../themes";

const styles = StyleSheet.create({
  headerBox: {
    backgroundColor: themes.colors.tela.principalHeaderColor,
  },

  tituloPage: {
    fontFamily: "Nunito_400Regular",
    fontSize: 40,
    fontWeight: "bold",
    color: themes.colors.texto.colorTextDark,

    marginTop: 14,
    marginBottom: 12,
  },

  scrollContainer: {
    // alignItems: 'center',
    flexGrow: 1,
    width: Dimensions.get("window").width * 0.92,
    height: 'auto',
    alignItems: 'center',

  },

  viewElement: {
    width: Dimensions.get("window").width * 0.90,
    backgroundColor: themes.colors.inputs.elementToSelect,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: "space-between",
    
    marginTop: 10,
    marginBottom: 8,

    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 12,
    paddingTop: 12,

    borderRadius: 10,
  
    elevation: 5,
  },

  labelsText: {
    fontFamily: "Nunito_400Regular",
    fontWeight: "bold",
    fontSize: 18,
    color: themes.colors.texto.colorTextDark,
  }
  
});

export default styles;
