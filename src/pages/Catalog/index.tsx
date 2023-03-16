import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import Header from '../../components/Header'
import styles from './styles'

export function Catalog( {navigation} ) {
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

        <TouchableOpacity key="view3" style={styles.elementProduct} onPress={() => navigation.navigate('Loja')}>
            <Image
            style={{flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15}}
            source={{uri: 'https://almeidajunior-prod1.s3.amazonaws.com/prod/media_cache/store_picture_file_full/57c4a049b26dc.JPG'}}
            />
            <View style={styles.viewElementProduct}>
                <Text style={styles.textLinksLibs}>Livraria Catarinense</Text>
                <Text style={[styles.textLinksLibs, {textAlign: 'right', color: "#515050"}]}>{} Nº de títulos</Text>
            </View>
        </TouchableOpacity>,

        <TouchableOpacity key="view4" style={styles.elementProduct} onPress={() => navigation.navigate('Loja')}>
            <Image
            style={{flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15}}
            source={{uri: 'https://th.bing.com/th/id/R.d5e5a57943df2897121c9426fd9f55f3?rik=mXxseMSptlMhOw&riu=http%3a%2f%2fwww.myownportugal.com%2fwp-content%2fuploads%2f2015%2f08%2fLIVRARIA-ARQUIVO_My-Own-Portugal3.jpg&ehk=sDIJqGzLZASool1vX3RcrmeVkjf53WgDMGRGWWhslds%3d&risl=&pid=ImgRaw&r=0'}}
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

