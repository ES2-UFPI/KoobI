import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  FlatList,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { doc, getDoc } from "firebase/firestore";
import { UserContext } from "../../context/token";
import { database } from "../../services/firebaseConfig";

const nameStore = "Leitura Livraria";

export function StorePage({ navigation, route }) {


  const [isFirstButtonPressed, setIsFirstButtonPressed] = useState(false);
  const [resultsSearch, setResultsSearch] = useState([]);
  const [views, setViews] = useState([]);
  const [storeID, setStoreID] = useState(route.params.id);


  const handleSecondButtonPress = () => {
    setIsFirstButtonPressed(true);
  };

  const handleFirstButtonPress = () => {
    setIsFirstButtonPressed(false);
  };

  const { user } = React.useContext(UserContext);

  useEffect(() => {
    async function getLivros() {
      try {
        // console.log(user.uid);
        const docRef = doc(database, "Users", storeID);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          const currentBooks = userData.livros || [];
          // console.log(currentBooks);
          const booksWithIds = currentBooks.map((book) => {
            return { ...book, id: currentBooks.indexOf(book) };
          });
          setViews(booksWithIds);
          // console.log(userData.livros);
        } else {
          console.log("Documento não encontrado!");
        }
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    getLivros();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://th.bing.com/th/id/OIP.knGOtQhXQcQr5yfBYSRmRAHaEK?pid=ImgDet&rs=1",
        }}
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
        <Text style={styles.textLabel}>{route.params.name}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("CarrinhoComp", {storeName: route.params.name})}>
          <AntDesign name="shoppingcart" size={40} color="black" />
        </TouchableOpacity>
      </View>

      {/* Buttons de acesso as áreas da loja */}
      {isFirstButtonPressed ? (
        <View style={styles.menuOptions}>
          <TouchableOpacity
            style={[styles.optionMenu, { borderRightWidth: 1 }]}
            onPress={handleFirstButtonPress}
          >
            <Text style={[styles.textMenuOptions]}>Produtos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.optionMenu, { paddingLeft: 25 }]}
            onPress={handleSecondButtonPress}
          >
            <Text
              style={[
                styles.textMenuOptions,
                { justifyContent: "center", fontWeight: "bold" },
              ]}
            >
              Pesquisa{" "}
              <Ionicons name="search-outline" size={24} color="black" />
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.menuOptions}>
          <TouchableOpacity
            style={[styles.optionMenu, { borderRightWidth: 1 }]}
            onPress={handleFirstButtonPress}
          >
            <Text style={[styles.textMenuOptions, { fontWeight: "bold" }]}>
              Produtos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.optionMenu, { paddingLeft: 25 }]}
            onPress={handleSecondButtonPress}
          >
            <Text
              style={[styles.textMenuOptions, { justifyContent: "center" }]}
            >
              Pesquisa{" "}
              <Ionicons name="search-outline" size={24} color="black" />
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* área de pesquisa e amostra dos ícones pesquisados */}
      <View style={{ alignItems: "center", height: "100%" }}>
        {isFirstButtonPressed ? (
          <ScrollView contentContainerStyle={{ width: 400, height: "100%" }}>
            <View style={{ alignItems: "flex-start", paddingTop: 15 }}>
              <Text
                style={[
                  styles.textLabel,
                  {
                    fontStyle: "normal",
                    fontSize: 20,
                    paddingLeft: 30,
                    paddingBottom: 10,
                  },
                ]}
              >
                Pesquisar
              </Text>
              <TextInput style={styles.searchLabel} placeholder="Pesquisar" />
              {resultsSearch.length != 0 ? null : (
                <View style={styles.notFounded}>
                  <Text style={styles.textNotFounded}>
                    O livro que você procura infelizmente não se encontra no
                    nosso banco de dados
                  </Text>
                  <Image source={require("../../../assets/notFounded.png")} />
                </View>
              )}
            </View>
          </ScrollView>
        ) : (
          
          <FlatList
            // style={styles.scrollContainer}
            data={views}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View style={styles.resultItems}>
                  {/* <Text>{storeID}</Text> */}
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("CompraProduto", {
                        store: storeID,
                        storeName: route.params.name,
                        id: item.id,
                        title: item.title,
                        author: item.author,
                        gender: item.gender,
                        language: item.language,
                        debutDate: item.debutDate,
                        description: item.description,
                        prize: item.prize,
                      });
                    }}
                  >
                    <View style={styles.resultRow}>
                      <Text style={styles.tituloName}>{item.title}</Text>
                      <Text style={styles.tituloPrize}>{item.prize}</Text>
                    </View>

                    <Text style={styles.descript}>{item.description}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        )}
      </View>
    </View>
  );
}
