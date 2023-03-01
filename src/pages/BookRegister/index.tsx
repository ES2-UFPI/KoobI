import React , {useState} from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DatePicker from "../../components/DatePicker";
import  Radio  from "../../components/Radio/index" 
import styles from "../BookRegister/styles"

import { collection, addDoc } from "firebase/firestore";
import db from "../../services/firebaseConfig"

export function BookRegister({ navigation }){
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [gender, setGender] = useState('');
    const [language, setLanguage] = useState('');
    const [debutDate, setDebutDate] = useState('');
    const [description, setDescription] = useState('');
    const [prize, setPrize] = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [selected, setSelected] = useState(0);

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

                <View>

                    <Text style={styles.labelText}>
                        Tipo
                    </Text>

                    <Radio
                        selected={selected}
                        options={["Novo", "Usado"]}
                        horizontal={true}
                        onChangeSelect={ (i:any) => {setSelected(i)}}
                    />
                </View>

            </View>

            <View style={{marginTop: 10}}>
                <TextInputWithLabel
                    name="Descrição"
                    value={description}
                    onChangeText={setDescription}
                    ktype="default"
                    multiline={true}
                />
            </View>

            <View style={ styles.row }>
                <TextInputWithLabel
                    name="Preço"
                    value={prize}
                    onChangeText={setPrize}
                    ktype="numeric"
                    placeholder="R$"
                    style={{width: 130}}
                />
                
                <TouchableOpacity 
                    style={styles.paymentButton}
                    //onPress={}
                >
                    <Text style={styles.paymentText}>
                        Forma de Pagamento
                    </Text>
                </TouchableOpacity>
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