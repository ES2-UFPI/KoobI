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
        height: 50,
        backgroundColor: '#16262E'
    },

    textCabecalho: {
      color: '#e7e4e4',
      fontSize: (25),
    }
})