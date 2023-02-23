import React, { useState } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Header from '../../components/Header'
import styles from './styles'

export function MainPage() {
    const views = [
        <TouchableOpacity key="view1" style={styles.elementProduct} />,
        <TouchableOpacity key="view2" style={styles.elementProduct} />,
        <TouchableOpacity key="view3" style={styles.elementProduct} />,
        <TouchableOpacity key="view4" style={styles.elementProduct} />,
        <TouchableOpacity key="view5" style={styles.elementProduct} />,
        <TouchableOpacity key="view6" style={styles.elementProduct} />,
        <TouchableOpacity key="view7" style={styles.elementProduct} />,
    ];

    return (
        <View style={styles.principalPage}>
            <Header/>
            <ScrollView contentContainerStyle={styles.scrollOfElements}>
                <TouchableOpacity style={styles.viewPrincipal}>

                </TouchableOpacity>
                <View style={{borderWidth: 0.6, width: '90%'}}></View>

                <Text>Catálogo de Produtos</Text>
                
                {views}

            </ScrollView>    
        </View>
    )
}

