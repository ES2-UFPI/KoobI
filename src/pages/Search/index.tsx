import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View, Text, StyleSheet, Dimensions, Button } from 'react-native'
import BackButton from '../../components/BackButton'
import themes from '../../themes';

import getBook from '../../services/getBook';
import deleteBook from "../../services/deleteBook"

export function SearchPage({ navigation }) {

    const [text, setText] = useState("");
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);

    async function handleSearch() {
    try {
      //const result = await getBook(text);
      const result = await deleteBook(text);
      setBook(result);
      setError(null);
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

const styles = StyleSheet.create({
    headerBox: {
        backgroundColor: themes.colors.principalHeaderColor
    },

    labelPesquisa: {
        fontSize: 20,
        // height: 100,

        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
    },
    areaPesquisa: {
        margin: 15,
        padding: 15,
        borderRadius: 15,
        backgroundColor: themes.colors.inputColorBackground
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: Dimensions.get("window").width * 0.85
    }
})