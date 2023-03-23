import React, { useState } from "react";
import { View, Image, Text, TextInput, TouchableOpacity} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import themes from "../../themes";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import styles from "../Profile/styles";

export function Login({ navigation }) {
  const [loginUser, setLoginUser] = useState("")

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
      <View style={styles.loginPass}>
        <Text style={styles.login}>Login</Text>
        <TextInput
        style={[styles.inputLoginPass,{backgroundColor: "#FFF5D3"}]}
        value={loginUser}
        onChangeText={setLoginUser}
        />

        <Text>Senha</Text>
        <TextInput
        style={[styles.inputLoginPass,{backgroundColor: "#FFF5D3"}]}
        value={loginUser}
        onChangeText={setLoginUser}
        />
      </View>
      <TouchableOpacity>
        <LinearGradient
        start={{x:0,y:0}}
        end={{x:1.4,y:0.87}}
        colors={["#004E7D", "#ffb9007f"]}
        >
          <Text style={styles.textEntry}>Entrar</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={{flexDirection: "row"}}>
        <Text>Esqueceu a senha? </Text>
        <TouchableOpacity><Text style={{color: "#0066ff"}}>Recuperar Senha</Text></TouchableOpacity>
      </View>

      <View style={{flexDirection: "row"}}>
        <Text>Ou registre-se</Text>
        <TouchableOpacity>
          <Text>aqui</Text>
        </TouchableOpacity>
      </View>

    </LinearGradient>
  );
}
