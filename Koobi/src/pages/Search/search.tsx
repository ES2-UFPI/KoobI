import React from 'react'
import { TextInput, TouchableOpacity, View, StyleSheet } from 'react-native'
import BackButton from '../../components/BackButton'


export function SearchPage({ navigation }) {
    return (
        <View style={{
            height: '100%',
            backgroundColor: "#FFFDEA"
        }}>
            <View style={styles.headerBox}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackButton/>
                </TouchableOpacity>
            </View>
            
            <TextInput
            placeholder='Digite aqui'
            style={styles.areaPesquisa}
            >

            </TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    headerBox: {
        backgroundColor: '#FF8B4E'
    },

    areaPesquisa: {
        backgroundColor: '#d5d5d5'
    }
})