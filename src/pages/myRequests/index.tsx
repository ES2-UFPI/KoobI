import React from 'react'
import { Text, View } from 'react-native'
import themes from '../../themes'

export function MyRequests() {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: themes.colors.tela.primaryBackground
        }}>
            <Text>Pedidos</Text>
        </View>
    )
}