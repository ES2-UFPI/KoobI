import React , {useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TextInputWithLabel from "../../components/TextInputWithLabel";

import styles from "../BookRegister/styles"

export function BookRegister({ navigation }){
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [gender, setGender] = useState('');
    const [language, setLanguage] = useState('');
    const [date, setDate] = useState('');


    return (
    <View style={styles.container}>
        <View>
            <TextInputWithLabel 
                name="Título"
                value={title}
                onChangeText={setTitle}
                ktype="default"
            />
            
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Produtos')}>

            </TouchableOpacity>

        </View>
    </View>


    );
}