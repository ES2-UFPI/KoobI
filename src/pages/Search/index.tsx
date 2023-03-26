import React, { useState, useEffect } from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import BackButton from "../../components/BackButton";
import themes from "../../themes";
import styles from "../Search/styles";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

export function SearchPage({ navigation }) {
  const [text, setText] = useState("");
  // const [book, setBook] = useState(null);
  // const [error, setError] = useState(null);
  const [results, setResults] = useState([]);

  
  useEffect(() => {
    async function getLivros(){
      const livros = collection(db, "livros");

      const queryTitle = query(livros, where("title", "==", text));
      const querySnapshotTitle = await getDocs(queryTitle);
      const list = [];
      querySnapshotTitle.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        list.push({ ...doc.data(), id: doc.id});
        console.log(doc.id, " => ", doc.data());
      });
      setResults(list);
    }
    getLivros();
  }, [text]);

  return (
    <View
      style={{
        height: "100%",
        backgroundColor: themes.colors.tela.primaryBackground,
      }}
    >
      <View style={styles.headerBox}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackButton />
        </TouchableOpacity>
      </View>
      <Text style={styles.labelPesquisa}>Pesquisar</Text>
      <View style={styles.row}>
        <TextInput
          placeholder="Digite aqui"
          style={styles.areaPesquisa}
          value={text}
          onChangeText={setText}
        ></TextInput>

        <TouchableOpacity style={styles.buttonSearch}>
          <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        contentContainerStyle={styles.blockResultItems}
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.resultItems}>
              <View style={styles.resultRow}>
                <Text style={styles.tituloPrize}>{item.title}</Text>
                <Text style={styles.tituloPrize}>{item.prize}</Text>
              </View>
              
              <Text style={styles.descript}>{item.description}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
