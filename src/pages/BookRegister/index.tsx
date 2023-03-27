import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as ImagePicker from "expo-image-picker";
import DatePicker from "../../components/DatePicker";
import Radio from "../../components/Radio/index";
import ImageSelector from "../../components/ImageSelector";
import ImageViewer from "../../components/ImageViewer";
import styles from "../BookRegister/styles";
import { Masks } from "react-native-mask-input";

import { format } from "date-fns";

const placeholderImage = require("../../../assets/background.png");

import addBook from "../../services/addBook";
import { useContext } from 'react';

export function BookRegister({ navigation , route }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");
  const [debutDate, setDebutDate] = useState("");
  const [description, setDescription] = useState("");
  const [prize, setPrize] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [selected, setSelected] = useState("");

  const { userID } = route.parms;

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    setDebutDate(format(date, "dd/MM/yyyy"));
    hideDatePicker();
  };

  async function getCameraPermissionsAsync() {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      alert("Você precisa conceder permissão para acessar a câmera");
      return false;
    }
    return true;
  }

  async function getLibraryPermissionsAsync() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("Você precisa conceder permissão para acessar a galeria");
      return false;
    }
    return true;
  }

  async function takeImageAsync() {
    const hasPermission = await getCameraPermissionsAsync();

    if (!hasPermission) {
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("Você não capturou nenhuma imagem");
    }
  }

  async function pickImageAsync() {
    const hasPermission = await getLibraryPermissionsAsync();

    if (!hasPermission) {
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("Você não selecionou nenhuma imagem");
    }
  }

  // ESTRUTURA DO LIVRO NO BD
  const book = {
    title: title,
    author: author,
    gender: gender,
    language: language,
    debutDate: debutDate,
    description: description,
    prize: prize,
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer
            placeholderImageSource={placeholderImage}
            selectedImage={selectedImage}
          />
        </View>

        <ImageSelector
          OnClickCamera={takeImageAsync}
          OnClickGallery={pickImageAsync}
        />

        <TextInputWithLabel
          name="Título"
          value={title}
          onChangeText={setTitle}
          ktype="default"
        />
        <TextInputWithLabel
          name="Autor"
          value={author}
          onChangeText={setAuthor}
          ktype="default"
        />

        <View style={styles.row}>
          <View style={styles.genderArea}>
            <TextInputWithLabel
              name="Gênero"
              value={gender}
              onChangeText={setGender}
              ktype="default"
              style={styles.genderInput}
            />
          </View>

          <View style={styles.languageArea}>
            <TextInputWithLabel
              name="Idioma"
              value={language}
              onChangeText={setLanguage}
              ktype="default"
              style={styles.languageInput}
            />
          </View>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={showDatePicker}>
            <DatePicker date={debutDate}></DatePicker>
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onCancel={hideDatePicker}
            onConfirm={handleConfirm}
          />

          <View>
            <Text style={styles.labelText}>Tipo</Text>

            <Radio
              selected={selected}
              options={["Novo", "Usado"]}
              horizontal={true}
              onChangeSelect={(i: any) => {
                setSelected(i);
              }}
            />
          </View>
        </View>

        <TextInputWithLabel
          name="Descrição"
          value={description}
          onChangeText={setDescription}
          ktype="default"
          multiline={true}
          style={{ height: "auto" }}
        />

        <TextInputWithLabel
          name="Preço"
          value={prize}
          onChangeText={setPrize}
          ktype="numeric"
          placeholder="R$"
          mask={Masks.BRL_CURRENCY}
          style={{ width: "45%" }}
        />

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
            addBook(userID, book);
            }}
          >
            <Text style={styles.addButtonText}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
