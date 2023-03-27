import react from 'react';
import { StyleSheet } from 'react-native';
import themes from '../../themes';

const styles = StyleSheet.create({
  
    headerBox: {
      backgroundColor: themes.colors.tela.principalHeaderColor,
      justifyContent: "flex-start",
      width: "100%",
    },
  
    addLivro: {
      width: 250,
      height: 60,
  
      margin: 20,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
  
      borderRadius: 15,
      elevation: 2,
      backgroundColor: themes.colors.inputs.addButtonsColor,
    },
  
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
  
    textAdd: {
      fontSize: 18,
      color: themes.colors.texto.colorTextClear,
      fontWeight: "bold",
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

    descript: {
        fontFamily: 'Nunito_400Regular',
        fontSize: 18,
        marginTop: 10,
        marginRight: 20,
        
    }
});


export default styles;