import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import themes from '../../themes';

export default function Header(){
    return (
        <View style={styles.cabecalho}>
            <View>
                {/* <Text style={styles.textCabecalho}>KoobI </Text> */}
                <Image        
                source={require('../../../assets/Koobi.png')}
                />
                
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

})