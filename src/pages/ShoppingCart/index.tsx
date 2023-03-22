import React, { useState } from "react"
import { View, ScrollView, Button, Text, TouchableOpacity, Image, ImageBackground } from "react-native"
import styles from "./styles";

export function ShoppingCart({ navigation }){
    const [valorTotal, setValorTotal] = useState(0)

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
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <ImageBackground source={img[0]} resizeMode='cover' style={styles.headerImgStore} imageStyle={{height: "100%"}}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Image source={require('../../../assets/BackIconNormal.png')}/>
                    </TouchableOpacity>
                </ImageBackground>

                <View style={styles.labelStore}>
                    <Text style={styles.textLabel}>Leitura Livraria</Text>
                </View>

                <View style={styles.somaTotal}>
                    <Text style={styles.total}>Total</Text>
                    <Text style={styles.total}>R${valorTotal},00</Text>
                </View>
                
                <TouchableOpacity style={styles.confirmButton}>
                    <Text style={styles.textConfirmButton}>Concluir Pedido</Text>
                </TouchableOpacity>
                

            </ScrollView>
            
        </View>
    );
}