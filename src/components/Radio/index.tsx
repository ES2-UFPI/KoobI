import React, {useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

interface radioProps {
    options: Array<string>,
    horizontal: boolean,
    onChangeSelect: Function,
    selected: number
}

export default function Radio({...props}:radioProps){
    return(
        <View style={styles.horizontal}>
            {props.options.map((opt, index) => 
                <TouchableOpacity
                    onPress={() => props.onChangeSelect(index)}
                    style={styles.optContainer}>
                    <View style={styles.outlineCircle}>
                        {props.selected === index && <View style={styles.innerCircle} />}
                    </View>       
                    <Text style={styles.optText}>
                        {opt}    
                    </Text>    
                </TouchableOpacity>
            )}
        </View>
    )
}

