import React from 'react'
import { Text, View } from 'react-native'

export function MainPage() {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f71313',
        }}>
            <Text>Página inicial</Text>
        </View>
    )
}