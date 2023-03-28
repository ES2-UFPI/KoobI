import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import Header from '../../components/Header'
import styles from './styles'

export function Catalog( { navigation } ) {
    const views = [
        <TouchableOpacity key="view1" style={styles.elementProduct} onPress={() => navigation.navigate('Loja')}>
            <Image
            style={{flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15}}
            source={{uri: 'https://i0.statig.com.br/bancodeimagens/2e/ay/c8/2eayc8dq3npvwyke67qs69bqp.jpg'}}
            />
            <View style={styles.viewElementProduct}>
                <Text style={styles.textLinksLibs}>Nome da Livraria</Text>
                <Text style={[styles.textLinksLibs, {textAlign: 'right', color: "#515050"}]}>{} Nº de títulos</Text>
            </View>
        </TouchableOpacity>,

        <TouchableOpacity key="view2" style={styles.elementProduct} onPress={() => navigation.navigate('Loja')}>
            <Image
            style={{flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15}}
            source={{uri: 'https://th.bing.com/th/id/R.f5a41d265b26ee758bc02efc5e69cab9?rik=hYsJs4D1r%2f09sA&pid=ImgRaw&r=0'}}
            />
            <View style={styles.viewElementProduct}>
                <Text style={styles.textLinksLibs}>Nome da Livraria</Text>
                <Text style={[styles.textLinksLibs, {textAlign: 'right', color: "#515050"}]}>{} Nº de títulos</Text>
            </View>
        </TouchableOpacity>,


    ];

    return (
        <View style={styles.principalPage}>
            <ScrollView contentContainerStyle={styles.scrollOfElements}>
            <Header/>
                
                {views}

            </ScrollView>    
        </View>
    )
}

