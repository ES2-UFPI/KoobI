import React from 'react'
import { TextInput, TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import BackButton from '../../components/BackButton'
import themes from '../../themes';


export function SearchPage({ navigation }) {
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
                >

                </TextInput>
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
    }
})