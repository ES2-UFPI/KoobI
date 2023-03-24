import React, { useState } from "react";
import { Text,  View, TouchableOpacity } from 'react-native'; 
import { Ionicons } from '@expo/vector-icons';
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
    const [hidePass, setHidePass] = useState(props.isPassword);
    return(
    <View>
        <View style={styles.textLabelArea}>
            <Text style={[styles.textLabel, props.styleName]}>
                {props.name}
            </Text>
        </View>
        <View style={[styles.inputArea, props.style]}>
            <InputMask
                multiline = {props.multiline}
                style = {[styles.textInput, props.style, {width: "100%"}]}
                keyboardType = {props.ktype}
                value = {props.value}
                secureTextEntry={hidePass && props.isPassword}
                onChangeText = {text => props.onChangeText(text)}
                mask = {props.mask}
                placeholder={props.placeholder}
            />
            <TouchableOpacity style={[styles.icon, {display: props.isPassword? "flex" : "none"}]} onPress={ () => setHidePass(!hidePass)}>
                { hidePass? 
                    <Ionicons
                        name="eye" color="black" size={15}
                    />
                    :
                    <Ionicons
                        name="eye-off" color="black" size={15}
                    />
                }
            </TouchableOpacity>

        </View>
    </View>
    )
}


  