import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import BackButton from '../../components/BackButton/index'


export function MyProducts({ navigation }) {
    return (
        <View style={{backgroundColor: '#F4EEA9', height: '100%', alignItems: 'center'}}>
            <View style={styles.headerBox}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackButton/>
                </TouchableOpacity>
            </View>
            {/* <Text>Produtos que eu estou vendendo</Text> */}
            <View></View>
            <TouchableOpacity style={styles.addLivro}>
                <Text style={styles.textAdd}>Adicionar Livro</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBox: {
        backgroundColor: '#16262E',
        justifyContent: 'flex-start',
        width: '100%'
    },

    addLivro: {
        width: 200,
        height: 100,
        
        margin: 20,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        
        borderRadius: 15,
        elevation: 2,
        backgroundColor: '#D9D9D9'
    },

    textAdd: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})