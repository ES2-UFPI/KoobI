import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function Header(){
    return (
        <View>
            <Image source={require("../../../assets/ItemImageIcon.png")} />
            <View>
                <Text>Livro </Text>
                <Text>Autor do livro / Nenhum</Text>
            </View>
            <Image source={require("../../../assets/editItem.png")} />
        </View>
    );
}
