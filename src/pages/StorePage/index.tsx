import React, { useState } from "react"
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, ImageBackground } from "react-native"
import { AntDesign, Ionicons } from '@expo/vector-icons';
import styles from "./styles";

const nameStore = "Leitura Livraria"

export function StorePage( { navigation } ) {
    const img = [
        {
            uri: 'https://th.bing.com/th/id/OIP.knGOtQhXQcQr5yfBYSRmRAHaEK?pid=ImgDet&rs=1'
        },
        
        {
            uri: "https://http2.mlstatic.com/livro-harry-potter-e-as-reliquias-da-morte-ed-econmica--D_NQ_NP_757301-MLB20312596696_062015-F.jpg"
        },
        {
            uri: "https://th.bing.com/th/id/OIP.cHvwABogsVcbK-z6dJEYrAHaKi?pid=ImgDet&rs=1"
        },
        {
            uri: "https://th.bing.com/th/id/OIP.ASOA1yrBSoU9AbIlZIc52QHaKm?pid=ImgDet&rs=1"
        },
    ]
    const items = [
        <TouchableOpacity key="v1" style={styles.itemsToSell} onPress={() => navigation.navigate('CompraProduto')}>
            <ImageBackground source={img[1]} style={styles.blockImgBook} imageStyle={styles.imageBooktoSell}>
                <View style={styles.labelImgSell}>
                    <View style={styles.labelTittle}>
                        <Text style={styles.titulo}>Harry Potter e as Relíquias da Morte parte I</Text>
                        <Text style={styles.estadoUso}>Novo</Text>
                    </View>
                    <View style={styles.labelTittle}>
                        <Text style={[styles.titulo, {color: "#515050"}]}>R$ 89,90</Text>
                        <Text style={styles.estadoUso}>Avaliação fica aqui</Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>,

        // <TouchableOpacity key="v2" style={styles.itemsToSell} onPress={() => navigation.navigate('CompraProduto')}>
        //     <ImageBackground source={img[2]} style={styles.blockImgBook} imageStyle={styles.imageBooktoSell}>
        //         <View style={styles.labelImgSell}>
        //             <View style={styles.labelTittle}>
        //                 <Text style={styles.titulo}>Dom Quixote</Text>
        //                 <Text style={styles.estadoUso}>Novo</Text>
        //             </View>
        //             <View style={styles.labelTittle}>
        //                 <Text style={[styles.titulo, {color: "#515050"}]}>R$ 49,90</Text>
        //                 <Text style={styles.estadoUso}>Avaliação fica aqui</Text>
        //             </View>
        //         </View>
        //     </ImageBackground>
        // </TouchableOpacity>,

    ];

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
                    <TouchableOpacity style={[styles.optionMenu, {borderRightWidth: 1}]}>
                        <Text style={[styles.textMenuOptions, {fontWeight: "bold"}]}>Produtos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.optionMenu, {paddingLeft: 25}]} onPress={() => navigation.navigate("PesquisaProdutoLoja")}>
                        <Text style={[styles.textMenuOptions, {justifyContent: 'center'}]}>Pesquisa <Ionicons name="search-outline" size={24} color="black" /></Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center'}}>
                    {items}
                </View>

            </ScrollView>
        </View>

    );
}