import { StyleSheet } from "react-native";
import { Nunito_400Regular } from '@expo-google-fonts/nunito'
import themes from "../../themes"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themes.colors.tela.primaryBackground,

    },

    scrollContainer: {
        // alignItems: 'center',
        flexGrow: 1,
        width: "100%",
        height: '100%',
    },

    headerImgStore: {
        // flex: 1,
        backgroundColor: "#565",
        width: "100%",
        height: "16%",
    },

    backButton: {
        backgroundColor: "#D9D9D950",
        justifyContent: "center",
        width: 80,
        height: "50%",

        padding: 15,
    },

    labelStore: {
        backgroundColor: "#75757550",
        flexDirection: 'row',
        justifyContent: "space-between",

        height: 50,

        paddingLeft: 15,
        paddingRight: 15,
    },

    textLabel: {
        fontSize: 28,
        fontFamily: 'Nunito_400Regular',
        fontStyle: "italic",
    },

    menuOptions: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',

        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        paddingTop: 10,

        borderBottomWidth: 1,
    },

    optionMenu: {
        width: "50%",
        alignItems: "center",
    },

    textMenuOptions: {
        fontFamily: "Nunito_400Regular",
        fontSize: 18,
    },

    itemsToSell: {
        width: '95%',
        height: 200,
        
        marginTop: 18,
        
    },

    blockImgBook: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    imageBooktoSell: {
        height: '100%',
        borderRadius: 15,
    },

    labelImgSell: {
        maxHeight: 68,
        backgroundColor: themes.colors.texto.colorTextClear,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        
    },

    labelTittle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 2.5
    },

    titulo: {
        fontFamily: 'Nunito_400Regular',
        fontSize: 15,
        fontWeight: "bold",
        width: "60%",
        
    },

    estadoUso: {
        fontFamily: 'Nunito_400Regular',
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "right",
    },

    styTextInput: {
        width: "90%",
        height: 60,
        
        backgroundColor: "#d9d9d9",
        padding: 15,
        borderRadius: 30,

        marginLeft: 'auto',
        marginRight: 'auto'
    },

    searchLabel:{
        width: "90%",
        height: 60,
        backgroundColor: "#FAFAFA",
        padding: 15,
        borderRadius: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 20
    },

    notFounded: {
        width: "90%",
        height: "70%",
        
        alignItems: 'center',
        justifyContent: 'center',

        marginLeft: 'auto',
        marginRight: 'auto'
    },

    textNotFounded: {
        fontFamily: 'Nunito_400Regular',
        fontSize: 22,
        marginBottom: 15,
        textAlign: 'center',

        color: "#00000060"
    },

    resultItems: {
        backgroundColor: themes.colors.inputs.elementToSelect,
        width: 360,
        justifyContent: 'center',
  
        padding: 15,
        marginTop: 15,
  
        borderRadius: 15
      },
  
      resultRow: {
          backgroundColor: themes.colors.inputs.elementToSelect,
          flexDirection: "row",
          justifyContent: 'space-between',
      },
  
      tituloPrize: {
          fontFamily: 'Nunito_400Regular',
          fontSize: 20,
          fontWeight: 'bold',
      },
      
      tituloName: {
        fontFamily: 'Nunito_400Regular',
        fontSize: 20,
        fontWeight: 'bold',
        maxWidth: "70%",
      },
  
      descript: {
          fontFamily: 'Nunito_400Regular',
          fontSize: 18,
          marginTop: 10,
          marginRight: 20,
          
      }
})



export default styles