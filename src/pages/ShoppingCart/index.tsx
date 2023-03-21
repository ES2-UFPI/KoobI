import React, { useState } from "react"
import { View, ScrollView, TextInput, Text, TouchableOpacity, Image, ImageBackground } from "react-native"
import styles from "./styles";

export function ShoppingCart({ navigation }){
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

    return(
        <View>
            <ScrollView>
                <ImageBackground source={img[0]} resizeMode='cover' style={styles.headerImgStore} imageStyle={{height: "100%"}}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                            <Image source={require('../../../assets/BackIconNormal.png')}/>
                        </TouchableOpacity>
                    </ImageBackground>
            </ScrollView>
            
        </View>
    );
}