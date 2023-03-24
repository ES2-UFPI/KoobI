import React, { Children, useState} from "react";
import { Text,  View, TextInput, TouchableOpacity } from 'react-native'; 
import { Icon } from 'react-native-elements';
import InputMask, { Mask } from 'react-native-mask-input'


import styles from "./styles"

interface textInputProps{
    name: string,
    isPassword?: boolean,
    multiline?: boolean,
    style?: {},
    styleName?:{},
    value: string,
    onChangeText: Function,
    ktype: "default" | "email-address" | "numeric" | "phone-pad" | "number-pad" | "decimal-pad" | "visible-password" | "ascii-capable" | "numbers-and-punctuation" | "url" | "name-phone-pad" | "twitter" | "web-search" | undefined,
    mask?: Mask,
    placeholder?: string
}

export default function TextInputWithLabel({...props}:textInputProps){
    return(
    <View>
        <View style={styles.textLabelArea}>
            <Text style={[styles.textLabel, props.styleName]}>
                {props.name}
            </Text>
        </View>
        <InputMask
            multiline = {props.multiline}
            style = {[styles.textInput, props.style]}
            keyboardType = {props.ktype}
            value = {props.value}
            onChangeText = {text => props.onChangeText(text)}
            mask = {props.mask}
            placeholder={props.placeholder}
        />
    </View>
    )
}


  