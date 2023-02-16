import React , {useState} from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import BackButton from "../../components/BackButton";
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
        <TouchableOpacity
        style={{width: '100%', backgroundColor: '#16262E'}}
        onPress={() => navigation.goBack()}
        >
            <BackButton/>
        </TouchableOpacity>
        <ScrollView>
            <TextInputWithLabel 
                name="Título"
                value={title}
                onChangeText={setTitle}
                ktype="default"
            />
            

        </ScrollView>
    </View>


    );
}