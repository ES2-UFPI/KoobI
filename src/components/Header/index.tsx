import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import themes from '../../themes';

export default function Header(){
    return (
        <View style={styles.cabecalho}>
            <View>
                <Text style={styles.textCabecalho}>KoobI </Text>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cabecalho:{
        flexDirection: 'row',
        width: '100%',
        height: 'auto',
        maxHeight: 100,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.tela.principalHeaderColor
    },

    textCabecalho: {
      color: themes.colors.texto.colorTextClear,
      fontStyle: 'italic',
      fontSize: 30,
      fontWeight: 'bold'
    }
})