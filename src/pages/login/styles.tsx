import react from "react";
import { StyleSheet } from "react-native";
import themes from "../../themes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  inputLoginPass: {
    backgroundColor: "#FFF5D3",
    paddingLeft: 27,
    borderRadius: 22,
  },

  buttonEntry: {
    
    width: 200,
    height: 60,

    justifyContent: "center",
    alignItems: "center",

    marginTop: 20,
    marginBottom: 20,

    borderRadius: 22,
  },


  textEntry: {
    fontSize: 30,
    color: "#fafafa",
    fontWeight: "bold",
    fontFamily: 'Nunito_400Regular',
  }

})

export default styles;
