import React, { useContext, useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { UserContext } from "../../context/token";

import BackButton from "../../components/BackButton";
import themes from "../../themes";
import styles from "./styles";

import { database } from "../../services/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export function Profile({ navigation }) {
  const [nameUser, setNameUSer] = useState("");
  const [isPerson, setIsPerson] = useState(true);

  const { user } = useContext(UserContext);

  async function isStore(userID) {
    try {
      const docRef = doc(database, "Users", userID);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        const userType = userData.isStore;
        // console.log(userType);
        if (userType === "Loja") {
          setIsPerson(true);
        } else {
          setIsPerson(false);
        }
      } else {
        console.log("Documento não encontrado!");
        setIsPerson(false);
      }
    } catch (e) {
      console.error("Error: ", e);
      setIsPerson(false);
    }
  }
  

  useEffect(() => {
    async function UserName(userID) {
      try {
        const docRef = doc(database, "Users", userID);
        const docSnap = await getDoc(docRef);
        const userData = docSnap.data();
        setNameUSer(userData.name);
      } catch (e) {
        console.error("Error: ", e);
        setNameUSer("Default");
      }
    }

    UserName(user.uid);
    isStore(user.uid);
  }, [nameUser]);

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: themes.colors.tela.primaryBackground,
        height: "auto",
      }}
    >
      <View style={styles.boxHeadProfile}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackButton />
        </TouchableOpacity>
      </View>
      <View style={styles.imageProfile}>
        <Image source={require("../../../assets/IconeDePerfil.png")} />
        <Text style={styles.textName}>{nameUser}</Text>
      </View>
      <View style={styles.boxAbout}>
        {isPerson ? (
          <TouchableOpacity
            style={styles.line}
            onPress={() => navigation.navigate("Produtos")}
          >
            <MaterialIcons name="library-books" size={30} color="black" />

            <Text style={styles.textLabels}>Meus Produtos</Text>
          </TouchableOpacity>
        ) : null}

        <TouchableOpacity
          style={styles.line}
          onPress={() => navigation.navigate("EditProfile")}
        >
          <FontAwesome5 name="user-edit" size={24} color="black" />
          <Text style={styles.textLabels}>Editar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.line}
          onPress={() => navigation.navigate("LoginPage")}
        >
          <MaterialCommunityIcons name="logout" size={32} color="black" />
          <Text style={styles.textLabels}>Sair</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
