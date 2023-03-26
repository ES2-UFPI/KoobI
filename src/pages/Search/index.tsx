import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons';
import BackButton from '../../components/BackButton'
import themes from '../../themes';
import styles from '../Search/styles';

import getBook from '../../services/getBook'

export function SearchPage({ navigation }) {

    const [text, setText] = useState("");
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);

    async function handleSearch() {
    try {
      const result = await getBook(text);
      setBook(result);
      setError(null);
      console.log("BOOK = ", book);
    } catch (e) {
      console.error(e);
      setError("Error searching for book");
    }
  }

    return (
        <View style={{
            height: '100%',
            backgroundColor: themes.colors.tela.primaryBackground
        }}>
            <View style={styles.headerBox}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackButton/>
                </TouchableOpacity>
            </View>
            <Text style={styles.labelPesquisa}>Pesquisar</Text>
            <View style={styles.row}>
                <TextInput
                placeholder='Digite aqui'
                style={styles.areaPesquisa}
                value={text}
                onChangeText={setText}
                >
                </TextInput>
              
                <TouchableOpacity style={styles.buttonSearch} onPress={handleSearch}>
                    <Feather name="search" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}