import React, { useState } from "react"
import { View, TextInput, Text, TouchableOpacity, Image, ScrollView, ImageBackground } from "react-native"
import { AntDesign, Ionicons } from '@expo/vector-icons';

import styles from "./styles";

const nameStore = "Leitura Livraria"

export function StoreSearchPage({ navigation }) {
    const img = [
        {
            uri: 'https://th.bing.com/th/id/OIP.knGOtQhXQcQr5yfBYSRmRAHaEK?pid=ImgDet&rs=1'
        },
    ]
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
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
                    <TouchableOpacity style={[styles.optionMenu, {borderRightWidth: 1}]} onPress={() => navigation.navigate("Loja")}>
                        <Text style={[styles.textMenuOptions]}>Produtos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.optionMenu, {paddingLeft: 25}]}>
                        <Text style={[styles.textMenuOptions, {fontWeight: "bold", justifyContent: 'center'}]}>Pesquisa <Ionicons name="search-sharp" size={24} color="black" /></Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center', padding: 10}}>
                    <TextInput
                    style={{width: "90%", height: 60, backgroundColor: "#d9d9d9", padding: 15, borderRadius: 30}}
                    placeholder="Pesquisar"
                    >

                    </TextInput>
                </View>
                
            </ScrollView>

        </View>
    );
}
