import React , {useState} from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import styles from "../BookRegister/styles"
import BackButton from "../../components/BackButton";


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
        <View style={{backgroundColor: '#16262E', width: '100%', }}>
            <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{}}
            >
                <BackButton/>
            </TouchableOpacity>
        </View>
        <ScrollView 
        contentContainerStyle={styles.form}>
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

            <View style={styles.rowLine}>
                
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

            <View style={styles.rowLine}>
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

        </ScrollView>
    </View>


    );
}