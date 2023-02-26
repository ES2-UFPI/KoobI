import React , {useState} from "react";
import { View, Text, TouchableOpacity, ScrollView, Dimensions, Image } from "react-native";

import TextInputWithLabel from "../../components/TextInputWithLabel";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Carousel from "react-native-snap-carousel";

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

    
    const SLIDER_WIDTH = Dimensions.get('window').width
    const ITEM_WIDTH = SLIDER_WIDTH * 0.88

    const carouselItems = [
        {
            tittle: '1',
            imageUrl: "https://images.pexels.com/photos/15212791/pexels-photo-15212791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            tittle: '2',
            imageUrl: "https://images.pexels.com/photos/15579372/pexels-photo-15579372.jpeg"
        },
        {
            tittle: '3',
            imageUrl: "https://images.pexels.com/photos/13291135/pexels-photo-13291135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]

    function carouselCardItem({item}) {
        return (
            <View style={{width: ITEM_WIDTH}}>
                <Text> {item.title} </Text>
                <Image style={{height: 250, borderRadius: 8}} source={{ uri: `${item.imageUrl}` }} />

            </View>
        )
    }

    return (
    <View style={styles.container}>

        <View style={{backgroundColor: '#16262E', width: '100%', }}>
            <TouchableOpacity
            onPress={() => navigation.goBack()}
            >
                <BackButton/>
            </TouchableOpacity>
        </View>
        <ScrollView 
        contentContainerStyle={styles.form}>
            <View>
                {/* <Text>Ola</Text> */}
                
            {/* <Carousel
                data={carouselItems}
                renderItem={carouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                useScrollView={true}
            /> */}
    
            </View>
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