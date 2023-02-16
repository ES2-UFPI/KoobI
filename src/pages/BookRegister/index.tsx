import React , {useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import styles from "../BookRegister/styles"


export function BookRegister({ navigation }){
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [gender, setGender] = useState('');
    const [language, setLanguage] = useState('');
    const [date, setDate] = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    }

    const hideDatePicker = () => { 
        setDatePickerVisibility(false);
    }

    const handleConfirm = (date) => {
        console.warn("Data escolhida!");
    }

    return (
    <View style={styles.container}>
        <View>
            <TextInputWithLabel
                name="Título" 
                value={title}
                onChangeText={setTitle}
                ktype="default"
            />
            <TextInputWithLabel
                name="Autor" 
                value={title}
                onChangeText={setTitle}
                ktype="default"
            />

            <View style={styles.row}>
                
                <DateTimePickerModal
                    isVisible = {isDatePickerVisible}
                    mode="date"
                    onCancel= {hideDatePicker}
                    onConfirm={handleConfirm}
                />
                
                <TextInputWithLabel
                    name="Idioma"
                    value={language}
                    onChangeText={setLanguage}
                    ktype="default"
                />
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.cancelButtonText}>
                        Cancelar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Produtos')}>
                    <Text style={styles.addButtonText}>
                        Adicionar
                    </Text>
                </TouchableOpacity>
                
            </View>

        </View>
    </View>


    );
}