import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
interface datePickerProps{
    date: any
}

export default function DatePicker({...props}:datePickerProps){
    return(
        <View style={styles.viewArea}>
            <View style={styles.textLabelArea}>
                <Text style={styles.textLabel}>Lançamento</Text>    
            </View>
            <View style={styles.textInputArea}>
                <Text style={styles.textInput}>{props.date}</Text>
            </View>
        </View>
    );
}
