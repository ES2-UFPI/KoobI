import React , {useState} from "react";
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import styles from "./styles"
import BackButton from "../../components/BackButton";

const images = [
    {
        id: 1,
        url: 'https://images.pexels.com/photos/15212791/pexels-photo-15212791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },

    {
        id: 2,
        url: 'https://images.pexels.com/photos/15579372/pexels-photo-15579372.jpeg',
    },

    {
        id: 3,
        url: 'https://images.pexels.com/photos/14446665/pexels-photo-14446665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },

    {
        id: 4,
        url: 'https://images.pexels.com/photos/14790095/pexels-photo-14790095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },

]

// useEffect(() => {
//     fetch('https://sua-api-firebase.com/images')
//       .then(response => response.json())
//       .then(data => setData(images))
//       .catch(error => console.log(error));
//   }, []);

const OnBoardingItem = ( {item} ) => {
    return (
        <Image source={{ uri: item.url }} style={{ width: 353, height: 300 }}/>
    )
}

export function ProductPurchase( { navigation } ){
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.headerButton}
                onPress={() => navigation.goBack()}
            >
                <BackButton/>
            </TouchableOpacity>

            <View style={styles.areaProduct}>
                <View style={styles.boxProduct}>
                    <LinearGradient
                    style={styles.labelBook}
                    start={{x:0,y:1}}
                    end={{x:0,y:0}}
                    colors={["#D1B56A", "#F8F4D9"]}
                    >
                        <Text style={styles.tittleText}>Nome do livro</Text>

                    </LinearGradient>

                    <FlatList
                        data={images}
                        style={styles.imageList}
                        pagingEnabled
                        horizontal
                        onMomentumScrollEnd={(event)=> { setActiveIndex((event.nativeEvent?.contentOffset.x/360)) }}
                        scrollEventThrottle={16}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={ (item)=> String(item?.id)}
                        renderItem={({item}) => <OnBoardingItem item={item}/>}
                    />

                    {
                        images.length > 1 ? 
                        <View style={styles.dotsContainer}>
                            {
                                images.map((_,i)=>(
                                    <View
                                        style={[styles.dot, {backgroundColor: i == activeIndex ? '#1b1b1b': '#595a61'}]}
                                    />
                                ))
                            }
                        </View>
                        : null
                    }

                    <View style={styles.description}>
                        <Text style={styles.labelsText}> Description </Text>
                        <Text style={styles.textStyle}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ut enim ad minim veniam, quis nostrud exercitation ullamco. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </Text>
                    </View>
                    <View style={styles.optionsBook}>
                        <View style={styles.autorVend}>
                            <View>
                                <Text style={styles.labelsText}>Autor</Text>
                                <Text style={styles.namesText}>Ariano Suassuna</Text>
                            </View>
                            <View>
                                <Text style={styles.labelsText}>Vendedor</Text>
                                <Text style={styles.namesText}>Fulano Dital</Text>
                            </View>

                        </View>
                        <View style={{width: '85%', height: 2, backgroundColor: '#000'}}/>
                        <View style={styles.valorCompra}>
                            <View>
                                <Text style={styles.labelsText}>Valor</Text>
                                <Text style={styles.textValor}>R$ 15,00</Text>
                            </View>
                            <TouchableOpacity style={styles.botaoAddCar}>
                                <Text style={styles.botaoText}>Adicionar ao carrinho</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

