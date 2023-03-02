import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function BookToSell(){
    return (
        <View style={styles.itemLivro}>
            <Image source={require("../../../assets/ItemImageIcon.png")} />
            <View>
                <Text>Livro </Text>
                <Text>Autor do livro / Nenhum</Text>
            </View>
            <Image source={require("../../../assets/editItem.png")} />
        </View>
    );
}

const styles = StyleSheet.create({
    itemLivro: {
        backgroundColor: "#F4EEA9",
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        width: "92%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRightWidth: 2,
        borderLeftWidth: 2,
        elevation: 5,
      },
});