import React from 'react'
import { Text, View } from 'react-native'


export function MyProducts() {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text>Produtos que eu estou vendendo</Text>
        </View>
    )
}