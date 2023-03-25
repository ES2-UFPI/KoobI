import React, { useState } from "react"
import { View, ScrollView, Button, Text, TouchableOpacity, Image, ImageBackground } from "react-native"
import styles from "./styles";

export function ShoppingCart({ navigation }){
    const [valorTotal, setValorTotal] = useState(0)

    const img = { uri: 'https://th.bing.com/th/id/OIP.knGOtQhXQcQr5yfBYSRmRAHaEK?pid=ImgDet&rs=1'}

    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <ImageBackground source={img} resizeMode='cover' style={styles.headerImgStore} imageStyle={{height: "100%"}}>
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