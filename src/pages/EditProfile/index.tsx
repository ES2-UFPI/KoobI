import React, { useContext, useState } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import { format } from "date-fns";
import { Masks } from "react-native-mask-input";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DatePicker from "../../components/DatePicker";
import Radio from "../../components/Radio";
import { Entypo } from "@expo/vector-icons";

import styles from "./styles";
import { database } from "../../services/firebaseConfig";
import updateBook from "../../services/updateBook";
import { UserContext } from "../../context/token";
import deleteBook from "../../services/deleteBook";
import updateUser from "../../services/updateUser"

export function EditProfile({ navigation, route }) {
  const { user } = useContext(UserContext);

  // Recebimento do parâmetro "id" do livro selecionado
  // const idTask = route.params.id;

  const [name, setName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [street, setStreet] = useState("");
  const [numbH, setNumbH] = useState("");


  const userData = {
    name,
    passWord,
    email,
    adress: {
      state: state,
      city: city,
      neighborhood: neighborhood,
      street: street,
      number: numbH,
    },
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>
          Editar Perfil
          <Entypo name="edit" size={24} color="black" />
        </Text>

        {/* <View style={styles.imageContainer}>
          <ImageViewer
            placeholderImageSource={placeholderImage}
            selectedImage={selectedImage}
          />
        </View>

        <ImageSelector
          OnClickCamera={takeImageAsync}
          OnClickGallery={pickImageAsync}
        /> */}

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
            ktype="email-address"
          />

          <View style={styles.rowView}>
            <View style={{ width: "30%" }}>
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
            <View style={{ width: "70%" }}>
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
            <View style={{ width: "65%" }}>
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
            <View style={{ width: "35%" }}>
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

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              updateUser(user.uid, name, passWord, email, state, city, neighborhood, street, numbH);
              navigation.navigate("LoginPage");
            }}
          >
            <Text style={styles.addButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
