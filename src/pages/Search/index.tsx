import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native'
import BackButton from '../../components/BackButton'
import themes from '../../themes';

import getBook from '../../services/getBook';
import deleteBook from '../../services/deleteBook'

export function SearchPage({ navigation }) {

    const [text, setText] = useState('');

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
                <TouchableOpacity style={styles.addButton} 
                    onPress={() => {
                       // getBook(text);
                       deleteBook(text);
                        }}>
                    <Text style={styles.addButtonText}>
                        Pesquisar                       
                    </Text>
                </TouchableOpacity>
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
    addButton: {
        flex: 2,
        backgroundColor: "#2E4756",
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        height: 52,
        width: "35%",
        padding: 10,
        marginTop: 30,
        marginLeft: 15
    },
    addButtonText: {
        fontFamily: 'Inter_700Bold',
        fontWeight: "bold",
        color: "#F6F6F6",
        fontSize: 18
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: Dimensions.get("window").width * 0.85
    }
})