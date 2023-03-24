import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { Masks } from "react-native-mask-input";
import { LinearGradient } from "expo-linear-gradient";

import TextInputWithLabel from "../../components/TextInputWithLabel";

import styles from "../UserRegister/styles";

import addNewUser from "../../services/addNewUser";

/*
const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log(email,password)
    addNewUser(email, password)
    }
*/

export function UserRegister({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient
        style={styles.scrollScreen}
        start={{ x: 0, y: 0 }}
        end={{ x: 1.4, y: 0.87 }}
        colors={["#004E7D", "#ffb9007f"]}
      >
        <Image source={require("../../../assets/LogoMarca.png")} />
        <Text>Crie sua conta</Text>
        <View>
            <TextInputWithLabel
            name=""
            />
            <TextInputWithLabel
            />
            <TextInputWithLabel
            />
            <TextInputWithLabel
            />
        </View>
        <TouchableOpacity>

        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
}
