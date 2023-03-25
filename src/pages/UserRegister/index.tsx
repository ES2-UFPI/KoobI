import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions } from "react-native";
import { Masks } from "react-native-mask-input";
import { LinearGradient } from "expo-linear-gradient";

import TextInputWithLabel from "../../components/TextInputWithLabel";
import Radio from "../../components/Radio";

import styles from "../UserRegister/styles";
import themes from "../../themes";

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
  const [isStore, setIsStore] = useState("");
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [street, setStreet] = useState("");
  const [numbH, setNumbH] = useState("");

  return (
    <ScrollView>
      <LinearGradient
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1.4, y: 0.87 }}
        colors={["#004E7D", "#ffb9007f"]}
      >
        <Image
          style={styles.imagePrincipal}
          source={require("../../../assets/LogoMarca.png")}
        />
        <Text style={styles.tittleUserReg}>Crie sua conta</Text>
        <View>
          <TextInputWithLabel
            styleName={styles.labelStyle}
            style={styles.inputTextStyle}
            name="CPF"
            value={cpf}
            onChangeText={setCpf}
            placeholder="000.000.000-00"
            ktype="default"
            mask={Masks.BRL_CPF}
          />

          <TextInputWithLabel
            styleName={styles.labelStyle}
            style={styles.inputTextStyle}
            name="Nome"
            value={name}
            onChangeText={setName}
            placeholder="João Fulano"
            ktype="default"
          />

          <TextInputWithLabel
            styleName={styles.labelStyle}
            style={styles.inputTextStyle}
            name="Senha"
            value={passWord}
            onChangeText={setPassWord}
            placeholder="abc123"
            ktype="default"
          />

          <TextInputWithLabel
            styleName={styles.labelStyle}
            style={styles.inputTextStyle}
            name="E-mail"
            value={email}
            onChangeText={setEmail}
            placeholder="fulano@email.com"
            ktype="default"
            
          />

          <View style={styles.rowView}>
            <View style={{width: "30%"}}>
              <TextInputWithLabel
                styleName={styles.labelStyle}
                style={styles.inputState}
                name="Estado"
                value={state}
                onChangeText={setState}
                placeholder="PI"
                ktype="default"
              />
            </View>
            <View style={{ width: "70%"}}>
              <TextInputWithLabel
                styleName={styles.labelStyle}
                style={styles.inputCity}
                name="Cidade"
                value={city}
                onChangeText={setCity}
                placeholder="Teresina"
                ktype="default"
              />
            </View>

          </View>

          <TextInputWithLabel
            styleName={styles.labelStyle}
            style={styles.inputTextStyle}
            name="Bairro"
            value={neighborhood}
            onChangeText={setNeighborhood}
            placeholder="Centro"
            ktype="default"
          />

          <View style={styles.rowView}>
            <View style={{ width: "65%"}}>
              <TextInputWithLabel
                styleName={styles.labelStyle}
                style={styles.inputStreet}
                name="Rua"
                value={street}
                onChangeText={setStreet}
                placeholder="Rua 1"
                ktype="default"
              />
            </View>
            <View style={{ width: "35%"}}>
              <TextInputWithLabel
                styleName={styles.labelStyle}
                style={styles.inputNumbH}
                name="Nº"
                value={numbH}
                onChangeText={setNumbH}
                placeholder="000"
                ktype="numeric"
              />
            </View>
          </View>

          <View style={{paddingLeft: 8,}}>
            <Text style={[styles.labelStyle, {fontSize: 18, fontWeight: 'bold', marginBottom: 12}]}>Tipo de usuário</Text>

            <Radio
              selected={isStore}
              options={["Pessoa física", "Loja"]}
              horizontal={true}
              onChangeSelect={(opt: any) => {
                setIsStore(opt);
              }}
            />
          </View>

        </View>
        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.goBack()}>
          <LinearGradient
          style={[{width: "100%", height: "100%"}, styles.registerButton]}
          start={{x:0,y:0}}
          end={{x:0.05,y:1.5}}
          colors={["#004E7D", "#ffb90001"]}
          >
            <Text style={styles.textRegister}>Cadastrar</Text>
          </LinearGradient>  
        
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text>Já tem uma conta? </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.footerText}>
              Clique aqui
            </Text>
          </TouchableOpacity>
        </View>

      </LinearGradient>
    </ScrollView>
  );
}
