import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import styles from './styles'

export function MainPage() {
    return (
        <View style={styles.principalPage}>
            <Header/>
            <View style={styles.viewPrincipal}>

            </View>
            <View style={{borderWidth: 0.6, width: '90%'}}></View>

            <Text>Página inicial</Text>
        </View>
    )
}

