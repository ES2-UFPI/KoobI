import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import styles from "./styles";


import login from "../../services/login"
/*
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(email,password)
    login(email, password)
    }
*/


export function Login({ navigation }) {
  const [loginUser, setLoginUser] = useState("")
  const [passwordUser, setPasswordUser] = useState("")

  return (
    <LinearGradient 
      style={styles.container}
      start={{x:0,y:0}}
      end={{x:1.4,y:0.87}}
      colors={["#004E7D", "#ffb9007f"]}
    >
      <Image
      source={require('../../../assets/LogoMarca.png')}
      />
      <View>
        <TextInputWithLabel
        name="Login"
        placeholder="Usuário"
        ktype="default"
        styleName={{color: "#fafafa", paddingLeft: 12}}
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
        styleName={{color: "#fafafa", paddingLeft: 12}}

        />

      </View>
      <TouchableOpacity style={styles.buttonEntry} onPress={() => navigation.navigate("Telas")}>
        <LinearGradient
        style={[{width: "100%", height: "100%"}, styles.buttonEntry]}
        start={{x:0,y:0}}
        end={{x:0.05,y:1.5}}
        colors={["#004E7D", "#ffb90020"]}
        >
          <Text style={styles.textEntry}>Entrar</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={{flexDirection: "row"}}>
        <Text>Esqueceu a senha? </Text>
        <TouchableOpacity><Text style={{color: "#0066ff"}}>Recuperar Senha</Text></TouchableOpacity>
      </View>

      <View style={{flexDirection: "row"}}>
        <Text>Ou registre-se </Text>
        <TouchableOpacity onPress={() => navigation.navigate("RegistroUsuario")}>
          <Text style={{textDecorationLine: "underline"}}>aqui</Text>
        </TouchableOpacity>
      </View>

    </LinearGradient>
  );
}