import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import BackButton from '../../components/BackButton/index'


export function MyProducts({ navigation }) {

    const [views, setViews] = useState([]);

    return (
        <View style={{backgroundColor: '#F4EEA9', height: '100%', alignItems: 'center'}}>
            <View style={styles.headerBox}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackButton/>
                </TouchableOpacity>
            </View>

            <View>
                {views}
            </View>

            <TouchableOpacity
            style={styles.addLivro}
            onPress={() => setViews([...views,
                <View key={views.length} style={{ backgroundColor: 'yellow', width: 400, borderBottomWidth: 2,}}>
                <Text>Livro {views.length + 1}</Text>
                <Text>Autor do livro / Nenhum</Text>
                </View>
            ])}>    
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
        height: 80,
        
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