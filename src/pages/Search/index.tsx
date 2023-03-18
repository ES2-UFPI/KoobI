import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View, Text, StyleSheet, Dimensions, Button } from 'react-native'
import BackButton from '../../components/BackButton'
import themes from '../../themes';
import styles from '../Search/styles';

import getBook from '../../services/getBook';
import deleteBook from "../../services/deleteBook"

export function SearchPage({ navigation }) {

    const [text, setText] = useState("");
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);

    async function handleSearch() {
    try {
      const result = await getBook(text);
      setBook(result);
      setError(null);
      console.log("RESULT = ", result);
      console.log("BOOK = ", book)
    } catch (e) {
      console.error(e);
      setError("Error searching for book");
    }
  }

    return (
        <View style={{
            height: '100%',
            backgroundColor: themes.colors.primaryBackground
        }}>
            <View style={styles.headerBox}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackButton/>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.labelPesquisa}>Pesquisar</Text>
                <TextInput
                placeholder='Digite aqui'
                style={styles.areaPesquisa}
                value={text}
                onChangeText={setText}
                >

                </TextInput>
                
            </View>
            <View style={styles.row}>
                <Button title="Pesquisar" onPress={handleSearch} />
            </View>
        </View>
    );
}