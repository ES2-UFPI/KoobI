import React, { useState, useContext, useEffect } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import themes from "../../themes";
import { UserContext } from "../../context/token";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { database } from "../../services/firebaseConfig";

export function MyRequests() {
  const { user } = useContext(UserContext);
  const [views, setViews] = useState([]);

  useEffect(() => {
    async function getRequests() {
      try {// console.log(user.uid);
        const docRef = doc(database, "Users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          const currentRequests = userData.pedidos || [];
          // console.log(currentRequests);
          const RequestsWithIds = currentRequests.map((lists) => {
            return { ...lists, id: currentRequests.indexOf(lists) };
          });
          setViews(RequestsWithIds);

        } else {
          console.log("Documento não encontrado!");
        }
      }catch(e){
        console.error("Error adding document: ", e);
      }
    }
    getRequests();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: themes.colors.tela.primaryBackground,
      }}
    >
      <FlatList
        contentContainerStyle={styles.scrollContainer}
        data={views}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View>
                <Text>Lista de pedidos {item.id}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
