import React, { useState, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";
import BackButton from "../../components/BackButton";
import { UserContext } from "../../context/token";
import addItemToCart from "../../services/addItemToCart";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../../services/firebaseConfig";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/15212791/pexels-photo-15212791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    id: 2,
    url: "https://images.pexels.com/photos/15579372/pexels-photo-15579372.jpeg",
  },

];

const OnBoardingItem = ({ item }) => {
  return (
    <Image source={{ uri: item.url }} style={{ width: 353, height: 300 }} />
  );
};

export function ProductPurchase({ navigation, route }) {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [adicionado, setAdicionado] = useState(false);
  // const [addedBookID, setAddedBookID] = useState("");

  const { user } = React.useContext(UserContext);


  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.headerButton}
        onPress={() => navigation.goBack()}
      >
        <BackButton />
      </TouchableOpacity>

      <View style={styles.areaProduct}>
        <View style={styles.boxProduct}>
          <LinearGradient
            style={styles.labelBook}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            colors={["#462B4D", "#E0B4E4"]}
          >
            <Text style={styles.tittleText}>{route.params.title}</Text>
          </LinearGradient>

          <FlatList
            data={images}
            style={styles.imageList}
            pagingEnabled
            horizontal
            onMomentumScrollEnd={(event) => {
              setActiveIndex(event.nativeEvent?.contentOffset.x / 360);
            }}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => String(item?.id)}
            renderItem={({ item }) => <OnBoardingItem item={item} />}
          />

          {images.length > 1 ? (
            <View style={styles.dotsContainer}>
              {images.map((_, i) => (
                <View
                  style={[
                    styles.dot,
                    {
                      backgroundColor: i == activeIndex ? "#1b1b1b" : "#595a61",
                    },
                  ]}
                />
              ))}
            </View>
          ) : null}

          <View style={styles.description}>
            <Text style={styles.labelsText}> Description </Text>
            <Text style={styles.textStyle}>
              {route.params.description}
            </Text>
          </View>
          <View style={styles.optionsBook}>
            <View style={styles.autorVend}>
              <View>
                <Text style={[styles.labelsText]}>Autor</Text>
                <Text style={styles.namesText}>{route.params.author}</Text>
              </View>
              <View>
                <Text style={styles.labelsText}>Vendedor</Text>
                <Text style={styles.namesText}>{route.params.storeName}</Text>
              </View>
            </View>
            <View
              style={{ width: "85%", height: 2, backgroundColor: "#000" }}
            />
            <View style={styles.valorCompra}>
              <View>
                <Text style={styles.labelsText}>Valor</Text>
                <Text style={styles.textValor}>{route.params.prize}</Text>
              </View>
              <TouchableOpacity
                style={styles.botaoAddCar}
                onPress={() => {
                  addItemToCart(user.uid, route.params.store, parseInt(route.params.id));
                  navigation.navigate("CarrinhoComp", {storeName: route.params.storeName});
                }}
              >
                <Text style={styles.botaoText}>Adicionar ao carrinho</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
