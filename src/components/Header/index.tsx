import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

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
        backgroundColor: '#16262E'
    },

    textCabecalho: {
      color: '#e7e4e4',
      fontStyle: 'italic',
      fontSize: 30,
      fontWeight: 'bold'
    }
})