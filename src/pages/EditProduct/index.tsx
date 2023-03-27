import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from './styles';
import { database } from '../../services/firebaseConfig';
import TextInputWithLabel from '../../components/TextInputWithLabel';



export function EditProduct({ navigation, route }) {
  // Recebimento do parâmetro "id" do livro selecionado
  const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
  const idTask = route.params.id

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");
  const [debutDate, setDebutDate] = useState("");
  const [description, setDescription] = useState("");
  const [prize, setPrize] = useState("");

  return (
    <ScrollView
    contentContainerStyle={styles.container}
    >
      <View>
        <Text>{idTask}</Text>
        <Text>{descriptionEdit}</Text>
      </View>
      <TextInputWithLabel
      name="Título"
      value={title}
      onChangeText={setTitle}
      ktype="default"
      />
    </ScrollView>

  );
}
