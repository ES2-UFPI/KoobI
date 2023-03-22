import React, { useState } from "react"
import { View, TextInput, Text, TouchableOpacity, Image, ScrollView, ImageBackground } from "react-native"
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

    ];
    

    const [isFirstButtonPressed, setIsFirstButtonPressed] = useState(false);
    const [resultsSearch, setResultsSearch] = useState([]);

    const handleSecondButtonPress = () => {
        setIsFirstButtonPressed(true);
    }

    const handleFirstButtonPress = () => {
        setIsFirstButtonPressed(false)
    }

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
                    <TouchableOpacity onPress={() => navigation.navigate()}>
                        <AntDesign name="shoppingcart" size={40} color="black" />
                    </TouchableOpacity>
                
                {/* Buttons de acesso as áreas da loja */}
                </View>
                    {isFirstButtonPressed ? 
                        (
                            <View style={styles.menuOptions}>
                                <TouchableOpacity style={[styles.optionMenu, { borderRightWidth: 1 }]} onPress={handleFirstButtonPress}>
                                    <Text style={[styles.textMenuOptions]}>Produtos</Text>
                                </TouchableOpacity><TouchableOpacity style={[styles.optionMenu, { paddingLeft: 25 }]} onPress={handleSecondButtonPress}>
                                    <Text style={[styles.textMenuOptions, { justifyContent: 'center', fontWeight: "bold" }]}>Pesquisa <Ionicons name="search-outline" size={24} color="black" /></Text>
                                </TouchableOpacity>
                            </View>
                        )
                        :
                        (
                        <View style={styles.menuOptions}>
                            <TouchableOpacity style={[styles.optionMenu, { borderRightWidth: 1 }]} onPress={handleFirstButtonPress}>
                                <Text style={[styles.textMenuOptions, { fontWeight: "bold" }]}>Produtos</Text>
                            </TouchableOpacity><TouchableOpacity style={[styles.optionMenu, { paddingLeft: 25 }]} onPress={handleSecondButtonPress}>
                                <Text style={[styles.textMenuOptions, { justifyContent: 'center' }]}>Pesquisa <Ionicons name="search-outline" size={24} color="black" /></Text>
                            </TouchableOpacity>
                        </View>
                        )
                        
                    }
                    
                {/* área de pesquisa e amostra dos ícones pesquisados */}
                <View style={{alignItems: 'center', height: "100%"}}>
                    {isFirstButtonPressed ?                         
                        <ScrollView contentContainerStyle={{width: 400, height: "100%"}}>
                            <View style={{alignItems: 'flex-start', paddingTop: 15}}>
                                <Text style={[styles.textLabel, {fontStyle: 'normal', fontSize: 20, paddingLeft: 30, paddingBottom: 10}]}>Pesquisar</Text>
                                <TextInput
                                style={styles.searchLabel}
                                placeholder="Pesquisar"
                                />
                                    {
                                    resultsSearch.length != 0 ?
                                    null
                                    :
                                    <View style={styles.notFounded}>
                                        <Text style={styles.textNotFounded}>
                                            O livro que você procura infelizmente não se encontra no nosso banco de dados
                                        </Text>
                                        <Image
                                            source={require('../../../assets/notFounded.png')}
                                        />
                                    </View>
                                    
                                    }
                            </View>
                        </ScrollView>
                        :
                        items
                    }
                </View>

            </ScrollView>
        </View>

    );
}