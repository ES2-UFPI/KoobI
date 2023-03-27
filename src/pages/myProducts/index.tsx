import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, FlatList} from "react-native";
import BackButton from "../../components/BackButton/index";
import BookToSell from "../../components/BookToSell";
import themes from "../../themes"
import styles from "./styles";
import { collection, getDocs, query } from "firebase/firestore"
import { database } from "../../services/firebaseConfig";

import listAllBooksByUser from "../../services/listAllBooksByUser";

//listAllBooksByUser(userID);

export function MyProducts({ navigation }) {
  const [views, setViews] = useState([]);

  useEffect(() => {
    async function getLivros(){
      const livros = collection(database, "livros");

      const queryTitle = query(livros);
      const querySnapshotTitle = await getDocs(queryTitle);
      const list = [];
      querySnapshotTitle.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        list.push({ ...doc.data(), id: doc.id});
      });
      setViews(list);
    }
    getLivros();
  }, []);

  return (
    <View
      style={{
        backgroundColor: themes.colors.tela.primaryBackground,
        height: "100%",
        width: "100%",
        alignItems: "center",
      }}
    >
      <View style={styles.headerBox}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackButton/>
        </TouchableOpacity>
      </View>
      
      <FlatList
      data={views}
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

      <TouchableOpacity
        style={styles.addLivro}
        onPress={() => navigation.navigate('BookRegister')}
      >
        <Text style={styles.textAdd}>Adicionar Livro</Text>
      </TouchableOpacity>
    
    </View>
  );
}



