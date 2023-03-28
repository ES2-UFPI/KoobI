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

export function StorePage({ navigation }) {
  //   const img = [
  //     {
  //       uri: "https://th.bing.com/th/id/OIP.knGOtQhXQcQr5yfBYSRmRAHaEK?pid=ImgDet&rs=1",
  //     },

  //     {
  //       uri: "https://http2.mlstatic.com/livro-harry-potter-e-as-reliquias-da-morte-ed-econmica--D_NQ_NP_757301-MLB20312596696_062015-F.jpg",
  //     },
  //     {
  //       uri: "https://th.bing.com/th/id/OIP.cHvwABogsVcbK-z6dJEYrAHaKi?pid=ImgDet&rs=1",
  //     },
  //     {
  //       uri: "https://th.bing.com/th/id/OIP.ASOA1yrBSoU9AbIlZIc52QHaKm?pid=ImgDet&rs=1",
  //     },
  //   ];

  //   const items = [
  //     <TouchableOpacity
  //       key="v1"
  //       style={styles.itemsToSell}
  //       onPress={() => navigation.navigate("CompraProduto")}
  //     >
  //       <ImageBackground
  //         source={img[1]}
  //         style={styles.blockImgBook}
  //         imageStyle={styles.imageBooktoSell}
  //       >
  //         <View style={styles.labelImgSell}>
  //           <View style={styles.labelTittle}>
  //             <Text style={styles.titulo}>
  //               Harry Potter e as Relíquias da Morte parte I
  //             </Text>
  //             <Text style={styles.estadoUso}>Novo</Text>
  //           </View>
  //           <View style={styles.labelTittle}>
  //             <Text style={[styles.titulo, { color: "#515050" }]}>R$ 89,90</Text>
  //             <Text style={styles.estadoUso}>Avaliação fica aqui</Text>
  //           </View>
  //         </View>
  //       </ImageBackground>
  //     </TouchableOpacity>,
  //   ];

  const [isFirstButtonPressed, setIsFirstButtonPressed] = useState(false);
  const [resultsSearch, setResultsSearch] = useState([]);
  const [views, setViews] = useState([]);

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
        const docRef = doc(database, "Users", user.uid);
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
        <Text style={styles.textLabel}>{nameStore}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("CarrinhoComp")}>
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
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("EditProduct", {
                        id: item.id,
                        title: item.title,
                        author: item.author,
                        gender: item.gender,
                        language: item.language,
                        debutDate: item.debutDate,
                        category: item.selected,
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
