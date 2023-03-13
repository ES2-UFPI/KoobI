import React, { useState } from "react"
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, ImageBackground } from "react-native"
import { AntDesign, Ionicons } from '@expo/vector-icons';

import styles from "./styles";

const img = [{uri: 'https://th.bing.com/th/id/OIP.knGOtQhXQcQr5yfBYSRmRAHaEK?pid=ImgDet&rs=1'},{uri: "https://http2.mlstatic.com/livro-harry-potter-e-as-reliquias-da-morte-ed-econmica--D_NQ_NP_757301-MLB20312596696_062015-F.jpg"}]
const nameStore = "Leitura Livraria"
const itemsToSell = [
    <TouchableOpacity>
        <ImageBackground source={img[1]}></ImageBackground>
    </TouchableOpacity>,

    <TouchableOpacity>

    </TouchableOpacity>,
]


export function StorePage( { navigation } ) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground source={img[0]} resizeMode='cover' style={styles.headerImgStore} imageStyle={{height: "100%"}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Image source={require('../../../assets/BackIconNormal.png')}/>
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.labelStore}>
                <Text style={styles.textLabel}>{nameStore}</Text>
                <TouchableOpacity>
                    <AntDesign name="shoppingcart" size={40} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.menuOptions}>
                <TouchableOpacity style={[styles.optionMenu, {borderRightWidth: 1}]}>
                    <Text style={[styles.textMenuOptions, {fontWeight: "bold"}]}>Produtos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.optionMenu, {paddingLeft: 25}]}>
                    <Text style={[styles.textMenuOptions, {justifyContent: 'center'}]}>Pesquisa <Ionicons name="search-outline" size={24} color="black" /></Text>
                </TouchableOpacity>
            </View>
            
        </ScrollView>
    );
}