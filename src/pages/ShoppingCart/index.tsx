import { collection, getDoc, doc } from "firebase/firestore";
import { database } from "../../services/firebaseConfig";
import { AntDesign } from "@expo/vector-icons";
import React, { useState, useEffect, useContext } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
} from "react-native";
import styles from "./styles";
import { UserContext } from "../../context/token";
import remItemFromCart from "../../services/remItemFromCart";
import updateCart from "../../services/updateCart";

export function ShoppingCart({ navigation, route }) {
  const { user } = useContext(UserContext);
  const [views, setViews] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);

  const img = {
    uri: "https://th.bing.com/th/id/OIP.knGOtQhXQcQr5yfBYSRmRAHaEK?pid=ImgDet&rs=1",
  };

  useEffect(() => {
    async function getLivros() {
      try {
        // console.log(user.uid);
        const docRef = doc(database, "Users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          const currentBooks = userData.shopCart || [];
          let value = 0;
          const booksWithIds = currentBooks.map((book) => {
            value += parseFloat(book.prize.substring(3).replace(",", "."));

            return { ...book, id: currentBooks.indexOf(book)  };
          });
          setValorTotal(value);
          setViews(booksWithIds);
          console.log([views]);
        } else {
          console.log("Documento não encontrado!");
        }
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    getLivros();
  }, [views]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={img}
        resizeMode="cover"
        style={styles.headerImgStore}
        imageStyle={{ height: "100%" }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Image source={require("../../../assets/BackIconNormal.png")} />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.labelStore}>
        <Text style={styles.textLabel}>{route.params.storeName}</Text>
      </View>

      <FlatList
        contentContainerStyle={styles.scrollContainer}
        data={views}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.resultItems}>
              <View style={styles.resultRow}>
                <View>
                  <Text style={styles.tituloName}>{item.title}</Text>
                  <Text style={styles.tituloPrize}>{item.prize}</Text>
                </View>
                <TouchableOpacity
                  style={styles.buttonDelete}
                  onPress={() => {
                    remItemFromCart(user.uid, item.id);
                    navigation.navigate('CarrinhoComp');
                }}
                >
                  <AntDesign name="delete" size={20} color="#FAFAFA" />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />

      <View style={styles.somaTotal}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.total}>R${valorTotal.toFixed(2)}</Text>
      </View>

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => {
          navigation.navigate("Requests");
          updateCart(user.uid, {views});
        }}
      >
        <Text style={styles.textConfirmButton}>Concluir Pedido</Text>
      </TouchableOpacity>
    </View>
  );
}
