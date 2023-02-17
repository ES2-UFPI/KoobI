import React , {useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DatePicker from "../../components/DatePicker";

import styles from "../BookRegister/styles"
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";


export function BookRegister({ navigation }){
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [gender, setGender] = useState('');
    const [language, setLanguage] = useState('');
    const [debutDate, setDebutDate] = useState('');

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
                
                <TextInputWithLabel
                    name="Gênero"
                    value={gender}
                    onChangeText={setGender}
                    ktype="default"
                    style={styles.genderInput}
                />
                
                <TextInputWithLabel
                    name="Idioma"
                    value={language}
                    onChangeText={setLanguage}
                    ktype="default"
                    style={styles.languageInput}

                />
            </View>

            <View style={styles.row}>

                <TouchableOpacity
                    onPress={showDatePicker}>
                    <DatePicker date={debutDate}  ></DatePicker>
                </TouchableOpacity>

                <DateTimePickerModal
                    isVisible = {isDatePickerVisible}
                    mode="date"
                    onCancel= {hideDatePicker}
                    onConfirm={handleConfirm}
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