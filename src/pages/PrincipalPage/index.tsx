import React from 'react'
import { Text, View } from 'react-native'
import Header from '../../components/Header'
import styles from '../PrincipalPage/styles'

export function MainPage() {
    return (
        <View style={styles.principalPage}>
            <Header/>
            
            <Text>Página inicial</Text>
        </View>
    )
}