import React, { useState, useContext } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import styles from "./styles";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import { UserContext } from "../../context/token";

export function Login({ navigation }) {
  const [loginUser, setLoginUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const { setUser } = useContext(UserContext);

  const loginFirebase = () => {
    signInWithEmailAndPassword(auth, loginUser, passwordUser)
      .then((userCredential) => {
        setUser(userCredential.user);
        navigation.navigate("Telas", {
          screen: "Profile",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1.4, y: 0.87 }}
      colors={["#004E7D", "#ffb9007f"]}
    >
      <Image source={require("../../../assets/LogoMarca.png")} />
      <View>
        <TextInputWithLabel
          name="Login"
          placeholder="Usuário"
          ktype="email-address"
          styleName={{ color: "#fafafa", paddingLeft: 12 }}
          style={styles.inputLoginPass}
          value={loginUser}
          onChangeText={setLoginUser}
        />

        <TextInputWithLabel
          name={"Senha"}
          isPassword={true}
          value={passwordUser}
          onChangeText={setPasswordUser}
          placeholder="Senha"
          ktype="default"
          style={styles.inputPass}
          styleName={{ color: "#fafafa", paddingLeft: 12 }}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonEntry}
        onPress={() => {
          loginFirebase();
        }}
      >
        <LinearGradient
          style={[{ width: "100%", height: "100%" }, styles.buttonEntry]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.05, y: 1.5 }}
          colors={["#004E7D", "#ffb90020"]}
        >
          <Text style={styles.textEntry}>Entrar</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={{ flexDirection: "row" }}>
        <Text>Esqueceu a senha? </Text>
        <TouchableOpacity>
          <Text style={{ color: "#0066ff" }}>Recuperar Senha</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Text>Ou registre-se </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("RegistroUsuario")}
        >
          <Text style={{ textDecorationLine: "underline" }}>aqui</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
