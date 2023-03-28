import React, { useState, useContext, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/Header";
import { UserContext } from "../../context/token";
import { database } from "../../services/firebaseConfig";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import styles from "./styles";

export function Catalog({ navigation }) {
  const exemplos = [
    <TouchableOpacity
      key="view1"
      style={styles.elementProduct}
      onPress={() => navigation.navigate("Loja")}
    >
      <Image
        style={{ flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
        source={{
          uri: "https://i0.statig.com.br/bancodeimagens/2e/ay/c8/2eayc8dq3npvwyke67qs69bqp.jpg",
        }}
      />
      <View style={styles.viewElementProduct}>
        <Text style={styles.textLinksLibs}>Nome da Livraria</Text>
        <Text
          style={[
            styles.textLinksLibs,
            { textAlign: "right", color: "#515050" },
          ]}
        >
          {} Nº de títulos
        </Text>
      </View>
    </TouchableOpacity>,

    <TouchableOpacity
      key="view2"
      style={styles.elementProduct}
      onPress={() => navigation.navigate("Loja")}
    >
      <Image
        style={{ flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
        source={{
          uri: "https://th.bing.com/th/id/R.f5a41d265b26ee758bc02efc5e69cab9?rik=hYsJs4D1r%2f09sA&pid=ImgRaw&r=0",
        }}
      />
      <View style={styles.viewElementProduct}>
        <Text style={styles.textLinksLibs}>Nome da Livraria</Text>
        <Text
          style={[
            styles.textLinksLibs,
            { textAlign: "right", color: "#515050" },
          ]}
        >
          {} Nº de títulos
        </Text>
      </View>
    </TouchableOpacity>,
  ];

  const { user } = useContext(UserContext);

  const [views, setViews] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        // console.log(user.uid);
        const userRef = collection(database, "Users");
        const q = query(userRef, where("isStore", "==", "Loja"), where("userID", "!=", user.uid));

        const querySnapshotTitle = await getDocs(q);
        const list = [];
        querySnapshotTitle.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });
        setViews(list);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    getUsers();
  }, []);

  return (
    <View style={styles.principalPage}>
      <Header />

      <FlatList
        contentContainerStyle={styles.scrollOfElements}
        data={views}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.elementProduct}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Loja", {
                    id: item.id,
                    name: item.name,
                    livros: item.livros,
                  });
                }}
              >
                <View style={styles.viewElementProduct}>
                  <Text style={styles.textLinksLibs}>{item.name}</Text>
                  <Text
                    style={[
                      styles.textLinksLibs,
                      { textAlign: "right", color: "#515050" },
                    ]}
                  >
                    {item.livros.length} títulos
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}
