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

export function EditProduct({ navigation, route }) {
  const { user } = useContext(UserContext);

  // Recebimento do parâmetro "id" do livro selecionado
  const idTask = route.params.id;

  const [title, setTitle] = useState(route.params.title);
  const [author, setAuthor] = useState(route.params.author);
  const [gender, setGender] = useState(route.params.gender);
  const [language, setLanguage] = useState(route.params.language);
  const [debutDate, setDebutDate] = useState(route.params.debutDate);
  const [description, setDescription] = useState(route.params.description);
  const [prize, setPrize] = useState(route.params.prize);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  // const [selected, setSelected] = useState("");

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

  const book = {
    title,
    author,
    gender,
    language,
    debutDate,
    // category: selected,
    description,
    prize,
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>
          Editar
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

          {/* <View>
            <Text style={styles.labelText}>Tipo</Text>

            <Radio
              selected={selected}
              options={["Novo", "Usado"]}
              horizontal={true}
              onChangeSelect={(i: any) => {
                setSelected(i);
              }}
            />
          </View> */}
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
              updateBook(user.uid, idTask, book);
              navigation.navigate("Produtos");
            }}
          >
            <Text style={styles.addButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => {
            deleteBook(user.uid, idTask, book.title, book.description);
            navigation.navigate("Produtos");
          }}
        >
          <Text style={styles.addButtonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
